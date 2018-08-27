const menuConfig = [
  {
    key: '0',
    title: '首页',
    icon: 'home',
    location: '/admin/home'
  },
  // {
  //   key: '1',
  //   title: 'Module',
  //   icon: 'layout',
  //   location: '/admin/module'
  // },
  {
    key: '2',
    title: 'Antd UI',
    icon: 'folder',
    children: [
      {
        key: '2-1',
        title: 'General',
        children: [
          {
            key: '2-1-1',
            title: 'Button',
            location: '/admin/ui/General/Button'
          },
          {
            key: '2-1-2',
            title: 'Grid',
            location: '/admin/ui/General/Grid'
          }
        ]
      },
      {
        key: '2-2',
        title: 'Navigation',
        children: [
          {
            key: '2-2-1',
            title: 'Affix',
            location: '/admin/ui/Navigation/Affix'
          },
          {
            key: '2-2-2',
            title: 'Breadcrump',
            location: '/admin/ui/Navigation/Breadcrump'
          },
          {
            key: '2-2-3',
            title: 'Dropdown',
            location: '/admin/ui/Navigation/Dropdown'
          },
          {
            key: '2-2-4',
            title: 'Menu',
            location: '/admin/ui/Navigation/Menu'
          },
          {
            key: '2-2-5',
            title: 'Pagenation',
            location: '/admin/ui/Navigation/Pagenation'
          },
          {
            key: '2-2-6',
            title: 'Steps',
            location: '/admin/ui/Navigation/steps'
          }
        ]
      },
      {
        key: '2-4',
        title: 'Form',
        children:[
          {
            key: '2-4-1',
            title: 'AutoComplete',
            location: '/admin/ui/Form/AutoComplete'
          },
          {
            key: '2-4-2',
            title: 'Checkbox',
            location: '/admin/ui/Form/Checkbox'
          },
          {
            key: '2-4-3',
            title: 'Form',
            location: '/admin/ui/Form/Form'
          },
          {
            key: '2-4-4',
            title: 'Input',
            location: '/admin/ui/Form/Input'
          },
          {
            key: '2-4-5',
            title: 'Radio',
            location: '/admin/ui/Form/Radio'
          },
          {
            key: '2-4-6',
            title: 'Select',
            location: '/admin/ui/Form/Select'
          },
          {
            key: '2-4-7',
            title: 'Switch',
            location: '/admin/ui/Form/Switch'
          },
          {
            key: '2-4-8',
            title: 'Upload',
            location: '/admin/ui/Form/Upload'
          },
          {
            key: '2-4-9',
            title: 'Slider',
            location: '/admin/ui/Form/Slider'
          }
        ]
      },
      {
        key: '2-5',
        title: 'Date Entry',
        children:[
          {
            key: '2-5-1',
            title: 'Cascader',
            location: '/admin/ui/DateEntry/Cascader'
          },
          {
            key: '2-5-2',
            title: 'DatePicker',
            location: '/admin/ui/DateEntry/DatePicker'
          },
          {
            key: '2-5-3',
            title: 'Mention',
            location: '/admin/ui/DateEntry/Mention'
          },
          {
            key: '2-5-4',
            title: 'Rate',
            location: '/admin/ui/DateEntry/Rate'
          },
          {
            key: '2-5-5',
            title: 'TreeSelect',
            location: '/admin/ui/DateEntry/TreeSelect'
          },
          {
            key: '2-5-6',
            title: 'TimePicker',
            location: '/admin/ui/DateEntry/TimePicker'
          },
          {
            key: '2-5-7',
            title: 'Transfer',
            location: '/admin/ui/DateEntry/Transfer'
          }
        ]
      },
      {
        key: '2-6',
        title: 'Data Wrapper',
        children: [
          {
            key: '2-6-1',
            title: 'Card',
            location: '/admin/ui/DataWrapper/Card'
          },
          {
            key: '2-6-2',
            title: 'Carousel',
            location: '/admin/ui/DataWrapper/Carousel'
          },
          {
            key: '2-6-3',
            title: 'Collapse',
            location: '/admin/ui/DataWrapper/Collapse'
          },
          {
            key: '2-6-4',
            title: 'List',
            location: '/admin/ui/DataWrapper/List'
          },
          {
            key: '2-6-5',
            title: 'Table',
            location: '/admin/ui/DataWrapper/Table'
          },
          {
            key: '2-6-6',
            title: 'Tabs',
            location: '/admin/ui/DataWrapper/Tabs'
          },
        ]
      },
      {
        key: '2-7',
        title: 'Data Display',
        children: [
          {
            key: '2-7-1',
            title: 'Avatar',
            location: '/admin/ui/DataDisplay/Avatar'
          },
          {
            key: '2-7-2',
            title: 'Badge',
            location: '/admin/ui/DataDisplay/Badge'
          },
          {
            key: '2-7-3',
            title: 'Calendar',
            location: '/admin/ui/DataDisplay/Calendar'
          },
          {
            key: '2-7-4',
            title: 'PopOver',
            location: '/admin/ui/DataDisplay/PopOver'
          },
          {
            key: '2-7-5',
            title: 'Tooltip',
            location: '/admin/ui/DataDisplay/Tooltip'
          },
          {
            key: '2-7-6',
            title: 'Tag',
            location: '/admin/ui/DataDisplay/Tag'
          },
          {
            key: '2-7-7',
            title: 'Timeline',
            location: '/admin/ui/DataDisplay/Timeline'
          },
          {
            key: '2-7-8',
            title: 'Tree',
            location: '/admin/ui/DataDisplay/Tree'
          }
        ]
      },
      {
        key: '2-8',
        title: 'Feedback',
        children: [
          {
            key: '2-8-1',
            title: 'Alert',
            location: '/admin/ui/Feedback/Alert'
          },
          {
            key: '2-8-2',
            title: 'Drawer',
            location: '/admin/ui/Feedback/Drawer'
          },
          {
            key: '2-8-3',
            title: 'Modal',
            location: '/admin/ui/Feedback/Modal'
          },
          {
            key: '2-8-4',
            title: 'Message',
            location: '/admin/ui/Feedback/Message'
          },
          {
            key: '2-8-5',
            title: 'Notification',
            location: '/admin/ui/Feedback/Notification'
          },
          {
            key: '2-8-6',
            title: 'Progress',
            location: '/admin/ui/Feedback/Progress'
          },
          {
            key: '2-8-7',
            title: 'Popconfirm',
            location: '/admin/ui/Feedback/Popconfirm'
          },
          {
            key: '2-8-8',
            title: 'Spin',
            location: '/admin/ui/Feedback/Spin'
          }
        ]
      },
      {
        key: '2-9',
        title: 'Other',
        children: [
          {
            key: '2-9-1',
            title: 'Anchor',
            location: '/admin/ui/Other/Anchor'
          },
          {
            key: '2-9-2',
            title: 'BackTop',
            location: '/admin/ui/Other/BackTop'
          },
          {
            key: '2-9-3',
            title: 'Divider',
            location: '/admin/ui/Other/Divider'
          },
          {
            key: '2-9-4',
            title: 'LocaleProvider',
            location: '/admin/ui/Other/LocaleProvider'
          }
        ]
      }
    ]
  },
  {
    key: '3',
    title: '登录注册',
    icon: 'form',
    children: [
      {
        key: '3-1',
        title: '登录',
        icon: 'login',
        location: '/admin/form/login'
      },
      {
        key: '3-2',
        title: '注册',
        icon: 'plus-square-o',
        location: '/admin/form/register'
      },
    ]
  },
  {
    key: '4',
    title: '表格',
    icon: 'table',
    children: [
      {
        key: '4-1',
        title: '基础表格',
        icon: 'bars',
        location: '/admin/table/base'
      },
      {
        key: '4-2',
        title: '高级表格',
        icon: 'layout',
        location: '/admin/table/high'
      }
    ]
  },
  {
    key: '5',
    title: '富文本',
    icon: 'edit',
    location: '/admin/richtext'
  },
  {
    key: '6',
    title: '城市管理',
    icon: 'tool',
    location: '/admin/city'
  },
  {
    key: '7',
    title: '订单管理',
    icon: 'solution',
    location: '/admin/order'
  },
  {
    key: '8',
    title: '员工管理',
    icon: 'smile-o',
    location: '/admin/staff'
  },
  {
    key: '9',
    title: '车辆地图',
    icon: 'environment',
    location: '/admin/carsmap'
  },
  {
    key: '10',
    title: '图表',
    icon: 'area-chart',
    location: '/admin/chart'
  },
  {
    key: '11',
    title: '权限设置',
    icon: 'lock',
    location: '/admin/setting'
  }
]

export default menuConfig
