import React, {PureComponent} from 'react'
import {Layout} from 'antd'
import './style.less'
import request from '../../../utils/request'
import {withRouter} from 'react-router-dom'

const { Header } = Layout
const Title = withRouter(props => {
  return <b className="title">{props.match.path}</b>
})

export default class AdminHeader extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      weather: '',
      temperature: '',
      dayPictureUrl: ''
    }
  }

  getWeatherAPIData = () => {
    let city = '成都'
    request.jsonp({
      url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=YGtqUyHOKe5xtaDzi2pmMZVEMdDNlG8F`
    }).then(res => {
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0]
        this.setState({
          weather: data.weather,
          temperature: data.temperature,
          dayPictureUrl: data.dayPictureUrl
        })
      }
    })
  }

  render() {
    return (
      <Header className="admin-header">
        <div className="header-info">
          <span className="welcome">欢迎, {this.props.username}</span>
          <a className="login-state" href="/">退出</a>
        </div>
        <div className="header-detail">
          {/* <b className="title">首页</b> */}
          <Title />
          <div className="text">
            <span className="date">{this.props.systemTime}</span>
            <img src={this.state.dayPictureUrl} alt="天气" />
            <span className="weather">{this.state.weather}, </span>
            <span className="temperature">{this.state.temperature}</span>
          </div>
        </div>
      </Header>
    )
  }

  componentDidMount() {
    this.getWeatherAPIData()
  }
}
