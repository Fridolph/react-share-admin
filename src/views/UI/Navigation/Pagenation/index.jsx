import React, {PureComponent} from 'react'
import Admin from '../../../../layouts/Admin'
import BasePage from '../../../../layouts/BasePage'
import './style.less'
import {Pagination, Card} from 'antd'

export default class UIPagenation extends PureComponent {
  render() {
    return (
      <Admin>
        <BasePage className="page-buttons">
          <Card title="基本">
            <Pagination defaultCurrent={1} total={100} />
            <p style={{marginTop: 30}}>改变每页显示条目数</p>
            <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
            <p style={{marginTop: 30}}>快速跳转到某一页上</p>
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
            <p style={{marginTop: 30}}>修改上一步和下一步为文字链接</p>
            <Pagination total={500} itemRender={itemRender} />
          </Card>
          <Card title="简洁">
            <Pagination simple defaultCurrent={2} total={50} />
          </Card>
          <Card title="迷你">
            <div>
              <Pagination size="small" total={50} />
              <Pagination size="small" total={50} showSizeChanger showQuickJumper />
              <Pagination size="small" total={50} showTotal={showTotal} />
            </div>
          </Card>
        </BasePage>
      </Admin>
    )
  }
}

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>;
  } if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}

function showTotal(total) {
  return `Total ${total} items`;
}
