const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

// 渲染器
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('../dist/server/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/client/vue-ssr-client-manifest.json')
const template = path.resolve(__dirname, '../public/index.temp.html')
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: fs.readFileSync(template, 'utf-8'),
  clientManifest
})

// 静态资源
app.use(express.static(path.resolve(__dirname, '../dist/client'), { index: false }))

app.get('*', async (req, res) => {
  try {
    const ctx = {
      url: req.url,
      title: 'vue cli 3.x ssr '
    }
    const html = await renderer.renderToString(ctx)
    // res.end(formatHtml(html))
    res.end(html)
  } catch (e) {
    console.log(e)
    res.status(500).send('服务器内部错误')
  }
})

app.listen(8080, () => {
  console.log('渲染服务器启动成功')
  console.log('http://localhost:8080')
})

// 格式化html
// eslint-disable-next-line
function formatHtml (html) {
  html = html.replace(/<\/li>/g, '</li>\n')
  html = html.replace(/<\/ul>/g, '</ul>\n')
  html = html.replace(/<\/div>/g, '</div>\n')
  html = html.replace(/<\/h1>/g, '</h1>\n')
  html = html.replace(/<\/h2>/g, '</h2>\n')
  html = html.replace(/<\/h3>/g, '</h3>\n')
  html = html.replace(/<\/h4>/g, '</h4>\n')
  html = html.replace(/<\/h5>/g, '</h5>\n')
  html = html.replace(/<\/h6>/g, '</h6>\n')
  html = html.replace(/<\/p>/g, '</p>\n')
  html = html.replace(/<\/a>/g, '</a>\n')
  html = html.replace(/<a href/g, '\n<a href')
  return html
}
