import React, {Component} from 'react'
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from 'antd'
import menuConfig from '../../config/menuConfig'
import './style.less'
import AdminHeader from '../AdminHeader'
import AdminFooter from '../AdminFooter'
import UtilDate from '../../utils/date'

const { Content, Sider } = Layout
const SubMenu = Menu.SubMenu

export default class Admin extends Component {
  state = {
    collapsed: false,
    username: 'fridolph'
  }

  onCollapse = collapsed => {
    console.log('collapsed', collapsed)
    this.setState({ collapsed })
  }

  // 菜单渲染
  renderMenu = data => {
    return data.map((item, idx) => {
      if (item.children) {
        return (
          <SubMenu title={<span><Icon type={item.icon}/><span className={this.state.collapsed ? 'hidden' : ''}>{item.title}</span></span>} key={item.key + '-' + idx}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.title}>
            {item.icon ? <Icon type={item.icon} /> : null}
            <span className={this.state.collapsed ? 'hidden' : ''}>
              {item.title}
            </span>
          </Menu.Item>
        )
      }
    })
  }

  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuConfig)
    this.setState({ menuTreeNode })

    setInterval(() => {
      let systemTime = UtilDate.formatDate(new Date().getTime())
      this.setState({
        systemTime
      })
    })
  }

  render() {
    const {username, systemTime} = this.state

    return (
      <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="main-side-logo">
            <img src="/assets/logo-ant.svg"  alt="logo" />
            <h1 className={this.state.collapsed ? 'hidden' : ''}>Imooc ms</h1>
          </div>

          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {this.state.menuTreeNode}
          </Menu>
        </Sider>

        <Layout>
          <AdminHeader username={username} systemTime={systemTime} />

          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              content
            </div>
          </Content>

          <AdminFooter />
        </Layout>
      </Layout>
    )
  }
}
