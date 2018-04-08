import Vue from 'vue'
import Router from 'vue-router'//路由
import HelloWorld from '@/components/HelloWorld'//登录页
import home from '@/components/Home'//主页
import marketInformation from '@/components/marketInformation'//市场信息
import marketTracking from '@/components/marketTracking'//市场跟踪


Vue.use(Router)//全局路由

export default new Router({
  routes: [
    {
      path: '/',//登录页
      name: 'HelloWorld',
      component: HelloWorld
    },
    //
    {
      path: '/home',//主页
      name: 'home',
      component: home,
      children:[
      	{
      		path:'marketInformation',//市场信息页面
      		name:'marketInformation',
      		component:marketInformation
      	},
      	{
      		path:'marketTracking',//市场跟踪
      		name:'marketTracking',
      		component:marketTracking
      	}
      ]
    }
  ]
})
