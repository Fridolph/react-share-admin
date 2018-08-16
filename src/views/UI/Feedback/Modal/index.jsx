import React, {PureComponent} from 'react'
import BasePage from '../../../../layouts/BasePage'
import {Card, Modal, Button} from 'antd'
import './style.less'

export default class PageModals extends PureComponent {
  state = {
    confirmLoading: false,
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    showModal5: false
  }

  handleOpen = type => {
    this.setState({
      [type]: true
    })
  }

  showConfirm = () => {
    Modal.confirm({
      title: '标题',
      content: '确定打开文件?',
      onOk() {
      },
      onCancel() {
      }
    })
  }

  showInfoModal = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
      onCancel() {}
    })
  }

  showSuccessModal = () => {
    Modal.success({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
      onCancel() {}
    })
  }

  showWarningModal = () => {
    Modal.warning({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
      onCancel() {}
    })
  }

  showErrorModal = () => {
    Modal.error({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
      onCancel() {}
    })
  }

  handleModal5Ok = () => {
    this.setState({
      confirmLoading: true
    })
    setTimeout(() => {
      this.setState({
        showModal5: false,
        confirmLoading: false
      })
    }, 2000)
  }

  handleCancel = e => {
    console.log(e.target)
  }

  render() {
    const { confirmLoading, showModal1, showModal2, showModal3, showModal4, showModal5 } = this.state

    return (
      <BasePage className="page-modals">
        <Card title="基础模态框">
          <Button onClick={() => this.handleOpen('showModal1')}>Open</Button>
          <Button onClick={this.showConfirm}>自定义</Button>
          <Button onClick={() => this.handleOpen('showModal3')}>顶部40px</Button>
          <Button onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
          <Button onClick={() => this.handleOpen('showModal5')}>提交Loading</Button>
        </Card>

        <Modal
          title="默认弹框"
          visible={showModal1}
          okText="好的"
          cancelText="算了"
          onCancel={() => this.setState({showModal1: false})}>
          <p>这是默认弹框</p>
        </Modal>

        <Modal
          title="自定义弹框"
          visible={showModal2}
          okText="ok"
          cancelText="cancel"
          onCancel={() => this.setState({showModal2: false})}>
          <p>这是自定义弹框</p>
        </Modal>

        <Modal
          title="顶部40px"
          wrapClassName="vertical-top-modal"
          visible={showModal3}
          okText="好的"
          cancelText="算了"
          onCancel={() => this.setState({showModal3: false})}>
          <p>这是距顶部40px的弹框</p>
        </Modal>

        <Modal
          title="水平垂直居中"
          wrapClassName="vertical-center-modal"
          visible={showModal4}
          okText="好的"
          cancelText="算了"
          onCancel={() => this.setState({showModal4: false})}>
          <p>这是水平垂直居中弹框</p>
        </Modal>

        <Modal
          title="Loading弹框"
          visible={showModal5}
          okText="好的"
          cancelText="算了"
          confirmLoading={confirmLoading}
          onOk={this.handleModal5Ok}
          onCancel={() => this.setState({showModal5: false})}>
          <p>这是Loading弹框</p>
        </Modal>

        <Card title="信息框">
          <Button onClick={this.showInfoModal}>Info</Button>
          <Button onClick={this.showSuccessModal}>Success</Button>
          <Button onClick={this.showWarningModal}>Warning</Button>
          <Button onClick={this.showErrorModal}>Error</Button>
        </Card>
      </BasePage>
    )
  }
}
