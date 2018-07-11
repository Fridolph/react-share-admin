import React, {Component} from 'react'
import {Layout} from 'antd'
import './style.less'
import Axios from '../../../utils/request'

const { Header } = Layout

export default class AdminHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dayPictureUrl: '',
      weather: ''
    }
  }

  getWeatherAPIData = () => {
    let city = '成都'
    Axios.jsonp({
      url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=YGtqUyHOKe5xtaDzi2pmMZVEMdDNlG8F`
    }).then(res => {
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0]
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        })
      }
    })
  }

  componentDidMount() {
    this.getWeatherAPIData()
  }

  render() {
    return (
      <Header className="admin-header">
        <div className="header-info">
          <span className="welcome">欢迎, {this.props.username}</span>
          <a className="login-state" href="/">退出</a>
        </div>
        <div className="header-detail">
          <b className="title">首页</b>
          <div className="text">
            <span className="date">{this.props.systemTime}</span>
            <img src={this.state.dayPictureUrl} alt="天气" />
            <span className="weather">{this.state.weather}</span>
          </div>
        </div>
      </Header>
    )
  }
}
