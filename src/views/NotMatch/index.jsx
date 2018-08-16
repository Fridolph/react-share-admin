import React from 'react'
import './style.less'
import {Link} from 'react-router-dom'

export default function NotMatch(props) {
  return (
    <div className="page-404">
      <img src="/assets/404.jpg" alt="404" />
      <h1>没有找到该页</h1>
      <Link to="/">返回首页</Link>
    </div>
  )
}
