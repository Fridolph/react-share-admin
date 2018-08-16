import React, {PureComponent} from 'react'
import Admin from '../../../../layouts/Admin'
import BasePage from '../../../../layouts/BasePage'
import './style.less'
import { Card, Affix, Button } from 'antd'

export default class UIAffix extends PureComponent {
  state = {
    top: 10,
    bottom: 10,
  }

  render() {
    return (
      <Admin>
        <BasePage className="page-affix">
          <Card title="基本">
            <div>
              <Affix offsetTop={this.state.top}>
                <Button
                  type="primary"
                  onClick={() => {
                    this.setState({
                      top: this.state.top + 10,
                    });
                  }}
                >
                  Affix top
                </Button>
              </Affix>
              <br />
              <Affix offsetBottom={this.state.bottom}>
                <Button
                  type="primary"
                  onClick={() => {
                    this.setState({
                      bottom: this.state.bottom + 10,
                    });
                  }}
                >
                  Affix bottom
                </Button>
              </Affix>
            </div>
          </Card>

          <Card title="固定状态改变的回调">
            <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
              <Button>120px to affix top</Button>
            </Affix>
          </Card>

          <Card title="滚动容器">
            <p>用 target 设置 Affix 需要监听其滚动事件的元素，默认为 window</p>
            <div className="scrollable-container" ref={(node) => { this.container = node; }}>
              <div className="background">
                <Affix target={() => this.container}>
                  <Button type="primary">
                    Fixed at the top of container
                  </Button>
                </Affix>
              </div>
            </div>
          </Card>
        </BasePage>
      </Admin>
    )
  }
}
