import React, { useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import RouterMain from './router/RouterContainer'
import { Layout, Menu, Avatar, Breadcrumb } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import './assets/style/App.css'
import { Link } from 'react-router-dom'
const { Header, Sider, Content } = Layout



 const App = (props: RouteComponentProps) => {
  // 侧边栏的配置
  const siderOption = [
    {
      text: 'Home',
      key: '/home',
      icon: <UserOutlined />,
      children: [
        {
          text: 'sub1',
          key: '/home/sub1',
          icon: <UserOutlined />
        },
        {
          text: 'sub2',
          key: '/home/sub2',
          icon: <UserOutlined />
        },
      ]
    },
    {
      text: 'Setting',
      key: '/setting',
      icon: <VideoCameraOutlined />
    },
    {
      text: 'Document',
      key: '/document',
      icon:  <UploadOutlined /> 
    },
  ]
  const {location: { pathname } } = props
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* 这个地方的可以自行去安排，是否添加图标，显隐等 */}
        <div style={{
          height:'44px',
          color: '#fff',
          display: 'flex',
          fontWeight: 600,
          fontSize: collapsed ? '10px' : '18px',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <Link to='/' style={{color: '#eeeeee'}}>应用的标题</Link>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
          {siderOption.map(sider => {
            return (
              sider.children ?
              <Menu.SubMenu key={sider.key} icon={sider.icon} title={sider.text}>
                  {sider.children.map(subSider => {
                    return (
                      <Menu.Item key={subSider.key} icon={subSider.icon}>
                        <Link to={subSider.key}>{subSider.text}</Link>
                      </Menu.Item>
                    )
                  })}
              </Menu.SubMenu>
              :
              (<Menu.Item key={sider.key} icon={sider.icon}>
                <Link to={sider.key}>{sider.text}</Link>
              </Menu.Item>)
            )
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background header-layout">
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => {setCollapsed(!collapsed)}
          })}
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Avatar size={40}>USER</Avatar>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          <RouterMain />
        </Content>
      </Layout>
    </Layout>
  )
}

export default withRouter(App)
