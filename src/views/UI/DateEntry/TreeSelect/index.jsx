import React, {PureComponent} from 'react'
import Admin from '../../../../layouts/Admin'
import BasePage from '../../../../layouts/BasePage'
import './style.less'

export default class UITreeSelect extends PureComponent {
  render() {
    return (
      <Admin>
        <BasePage className="page-buttons">
          UITreeSelect
        </BasePage>
      </Admin>
    )
  }
}
