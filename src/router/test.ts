import { RouteConfig } from 'vue-router'

const test:RouteConfig = {
  path: '/test',
  children: [
    {
      path: 'blob',
      component: { render: (_h) => { return _h('<div>123</div>') } },
      meta: {
        title: '',
        icon: ''
      }
    }
  ],
  meta: {
    title: '测试模块',
    icon: 'el-icon-s-flag'
  }
}

export default test
