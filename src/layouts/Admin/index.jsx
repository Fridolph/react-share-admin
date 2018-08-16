import React, { PureComponent } from 'react'
import { Layout, Menu, Icon } from 'antd'
import menuConfig from '../../routes/menuConfig'
import './style.less'
import {NavLink} from 'react-router-dom'
import RouterSider from './RouterSider'
import Header from './Header'
import Footer from './Footer'
import UtilDate from '../../utils/date'

const { Content } = Layout
const {SubMenu} = Menu

export default class Admin extends PureComponent {
  state = {
    collapsed: false,
    username: 'fridolph',
    timer: null
  }

  onCollapse = collapsed => {
    this.setState({ collapsed })
  }

  // 菜单渲染
  renderMenu = tree => {
    return tree.map(item => {
      if (item.children) {
        let content = null
        if (item.icon) {
          content = <span><Icon type={item.icon} /><span style={this.state.collapsed ? {display: 'none'} : {}}>{item.title}</span></span>
        } else {
          content = <span>{item.title}</span>
        }
        return (
          <SubMenu key={item.key} title={content}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      } else {
        let text = null
        if (item.icon) {
          text = <span><Icon type={item.icon} /><span style={this.state.collapsed ? {display: 'none'} : {}}>{item.title}</span></span>
        } else {
          text = <span>{item.title}</span>
        }
        return (
          <Menu.Item key={item.key}>
            <NavLink to={item.location} activeStyle={{color: '#fff'}}>
              {text}
            </NavLink>
          </Menu.Item>
        )
      }
    })
  }

  render() {
    const {username, systemTime, collapsed, menuTreeNode} = this.state
    const large = {marginLeft: 200, transition: 'margin 0.4s ease-in'}
    const small = {marginLeft: 80, transition: 'margin 0.4s ease-out'}

    return (
      <Layout>
        <RouterSider
          onCollapse={this.onCollapse}
          collapsed={collapsed}
          menuTreeNode={menuTreeNode}
        />

        <Layout style={collapsed ? small : large}>
          <Header username={username} systemTime={systemTime} />
          <Content style={{ margin: '24px 16px 0' }}>
            {this.props.children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }

  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuConfig)
    // console.log('menuTreeNode', menuTreeNode)
    const timer = setInterval(() => {
      let systemTime = UtilDate.formatDate(new Date().getTime())
      this.setState(() => ({
        systemTime
      }))
    }, 1000)

    this.setState(() => ({
      menuTreeNode,
      timer
    }))
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
    this.setState(() => ({
      timer: null
    }))
  }
}
