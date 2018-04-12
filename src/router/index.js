import Vue from 'vue'
import Router from 'vue-router'//路由
import HelloWorld from '@/components/HelloWorld'//登录页
import home from '@/components/Home'//主页
import marketInformation from '@/components/marketInformation'//市场信息
import marketTracking from '@/components/marketTracking'//市场跟踪
import relationship from '@/components/relationship'//关系搜索
import trackinginformation from '@/components/TrackingInformation'//市场跟踪信息
import addpersoninfomation from '@/components/addPersonInfomation'//添加联系人信息


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
      	},
      	{
      		path:'relationship',//市场跟踪
      		name:'relationship',
      		component:relationship
      	},
      	{
      		path:'trackinginformation',//市场跟踪信息
      		name:'trackinginformation',
      		component:trackinginformation
      	},
      	{
      		path:'addpersoninfomation',//添加联系人信息
      		name:'addpersoninfomation',
      		component:addpersoninfomation
      	}
      ]
    }
  ]
})
