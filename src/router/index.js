import Vue from 'vue'
import VueRouter from 'vue-router'

// Main Contents
import Home from '../views/Home.vue'
import Company from '../views/Company.vue'
import Solution from '../views/Solution.vue'
import Recruit from '../views/Recruit.vue'
import QnA from '../views/QnA.vue'
import Message from '../views/Message.vue'
import Privercy from '../views/Privercy.vue'
import Notice from '../views/Notice.vue'

// Sub Contents
import Info from '@/components/company/Info.vue'
import Contact from '@/components/company/Contact.vue'
import Performance from '@/components/company/Performance.vue'
import Soshikizu from '@/components/company/Soshikizu.vue'
import NoticeDetail from '@/components/NoticeDetail.vue'

// 個人情報
import PrivercyHanding from '@/components/privercy/PrivercyHanding.vue';
import PrivercyPolicy from '@/components/privercy/PrivercyPolicy.vue';
import PrivercyDisclosure from '@/components/privercy/PrivercyDisclosure.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/company',
    name: 'Company',
    component: Company,
    children: [
      {
        path: 'info',
        component: Info
      },
      {
        path: 'contact',
        component: Contact
      },
      {
        path: 'performance',
        component: Performance
      },
      {
        path: 'soshikizu',
        component: Soshikizu
      },
      {
        path: 'privercy',
        component: Privercy
      }
    ]
  },
  {
    path: '/solution',
    name: 'Solution',
    component: Solution
  },
  {
    path: '/recruit',
    name: 'Recruit',
    component: Recruit
  },
  {
    path: '/qna',
    name: 'QnA',
    component: QnA
  },
  {
    path: '/privercy',
    name: 'Privercy',
    component: Privercy,
    children: [
      {
        path: 'privercy_policy',
        component: PrivercyPolicy
      },
      {
        path: 'privercy_handing',
        component: PrivercyHanding
      },
      {
        path: 'privercy_disclosure',
        component: PrivercyDisclosure
      }
    ]
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice,
    children: [
      {
        path: '/notice/:id',
        component: NoticeDetail,
      }
    ],
    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() { 
    return { x: 0, y: 0 } 
  },
  base: process.env.BASE_URL,
  routes
})

export default router
