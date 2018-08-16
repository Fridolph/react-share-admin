import React, {PureComponent} from 'react'
import Admin from '../../../../layouts/Admin'
import BasePage from '../../../../layouts/BasePage'
import './style.less'
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'
import {Card, Breadcrumb, Icon, Alert} from 'antd'

const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
)

const breadcrumbNameMap = {
  '/apps': 'Application List',
  '/apps/1': 'Application1',
  '/apps/2': 'Application2',
  '/apps/1/detail': 'Detail',
  '/apps/2/detail': 'Detail',
}

const Home = withRouter((props) => {
  console.log('withRouter props', props)
  const { location } = props
  const pathSnippets = location.pathname.split('/').filter(i => i)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    )
  })
  const breadcrumbItems = [(
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems)

  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <br />
        <Link to="/apps">Application List</Link>
      </div>
      <Switch>
        <Route path="/apps" component={Apps} />
        <Route render={() => <span>Home Page</span>} />
      </Switch>
      <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
      <Breadcrumb>
        {breadcrumbItems}
      </Breadcrumb>
    </div>
  )
})

export default class UIBreadcrump extends PureComponent {
  render() {
    return (
      <Admin>
        <BasePage className="page-buttons">
          <Card title="基本用法">
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
          </Card>

          <Card title="带有图标的">
            <Breadcrumb>
              <Breadcrumb.Item href="">
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Icon type="user" />
                <span>Application List</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Application
              </Breadcrumb.Item>
            </Breadcrumb>
          </Card>

          <Card title="分隔符">
            <Breadcrumb separator=">">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
              <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
          </Card>

          <Card title="和react-router配合">
            <Router>
              <Home />
            </Router>
          </Card>
        </BasePage>
      </Admin>
    )
  }
}
