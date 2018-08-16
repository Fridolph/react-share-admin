import React, {PureComponent} from 'react'
import './style.less'

export default class BasePage extends PureComponent {
  render() {
    return (
      <div className={'base-page ' + this.props.className}>
        {this.props.children}
      </div>
    )
  }
}
