/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: 'charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'hydrogeological',
      component: () => import('@/views/hydrogeological/Hydrogeological'),
      name: 'hydrogeological',
      meta: { title: 'hydrogeological', noCache: true }
    },
    {
      path: 'creditInfo',
      component: () => import('@/views/creditInfo/CreditInfo'),
      name: 'creditInfo',
      meta: { title: 'creditInfo', noCache: true }
    },
    {
      path: 'parking',
      component: () => import('@/views/parking/Parking.vue'),
      name: 'parking',
      meta: { title: 'parking', noCache: true }
    },
    {
      path: 'economy',
      component: () => import('@/views/economy/Economy.vue'),
      name: 'economy',
      meta: { title: 'economy', noCache: true }
    },
    {
      path: 'tourismService',
      component: () => import('@/views/tourismService/TourismService.vue'),
      name: 'tourismService',
      meta: { title: 'tourismService', noCache: true }
    },
    {
      path: 'business',
      component: () => import('@/views/business/Business.vue'),
      name: 'business',
      meta: { title: 'business', noCache: true }
    },
    {
      path: 'windPower',
      component: () => import('@/views/windPower/WindPower.vue'),
      name: 'windPower',
      meta: { title: 'windPower', noCache: true }
    }
  ]
}

export default chartsRouter
