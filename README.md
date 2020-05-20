# vue-cli-ssr
使用vue-cli 3.0+构建服务端渲染，后端服务基于express服务端框架。

## Project setup
```
yarn install
```

### 开发模式
```
yarn dev
```

### 打包
```
yarn build
```

### 打包客户端
```
yarn build:client
```

### 打包客服务端
```
yarn build:server
```

### 服务端渲染webpack配置
```bash
webpack-node-externals lodash.merge -D
```

### 服务端打包失败
错误：
```bash
Server-side bundle should have one single entry file. Avoid using CommonsChunkPlugin in the server config. vuessr...
```
解决：
```js
...
optimization: {
  splitChunks: TARGET_NODE ? false : undefined
},
...
```