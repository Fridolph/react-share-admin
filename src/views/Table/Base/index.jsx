import React, {PureComponent} from 'react'
import Admin from '../../../layouts/Admin'
import BasePage from '../../../layouts/BasePage'
import './style.less'
import {Card, Table, Select, Button} from 'antd'
import request from '../../../utils/request'

const {Option} = Select
const columns = [
  {
    title: '城市ID',
    dataIndex: 'id'
  },
  {
    title: '城市名称',
    dataIndex: 'name'
  },
  {
    title: '用车模式',
    dataIndex: 'mode'
  },
  {
    title: '营运模式',
    dataIndex: 'op_mode'
  },
  {
    title: '授权加盟商',
    dataIndex: 'franchisee_name'
  },
  {
    title: '城市管理员',
    dataIndex: 'city_admins',
    render: arr => arr.map(item => item.user_name).join(', ')
  },
  {
    title: '城市开通时间',
    dataIndex: 'open_time'
  },
  {
    title: '操作时间',
    dataIndex: 'update_time'
  },
  {
    title: '操作人',
    dataIndex: 'sys_user_name'
  }
]

export default class Staff extends PureComponent {
  params = {
    page: 1
  }

  state = {
    list: [],
    pagination: 0
  }

  // 开通城市
  handleOpenCity = () => {

  }

  handleChange = value => {
    console.log(`selected ${value}`)
  }

  // 默认请求接口数据
  requestList = () => {
    let _this = this
    request.get('/open_city', {
      page: this.params.page
    }).then(res => {
      // console.log(res.data)
      this.setState({
        list: res.data.item_list.map((item, index) => {
          item.key = index
          return item
        }),
        // pagination: Utils.paganation(res, (current) => {
        //   _this.params.page = current
        //   _this.requestList()
        // })
      })
    })
  }

  render() {
    return (
      <Admin>
        <BasePage className="page-buttons">
          <Card>
            选择城市：
            <Select placeholder="全部" style={{ width: 120, marginRight: 20 }} onChange={this.handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            用车模式：
            <Select placeholder="全部" style={{ width: 120, marginRight: 20 }} onChange={this.handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            营运模式：
            <Select placeholder="全部" style={{ width: 120, marginRight: 20 }} onChange={this.handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            加盟商授权状态：
            <Select placeholder="全部" style={{ width: 120, marginRight: 20 }} onChange={this.handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Button type="primary">查询</Button>
            <Button>重置</Button>
          </Card>
          <div className="common-table-wrapper">
            <Table
              bordered
              columns={columns}
              dataSource={this.state.list}
            />
          </div>
        </BasePage>
      </Admin>
    )
  }

  componentDidMount() {
    this.requestList()
  }
}
