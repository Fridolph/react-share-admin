import React, {PureComponent} from 'react'
import Admin from '../../../../layouts/Admin'
import BasePage from '../../../../layouts/BasePage'
import './style.less'
import {Card, Button, Icon, Radio, Menu, Dropdown} from 'antd'

const ButtonGroup = Button.Group
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
)
function handleMenuClick(e) {
  console.log('click', e);
}
const RadioGroup = Radio.Group

export default class PageButtons extends PureComponent {
  state = {
    value: 'default',
    loading: false,
    iconLoading: false
  }

  enterLoading = () => {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000)
  }

  enterIconLoading = () => {
    this.setState({
      iconLoading: true
    })
    setTimeout(() => {
      this.setState({
        iconLoading: false
      })
    }, 2000)
  }

  onChange = e => {
    console.log('radio checked -> ', e.target.value)
    this.setState({
      value: e.target.value
    })
  }

  componentDidMount() {
    // console.log('match', this.props.match)
  }

  render() {
    return (
      <Admin>
        <BasePage className="page-buttons">
          <Card title="基础按钮">
            <Button>Test</Button>
            <Button type="primary">Test</Button>
            <Button type="danger">Test</Button>
            <Button disabled>Test</Button>
          </Card>

          <Card title="按钮组">
            <ButtonGroup>
              <Button type="primary">
                <Icon type="left" />Left
              </Button>
              <Button type="primary">
                <Icon type="right" />Right
              </Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button>
                <Icon type="left" />Left
              </Button>
              <Button>
                <Icon type="search" />
              </Button>
              <Button>
                <Icon type="right" />Right
              </Button>
            </ButtonGroup>
          </Card>

          <Card title="loading按钮">
            <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
              {this.state.loading ? 'waiting ...' : 'click me!'}
            </Button>

            <Button loading={this.state.iconLoading} onClick={this.enterIconLoading}>
              {this.state.iconLoading ? '' : <Icon type="download" />}
            </Button>
          </Card>

          <Card title="按钮大小">
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value={'small'}>小</Radio>
              <Radio value={'default'}>中</Radio>
              <Radio value={'large'}>大</Radio>
            </RadioGroup>
            <Button size={this.state.value}>btn1</Button>
            <Button size={this.state.value} type="danger">danger</Button>
            <Button size={this.state.value} type="dashed">btn3</Button>
            <Dropdown overlay={menu}>
              <Button size={this.state.value}>
                Actions <Icon type="down" />
              </Button>
            </Dropdown>
          </Card>
        </BasePage>
      </Admin>
    )
  }
}
