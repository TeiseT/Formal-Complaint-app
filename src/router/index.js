import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Step1 from '../views/Step1.vue'
import Step2 from '../views/Step2.vue'
import Step3 from '../views/Step3.vue'
import Step4 from '../views/Step4.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {  
    path: '/step1',
    name: 'Step1',
    component: Step1
  },
  {  
    path: '/step2',
    name: 'Step2',
    component: Step2
  },
  {  
    path: '/step3',
    name: 'Step3',
    component: Step3
  },
  {  
    path: '/step4',
    name: 'Step4',
    component: Step4
  },
  
]

const router = new VueRouter({
  routes
})

export default router
