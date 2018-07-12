import React, {Component} from 'react'
import './style.less'

export default class BasePage extends Component {
  render() {
    return (
      <div className={'base-page ' + this.props.className}>
        {this.props.children}
      </div>
    )
  }
}
