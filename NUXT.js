# nuxt

* doc: https://zh.nuxtjs.org/guide/configuration
* github: https://github.com/nuxt/nuxt.js

### install
```
  npm install -g vue-cli

  vue init nuxt-community/starter-template <project-name>

  cd <project-name>

  安装依赖：
  npm install

  启动项目：
  npm run dev

  应用现在运行在 http://localhost:3000
```

无需再为了路由划分而烦恼，你只需要按照对应的文件夹层级创建 .vue 文件就行  
无需考虑数据传输问题，nuxt 会在模板输出之前异步请求数据（需要引入 axios 库），而且对 vuex 有进一步的封装  
内置了 webpack，省去了配置 webpack 的步骤，nuxt 会根据配置打包对应的文件  
