import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import menuConfig from '../../config/menuConfig'
import './style.less'
import {Switch, Route, Link, Redirect} from 'react-router-dom'
import RouterSider from './RouterSider'
import Header from './Header'
import Footer from './Footer'
import UtilDate from '../../utils/date'
import PageHome from '../../views/Home'
import PageButtons from '../../views/Buttons'

const { Content } = Layout
const {SubMenu} = Menu

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
            <Link to={item.location}>
              {item.icon ? <Icon type={item.icon} /> : null}
              <span className={this.state.collapsed ? 'hidden' : ''}>
                {item.title}
              </span>
            </Link>
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
    }, 1000)
  }

  render() {
    const {username, systemTime, collapsed, menuTreeNode} = this.state

    return (
      <Layout style={{minHeight: '100vh'}}>
        <RouterSider onCollapse={this.onCollapse} collapsed={collapsed} menuTreeNode={menuTreeNode} />

        <Layout>
          <Header username={username} systemTime={systemTime} />

          <Content style={{ margin: '24px 16px 0' }}>
            <Switch>
              <Route exact path="/" render={() => (<Redirect to="/admin/home" />)} />
              <Route path="/admin/home" component={PageHome} />
              <Route path="/admin/ui/buttons" component={PageButtons} />
            </Switch>
          </Content>

          <Footer />
        </Layout>
      </Layout>
    )
  }
}
