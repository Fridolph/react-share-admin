import React, {Component} from 'react'
import {Layout, Menu} from 'antd'
import {Link} from 'react-router-dom'

const {Sider} = Layout

export default class RouterSider extends Component {
  render() {
    return (
      <Sider collapsible collapsed={this.props.collapsed} onCollapse={this.props.onCollapse}>
        <div className="main-side-logo">
          <Link to="/admin/home">
            <img src="/assets/logo-ant.svg"  alt="logo" />
            <h1 className={this.props.collapsed ? 'hidden' : ''}>Imooc ms</h1>
          </Link>
        </div>

        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {this.props.menuTreeNode}
        </Menu>
      </Sider>
    )
  }
}
