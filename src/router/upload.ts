import { RouteConfig } from 'vue-router'

const upload: RouteConfig = {
    path: '/upload',
    redirect: '/upload/blob',
    component: { render: (_h) => { return _h('router-view') } },
    children: [
        {
            path: 'blob',
            component: () => import('@view/uploadpage/blob/index.vue'),
            meta: {
                title: 'Blob',
                icon: 'el-icon-cpu'
            }
        }
    ],
    meta: {
        title: '分块上传',
        icon: 'el-icon-upload'
    }
}

export default upload
