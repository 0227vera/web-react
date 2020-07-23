// 依赖注入
import 'reflect-metadata'

// react 主文件
import React from 'react'
import ReactDOM from 'react-dom'

// react-router
import { Router } from 'react-router-dom'
import { createHistory } from './router/history'

// mobx
// import { Provider } from 'mobx-react'
// import BreadcrumbStore from './store/BreadcrumbStore'
// import container from './store/container'

// 设置antd全局主题并引入整体样式
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'antd/dist/antd.less'

// css in js 的使用设置全局上下文
import { ThemeProvider } from 'styled-components'
import theme from './assets/style/theme'

// 设置项目中的axios相关配置
import './services/SetAxios'

// 业务入口
import App from './App'

function app () {
    const basename = '/'
    const history = createHistory(basename)

    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <ConfigProvider locale={zhCN}>
                    <App />
                </ConfigProvider>
            </Router>
        </ThemeProvider>,
        document.getElementById('root')
    )
}
app()
