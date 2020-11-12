import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Step1 from '../views/Step1.vue'
import Step2 from '../views/Step2.vue'
import Step3 from '../views/Step3.vue'
import Step4 from '../views/Step4.vue'
import Step5 from '../views/Step5.vue'
import Step6 from '../views/Step6.vue'
import Step7 from '../views/Step7.vue'
import Step8 from '../views/Step8.vue'
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
  {
    path:'/step5',
    name:'Step5',
    component: Step5
  },
  {
    path:'/step6',
    name:'Step6',
    component: Step6
  },
  {
    path:'/step7',
    name:'Step7',
    component: Step7
  },
  {
    path:'/step8',
    name:'Step8',
    component: Step8
  },


  
]

const router = new VueRouter({
  routes
})

export default router
