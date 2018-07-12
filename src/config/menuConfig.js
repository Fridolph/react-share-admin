export default [
  {
    title: '首页',
    icon: 'home',
    location: '/admin/home'
  },
  {
    title: 'UI',
    icon: 'folder',
    children: [
      {
        title: '按钮',
        icon: 'dashboard',
        location: '/admin/ui/buttons'
      },
      {
        title: '弹框',
        icon: 'profile',
        location: '/admin/ui/modals'
      },
      {
        title: 'Steps',
        icon: 'right-square-o',
        location: '/admin/ui/steps'
      }
    ]
  },
  {
    title: '表单',
    icon: 'form',
    children: [
      {
        title: '登录',
        icon: 'login',
        location: '/admin/form/login'
      },
      {
        title: '注册',
        icon: 'plus-square-o',
        location: '/admin/form/register'
      },
    ]
  },
  {
    title: '表格',
    icon: 'table',
    children: [
      {
        title: '基础表格',
        icon: 'bars',
        location: '/admin/table/base'
      },
      {
        title: '高级表格',
        icon: 'layout',
        location: '/admin/table/high'
      }
    ]
  },
  {
    title: '富文本',
    icon: 'edit',
    location: '/admin/richtext'
  },
  {
    title: '城市管理',
    icon: 'tool',
    location: '/admin/city'
  },
  {
    title: '订单管理',
    icon: 'solution',
    location: '/admin/order'
  },
  {
    title: '员工管理',
    icon: 'smile-o',
    location: '/admin/staff'
  },
  {
    title: '车辆地图',
    icon: 'environment',
    location: '/admin/map'
  },
  {
    title: '图表',
    icon: 'area-chart',
    location: '/admin/chart'
  },
  {
    title: '权限设置',
    icon: 'lock',
    location: '/admin/controll'
  }
]
