# web端react模版

初学时候搭建的，后续还需要持续优化，勉强能够使用

## 项目使用技术

[`react`](https://reactjs.org/) + [`react-router`](https://reactrouter.com/) + [`mobx`](https://mobx.js.org/) + [`ant-design`](https://ant.design/index-cn)

## 项目启动

```shell
npm i

npm start
```

## 注意事项

1. 状态管理使用的是`mobx`，css的书写规范使用的是`styled-components`

2. 项目维护和开始前，请先阅读webpack的相关文件

3. 项目提交时候规范使用的，请阅读`.commitlintrc.js`，具体含义如下：(如果没有满足你的提交需要，可以自行在文件添加提交关键字)

    * feat: 新功能（feature）
    * perf: 项目优化
    * style: 格式（不影响代码运行的变动）
    * fix: 修补bug
    * docs: 文档（documentation）
    * refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
    * test: 增加测试
    * chore: 构建过程或辅助工具的变动
    * ci: 进行ci
    * init: 项目初始化

## 目录结构

```md
|  public                 // 静态文件、相关模版
|
└─src
    │  index.tsx          // 入口文件
    │  App.tsx            // 页面分发的主文件
    ├─assets              // 静态资源目录
    │  ├─images           // 图片
    │  ├─style            // style文件
    ├─components          // 组件目录
    ├─hooks               // 自定义hook文件
    ├─pages               // 业务页面主要放置的地方
    ├─router              // 路由配置需要的文件
    ├─services            // axios的二次封装
    ├─store               // 状态管理文件
    ├─typings             // 声明文件
    └─utils               // 工具类
│  .babelrc               // babel配置
│  .commitlintrc.js       // git提交规范
│  .editorconfig          // 风格配置
│  .eslintignore          // eslint忽略配置
|  .eslintrc              // eslint配置
|  .gitignore             // git提交忽略
|  .npmrc                 // npm源设置
│  package.json           // package配置
│  package-lock.json      // package版本锁定文件
│  README.md              // readme
│  todo                   // 如果有未完成的功能点，或者未解决的问题，请一定要先在此说明
│  tsconfig.json          // tsconfig.json
│  webpack.config.js      // webpack配置
```

## 项目开发过程说明

> 业务开发过程中的注意事项（以及特殊的函数处理等）请记录在此

...
