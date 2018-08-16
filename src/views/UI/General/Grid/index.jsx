import React, {PureComponent} from 'react'
import Admin from '../../../../layouts/Admin'
import BasePage from '../../../../layouts/BasePage'
import './style.less'
import {Row, Col, Card} from 'antd'

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>

export default class UIGrid extends PureComponent {
  render() {
    return (
      <Admin>
        <BasePage className="page-grid">
          <Card title="基础栅格">
            <p>从堆叠到水平排列。使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。</p>
            <Row>
              <Col span={12}>col-12</Col>
              <Col span={12}>col-12</Col>
            </Row>
            <Row>
              <Col span={8}>col-8</Col>
              <Col span={8}>col-8</Col>
              <Col span={8}>col-8</Col>
            </Row>
            <Row>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
            </Row>
          </Card>

          <Card title="区块间隔">
            <p>
              栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性，我们推荐使用 (16+8n)px 作为栅格间隔。(n 是自然数)如果要支持响应式，可以写成  xs: 8, sm: 16, md: 24, lg: 32 。
            </p>
            <div className="gutter-example">
              <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box">col-6</div>
                </Col>
              </Row>
            </div>
          </Card>

          <Card title="左右偏移">
            <p>使用 offset 可以将列向右侧偏。例如，offset=4 将元素向右侧偏移了 4 个列（column）的宽度。</p>
            <div>
              <Row>
                <Col span={8}>col-8</Col>
                <Col span={8} offset={8}>col-8</Col>
              </Row>
              <Row>
                <Col span={6} offset={6}>col-6 col-offset-6</Col>
                <Col span={6} offset={6}>col-6 col-offset-6</Col>
              </Row>
              <Row>
                <Col span={12} offset={6}>col-12 col-offset-6</Col>
              </Row>
            </div>
          </Card>

          <Card title="栅格排序">
            <p>列排序。通过使用push和pull类就可以很容易的改变(column)的顺序</p>
            <Row>
              <Col span={18} push={6}>col-18 col-push-6</Col>
              <Col span={6} pull={18}>col-6 col-pull-18</Col>
            </Row>
          </Card>

          <Card title="flex布局">
            <p>使用 row-flex 定义 flex 布局，其子元素根据不同的值 start,center,end,space-between,space-around，分别定义其在父节点里面的排版方式</p>
            <div>
              <span>sub-element align left</span>
              <Row type="flex" justify="start">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
              </Row>

              <span>sub-element align center</span>
              <Row type="flex" justify="center">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
              </Row>

              <span>sub-element align right</span>
              <Row type="flex" justify="end">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
              </Row>

              <span>sub-element monospaced arrangement</span>
              <Row type="flex" justify="space-between">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
              </Row>

              <span>sub-element align full</span>
              <Row type="flex" justify="space-around">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
              </Row>
            </div>
          </Card>

          <Card title="flex对齐">
            <div>
              <p>Align Top</p>
              <Row type="flex" justify="center" align="top">
                <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
              </Row>

              <p>Align Center</p>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
              </Row>

              <p>Align Bottom</p>
              <Row type="flex" justify="space-between" align="bottom">
                <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
              </Row>
            </div>
          </Card>

          <Card title="flex排序">
            <p>通过 Flex 布局的 Order 来改变元素的排序。</p>
            <Row type="flex">
              <Col span={6} order={4}>1 col-order-4</Col>
              <Col span={6} order={3}>2 col-order-3</Col>
              <Col span={6} order={2}>3 col-order-2</Col>
              <Col span={6} order={1}>4 col-order-1</Col>
            </Row>
          </Card>

          <Card title="响应式布局">
            <p>参照 Bootstrap 的 响应式设计，预设六个响应尺寸：xs sm md lg xl xxl。</p>
            <Row>
              <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
              <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
              <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
            </Row>
          </Card>
        </BasePage>
      </Admin>
    )
  }
}
