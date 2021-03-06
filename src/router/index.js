import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import GitComponents from '@/components/git-component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: GitComponents
    }
  ]
})
