import React, {PureComponent} from 'react'
import Admin from '../../../../layouts/Admin'
import BasePage from '../../../../layouts/BasePage'
import './style.less'
import {Link} from 'react-router-dom'
import {Menu, Dropdown, Icon, Card, message, Button} from 'antd'

const SubMenu = Menu.SubMenu

const menu = (<Menu>
  <Menu.Item>
    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
  </Menu.Item>
  <Menu.Item>
    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
  </Menu.Item>
  <Menu.Item>
    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
  </Menu.Item>
</Menu>)

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
}

const menu2 = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
)

const menu3 = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
)

const menu4 = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
)

const menu5 = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
)

const menu6 = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
)

const menu7 = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
    <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
    <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
  </Menu>
)

export default class UIDropdown extends PureComponent {
  render() {
    return (
      <Admin>
        <BasePage className="page-buttons">
          <Card title="基本下拉">
            <Dropdown overlay={menu}>
              <Link className="ant-dropdown-link" to="/admin/ui/Navigation/Dropdown">
                Hover me <Icon type="down" />
              </Link>
            </Dropdown>
            <span>最简单的下拉菜单</span>
            <br />
            <Dropdown overlay={menu2}>
              <Link className="ant-dropdown-link" to="/admin/ui/Navigation/Dropdown">
                Hover me, Click menu item <Icon type="down" />
              </Link>
            </Dropdown>
            <span>触发事件</span>
            <br />
            <Dropdown overlay={menu3}>
              <Link className="ant-dropdown-link" to="/admin/ui/Navigation/Dropdown">
                Cascading menu <Icon type="down" />
              </Link>
            </Dropdown>
            <span>多级菜单</span>
            <br />
            <Dropdown overlay={menu4} trigger={['contextMenu']}>
              <span style={{ userSelect: 'none' }}>Right Click on Me</span>
            </Dropdown>
            <span>右键菜单</span>
            <br />
            <Dropdown overlay={menu5} trigger={['click']}>
              <Link className="ant-dropdown-link" to="/admin/ui/Navigation/Dropdown">
                Click me <Icon type="down" />
              </Link>
            </Dropdown>
            <span>触发方式</span>
          </Card>
          <Card title="按钮Menu">
            <div>
              <p>弹出位置</p>
              <Dropdown overlay={menu6} placement="bottomLeft">
                <Button>bottomLeft</Button>
              </Dropdown>
              <Dropdown overlay={menu6} placement="bottomCenter">
                <Button>bottomCenter</Button>
              </Dropdown>
              <Dropdown overlay={menu6} placement="bottomRight">
                <Button>bottomRight</Button>
              </Dropdown>
              <br />
              <Dropdown overlay={menu6} placement="topLeft">
                <Button>topLeft</Button>
              </Dropdown>
              <Dropdown overlay={menu6} placement="topCenter">
                <Button>topCenter</Button>
              </Dropdown>
              <Dropdown overlay={menu6} placement="topRight">
                <Button>topRight</Button>
              </Dropdown>
            </div>

            <div>
              <p>带下拉框的按钮</p>
              <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
                Dropdown
              </Dropdown.Button>
              <Dropdown.Button
                onClick={handleButtonClick}
                overlay={menu7}
                disabled
                style={{ marginLeft: 8 }}
              >
                Dropdown
              </Dropdown.Button>
              <Dropdown overlay={menu7}>
                <Button style={{ marginLeft: 8 }}>
                  Button <Icon type="down" />
                </Button>
              </Dropdown>
            </div>
          </Card>
        </BasePage>
      </Admin>
    )
  }
}

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}
