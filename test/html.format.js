const str = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>vue cli ssr</title>
<link rel="preload" href="/js/chunk-vendors.b3e760fd.js" as="script"><link rel="preload" href="/js/main.752a8859.js" as="script"><link rel="prefetch" href="/js/chunk-2d22d746.28663d38.js"><style data-vue-ssr-id="24513734:0">#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style><style data-vue-ssr-id="1981986d:0">h3[data-v-469af010] {
  margin: 40px 0 0;
}
ul[data-v-469af010] {
  list-style-type: none;
  padding: 0;
}
li[data-v-469af010] {
  display: inline-block;
  margin: 0 10px;
}
a[data-v-469af010] {
  color: #42b983;
}
</style></head>
<body>
   <div id="app" data-server-rendered="true"><div id="nav"><a href="/" aria-current="page" class="router-link-exact-active router-link-active">Home</a> |
    <a href="/about">About</a></div> <div class="home"><img alt="Vue logo" src="/img/logo.82b9c7a5.png"> <div class="hello" data-v-469af010><h1 data-v-469af010>Welcome to Your Vue.js App</h1> <p data-v-469af010>
    For a guide and recipes on how to configure / customize this project,<br data-v-469af010>
    check out the
    <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-469af010>vue-cli documentation</a>.
  </p> <h3 data-v-469af010>Installed CLI Plugins</h3> <ul data-v-469af010><li data-v-469af010><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-469af010>babel</a></li> <li data-v-469af010><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-469af010>eslint</a></li> <li data-v-469af010><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-469af010>router</a></li> <li data-v-469af010><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-469af010>vuex</a></li></ul> <h3 data-v-469af010>Essential Links</h3> <ul data-v-469af010><li data-v-469af010><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-469af010>Core Docs</a></li> <li data-v-469af010><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-469af010>Forum</a></li> <li data-v-469af010><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-469af010>Community Chat</a></li> <li data-v-469af010><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-469af010>Twitter</a></li> <li data-v-469af010><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-469af010>News</a></li></ul> <h3 data-v-469af010>Ecosystem</h3> <ul data-v-469af010><li data-v-469af010><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-469af010>vue-router</a></li> <li data-v-469af010><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-469af010>vuex</a></li> <li data-v-469af010><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-469af010>vue-devtools</a></li> <li data-v-469af010><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-469af010>vue-loader</a></li> <li data-v-469af010><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-469af010>awesome-vue</a></li></ul></div></div></div><script src="/js/chunk-vendors.b3e760fd.js" defer></script><script src="/js/main.752a8859.js" defer></script>
</body>
</html>`

let result = str
result = result.replace(/<\/li>/g, '</li>\n  ')
result = result.replace(/<\/div>/g, '</div>\n  ')
result = result.replace(/></g, '>\n  <')
console.log(result)
