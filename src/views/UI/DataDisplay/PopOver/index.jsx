import React, {PureComponent} from 'react'
import Admin from '../../../../layouts/Admin'
import BasePage from '../../../../layouts/BasePage'
import './style.less'

export default class UIPopOver extends PureComponent {
  render() {
    return (
      <Admin>
        <BasePage className="page-buttons">
          UIPopOver
        </BasePage>
      </Admin>
    )
  }
}
