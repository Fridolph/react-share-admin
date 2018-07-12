import React, {Component} from 'react'
import BasePage from '../../../layouts/BasePage'
import {Steps, Card, Icon, Popover, Button, message} from 'antd'

const {Step} = Steps
const customDot = (dot, { status, index }) => (
  <Popover content={<span>step {index} status: {status}</span>}>
    {dot}
  </Popover>
)
const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}]

export default class PageSteps extends Component {
  state = {
    current: 0
  }

  previous = () => {
    const current = this.state.current - 1
    this.setState({current})
  }

  next = () => {
    const current = this.state.current + 1
    this.setState({current})
  }

  render() {
    const {current} = this.state

    return (
      <BasePage className="page-steps">
        <Card title="基础step">
          <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
          <br />
          <Steps size="small" current={1} >
            <Step title="Finished" />
            <Step title="In Progress" />
            <Step title="Waiting" />
          </Steps>
          <br />
          <Steps>
            <Step status="finish" title="Login" icon={<Icon type="user" />} />
            <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
            <Step status="process" title="Pay" icon={<Icon type="loading" />} />
            <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
          </Steps>
          <br />
          <Steps current={1} status="error">
            <Step title="Finished" description="This is a description" />
            <Step title="In Process" description="This is a description" />
            <Step title="Waiting" description="This is a description" />
          </Steps>
        </Card>

        <Card title="点状条">
          <Steps progressDot current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
          <br />
          <Steps current={1} progressDot={customDot}>
            <Step title="Finished" description="You can hover on the dot." />
            <Step title="In Progress" description="You can hover on the dot." />
            <Step title="Waiting" description="You can hover on the dot." />
            <Step title="Waiting" description="You can hover on the dot." />
          </Steps>
        </Card>

        <Card title="步骤切换">
          <Steps current={current}>
            {steps.map(item => <Step key={item.title} title={item.title} />)}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-actoin">
            {current > 0 && (<Button style={{marginLeft: 8}} onClick={() => this.previous()}>Previous</Button>)}
            {current < steps.length - 1 && <Button onClick={() => this.next()}>Next</Button>}
            {current === steps.length - 1 && <Button type="primary" onClick={() => message.success('processing complete!')}>Done!</Button>}
          </div>
        </Card>

        <Card title="竖方向steps">
          <Steps direction="vertical" current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
          <br/>
          <Steps direction="vertical" size="small" current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </Card>
      </BasePage>
    )
  }
}
