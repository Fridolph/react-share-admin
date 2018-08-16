import React, {PureComponent} from 'react'
import Admin from '../../../../layouts/Admin'
import BasePage from '../../../../layouts/BasePage'
import './style.less'
import {Card, Tabs, Radio, Icon, Select, Button} from 'antd'

const TabPane = Tabs.TabPane
const Option = Select.Option
const operations = <Button>Extra Action</Button>

export default class UITabs extends PureComponent {
  newTabIndex = 0
  state = {
    mode: 'top',
    size: 'small',
    tabPosition: 'top',
    activeKey: '1',
    panes: [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false }
    ]
  }

  handleModeChange = (e) => {
    const mode = e.target.value
    this.setState({ mode })
  }

  onChange = (e) => {
    this.setState({ size: e.target.value })
  }

  changeTabPosition = (tabPosition) => {
    this.setState({ tabPosition });
  }

  onChanged = activeKey => {
    this.setState({ activeKey })
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }

  add = () => {
    const panes = this.state.panes
    const activeKey = `newTab${this.newTabIndex++}`
    panes.push({
      title: 'New Tab',
      content: 'Content of new Tab',
      key: activeKey
    })
    this.setState({
      panes,
      activeKey
    })
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey
    let lastIndex
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1
      }
    })
    const panes = this.state.panes.filter(pane => pane.key !== targetKey)
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key
    }
    this.setState({
      panes,
      activeKey
    })
  }

  render() {
    const { mode, size } = this.state
    return (
      <Admin>
        <BasePage className="page-buttons">
          <Card title="Tabs页签">
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
              <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
              <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
          </Card>
          <Card title="禁用某一项">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
              <TabPane tab="Tab 2" disabled key="2">Tab 2</TabPane>
              <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
            </Tabs>
          </Card>
          <Card title="有图标的页签">
            <Tabs defaultActiveKey="2">
              <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                Tab 1
              </TabPane>
              <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
                Tab 2
              </TabPane>
            </Tabs>
          </Card>
          <Card title="可以左右、上下滑动，容纳更多标签">
            <div>
              <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                <Radio.Button value="top">Horizontal</Radio.Button>
                <Radio.Button value="left">Vertical</Radio.Button>
              </Radio.Group>
              <Tabs
                defaultActiveKey="1"
                tabPosition={mode}
                style={{ height: 220 }}
              >
                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
                <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
                <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane>
              </Tabs>
            </div>
          </Card>
          <Card title="可以在页签右边添加附加操作">
            <Tabs tabBarExtraContent={operations}>
              <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
              <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
              <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
            </Tabs>
          </Card>
          <Card title="可控制大小">
            <div>
              <Radio.Group value={size} onChange={this.onChange} style={{ marginBottom: 16 }}>
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
              <Tabs defaultActiveKey="1" size={size}>
                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
              </Tabs>
            </div>
          </Card>
          <Card title="4个位置">
            <div style={{ marginBottom: 16 }}>
              Tab position：
              <Select
                value={this.state.tabPosition}
                onChange={this.changeTabPosition}
                dropdownMatchSelectWidth={false}
              >
                <Option value="top">top</Option>
                <Option value="bottom">bottom</Option>
                <Option value="left">left</Option>
                <Option value="right">right</Option>
              </Select>
            </div>
            <Tabs tabPosition={this.state.tabPosition}>
              <TabPane tab="Tab 1" key="1">Content of Tab 1</TabPane>
              <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
              <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
            </Tabs>
          </Card>
          <Card title="卡片式">
            <Tabs onChange={callback} type="card">
              <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
              <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
              <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
          </Card>
          <Card title="新增和关闭页签">
            <Tabs
              onChange={this.onChanged}
              activeKey={this.state.activeKey}
              type="editable-card"
              onEdit={this.onEdit}
            >
              {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
            </Tabs>
          </Card>
        </BasePage>
      </Admin>
    )
  }
}

function callback(key) {
  console.log(key)
}
