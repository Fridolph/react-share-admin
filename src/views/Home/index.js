import React, {Component} from 'react'
import BasePage from '../../layouts/BasePage'
import './style.less'

export default class Home extends Component {
  componentDidMount() {
    console.log('match', this.props.match)
  }

  render() {
    return (
      <BasePage className="page-home">
        <h1>欢迎访问IMOOC后台管理系统</h1>
      </BasePage>
    )
  }
}
