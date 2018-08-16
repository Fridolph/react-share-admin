import React, { PureComponent } from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './views/Login'
import Home from './views/Home'
import UIButton from './views/UI/General/Button'
import UIGrid from './views/UI/General/Grid'
import UIAffix from './views/UI/Navigation/Affix'
import UIBreadcrump from './views/UI/Navigation/Breadcrump'
import UIDropdown from './views/UI/Navigation/Dropdown'
import UIMenu from './views/UI/Navigation/Menu'
import UIPagenation from './views/UI/Navigation/Pagenation'
import UISteps from './views/UI/Navigation/Steps'
import UIAutoComplete from './views/UI/Form/AutoComplete'
import UICheckbox from './views/UI/Form/Checkbox'
import UIForm from './views/UI/Form/Form'
import UIInput from './views/UI/Form/Input'
import UIRadio from './views/UI/Form/Radio'
import UISelect from './views/UI/Form/Select'
import UISwitch from './views/UI/Form/Switch'
import UIUpload from './views/UI/Form/Upload'
import UISlider from './views/UI/Form/Slider'
import UICascader from './views/UI/DateEntry/Cascader'
import UIDatePicker from './views/UI/DateEntry/DatePicker'
import UIMention from './views/UI/DateEntry/Mention'
import UIRate from './views/UI/DateEntry/Rate'
import UITreeSelect from './views/UI/DateEntry/TreeSelect'
import UITimePicker from './views/UI/DateEntry/TimePicker'
import UITransfer from './views/UI/DateEntry/Transfer'
import UICard from './views/UI/DataWrapper/Card'
import UICarousel from './views/UI/DataWrapper/Carousel'
import UICollapse from './views/UI/DataWrapper/Collapse'
import UIList from './views/UI/DataWrapper/List'
import UITable from './views/UI/DataWrapper/Table'
import UITabs from './views/UI/DataWrapper/Tabs'
import UIAvatar from './views/UI/DataDisplay/Avatar'
import UIBadge from './views/UI/DataDisplay/Badge'
import UICalendar from './views/UI/DataDisplay/Calendar'
import UIPopOver from './views/UI/DataDisplay/PopOver'
import UITooltip from './views/UI/DataDisplay/Tooltip'
import UITag from './views/UI/DataDisplay/Tag'
import UITimeline from './views/UI/DataDisplay/Timeline'
import UITree from './views/UI/DataDisplay/Tree'
import UIAlert from './views/UI/Feedback/Alert'
import UIDrawer from './views/UI/Feedback/Drawer'
import UIModal from './views/UI/Feedback/Modal'
import UIMessage from './views/UI/Feedback/Message'
import UINotification from './views/UI/Feedback/Notification'
import UIProgress from './views/UI/Feedback/Progress'
import UIPopconfirm from './views/UI/Feedback/Popconfirm'
import UIAnchor from './views/UI/Other/Anchor'
import UIBackTop from './views/UI/Other/BackTop'
import UIDivider from './views/UI/Other/Divider'
import UILocaleProvider from './views/UI/Other/LocaleProvider'
import RichText from './views/RichText'
import City from './views/City'
import Order from './views/Order'
import Staff from './views/Staff'
import Cars from './views/Cars'
import Chart from './views/Chart'
import Setting from './views/Setting'
import NotMatch from './views/NotMatch'

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route exact path="/admin/home" component={Home} />
          <Route path="/admin/ui/General/Button" component={UIButton} />
          <Route path="/admin/ui/General/Grid" component={UIGrid} />
          <Route path="/admin/ui/Navigation/Affix" component={UIAffix} />
          <Route path="/admin/ui/Navigation/Breadcrump" component={UIBreadcrump} />
          <Route path="/admin/ui/Navigation/Dropdown" component={UIDropdown} />
          <Route path="/admin/ui/Navigation/Menu" component={UIMenu} />
          <Route path="/admin/ui/Navigation/Pagenation" component={UIPagenation} />
          <Route path="/admin/ui/Navigation/Steps" component={UISteps} />

          <Route path="/admin/ui/Form/AutoComplete" component={UIAutoComplete} />
          <Route path="/admin/ui/Form/Checkbox" component={UICheckbox} />
          <Route path="/admin/ui/Form/Form" component={UIForm} />
          <Route path="/admin/ui/Form/Input" component={UIInput} />
          <Route path="/admin/ui/Form/Radio" component={UIRadio} />
          <Route path="/admin/ui/Form/Select" component={UISelect} />
          <Route path="/admin/ui/Form/Switch" component={UISwitch} />
          <Route path="/admin/ui/Form/Upload" component={UIUpload} />
          <Route path="/admin/ui/Form/Slider" component={UISlider} />

          <Route path="/admin/ui/DateEntry/Cascader" component={UICascader} />
          <Route path="/admin/ui/DateEntry/DatePicker" component={UIDatePicker} />
          <Route path="/admin/ui/DateEntry/Mention" component={UIMention} />
          <Route path="/admin/ui/DateEntry/Rate" component={UIRate} />
          <Route path="/admin/ui/DateEntry/TreeSelect" component={UITreeSelect} />
          <Route path="/admin/ui/DateEntry/TimePicker" component={UITimePicker} />
          <Route path="/admin/ui/DateEntry/Transfer" component={UITransfer} />

          <Route path="/admin/ui/DataWrapper/Card" component={UICard} />
          <Route path="/admin/ui/DataWrapper/Carousel" component={UICarousel} />
          <Route path="/admin/ui/DataWrapper/Collapse" component={UICollapse} />
          <Route path="/admin/ui/DataWrapper/List" component={UIList} />
          <Route path="/admin/ui/DataWrapper/Table" component={UITable} />
          <Route path="/admin/ui/DataWrapper/Tabs" component={UITabs} />

          <Route path="/admin/ui/DataDisplay/Avatar" component={UIAvatar} />
          <Route path="/admin/ui/DataDisplay/Badge" component={UIBadge} />
          <Route path="/admin/ui/DataDisplay/Calendar" component={UICalendar} />
          <Route path="/admin/ui/DataDisplay/PopOver" component={UIPopOver} />
          <Route path="/admin/ui/DataDisplay/Tooltip" component={UITooltip} />
          <Route path="/admin/ui/DataDisplay/Tag" component={UITag} />
          <Route path="/admin/ui/DataDisplay/Timeline" component={UITimeline} />
          <Route path="/admin/ui/DataDisplay/Tree" component={UITree} />

          <Route path="/admin/ui/Feedback/Alert" component={UIAlert} />
          <Route path="/admin/ui/Feedback/Drawer" component={UIDrawer} />
          <Route path="/admin/ui/Feedback/Modal" component={UIModal} />
          <Route path="/admin/ui/Feedback/Message" component={UIMessage} />
          <Route path="/admin/ui/Feedback/Notification" component={UINotification} />
          <Route path="/admin/ui/Feedback/Progress" component={UIProgress} />
          <Route path="/admin/ui/Feedback/Popconfirm" component={UIPopconfirm} />

          <Route path="/admin/ui/Other/Anchor" component={UIAnchor} />
          <Route path="/admin/ui/Other/BackTop" component={UIBackTop} />
          <Route path="/admin/ui/Other/Divider" component={UIDivider} />
          <Route path="/admin/ui/Other/LocaleProvider" component={UILocaleProvider} />

          <Route path="/admin/richtext" component={RichText} />
          <Route path="/admin/city" component={City} />
          <Route path="/admin/order" component={Order} />
          <Route path="/admin/staff" component={Staff} />
          <Route path="/admin/carsmap" component={Cars} />
          <Route path="/admin/chart" component={Chart} />
          <Route path="/admin/setting" component={Setting} />

          <Route path="*" component={NotMatch} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
