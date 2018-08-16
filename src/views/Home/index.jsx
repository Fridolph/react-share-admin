import React, {PureComponent} from 'react'
import Admin from '../../layouts/Admin'
import BasePage from '../../layouts/BasePage'
import './style.less'

export default class Home extends PureComponent {
  componentDidMount() {
    // console.log('match', this.props.match)
  }

  render() {
    return (
      <Admin>
        <BasePage className="page-home">
          <h1>欢迎访问IMOOC后台管理系统</h1>
        </BasePage>
      </Admin>
    )
  }
}
