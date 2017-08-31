import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import People from '@/components/People'
import Contact from '@/components/Contact'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/people',
      name: 'Peope',
      component: People
    },
    {
      path: '/sobre',
      name: 'About',
      component: About
    },
    {
      path: '/contato',
      name: 'Contact',
      component: Contact
    }
  ]
})
