import React, {PureComponent} from 'react'
import {Layout, Menu} from 'antd'
import {NavLink} from 'react-router-dom'
import './style.less'

const {Sider} = Layout
// const SubMenu = Menu.SubMenu

export default class RouterSider extends PureComponent {
  render() {
    return (
      <Sider
        className="router-sider"
        collapsible
        collapsed={this.props.collapsed}
        onCollapse={this.props.onCollapse}>
        <div className="main-side-logo">
          <NavLink to="/admin/home">
            <img src="/assets/logo-ant.svg"  alt="logo" />
            <h1 className={this.props.collapsed ? 'hidden' : ''}>Imooc ms</h1>
          </NavLink>
        </div>

        <Menu theme="dark" mode="vertical" defaultSelectedKeys={['2']}
          defaultOpenKeys={['2-1-1']}>
          {this.props.menuTreeNode}
        </Menu>
      </Sider>
    )
  }
}
