import Vue from 'vue'
import Router from 'vue-router'//路由
import HelloWorld from '@/components/HelloWorld'//登录页
import home from '@/components/Home'//主页

import marketInformation from '@/components/marketInformation'//市场信息
import marketTracking from '@/components/marketTracking'//市场跟踪
import relationship from '@/components/relationship'//关系搜索
import trackinginformation from '@/components/TrackingInformation'//市场跟踪信息
import addpersoninfomation from '@/components/addPersonInfomation'//添加联系人信息


import contractinfo from '@/components/contractinfo'//添加合同信息
import contractlist from '@/components/contractlist'//添加合同列表
import addcontract from '@/components/addcontract'//添加合同


import BiddingInfo from '@/components/BiddingInfo'//添加招投标信息
import Biddinglist from '@/components/Biddinglist'//添加招投标列表
import addBidding from '@/components/addBidding'//添加招投标


import usermanagement from '@/components/usermanagement'//用户管理
import adduser from '@/components/adduser'//添加用户


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
      		path:'marketInformation',//市场信息
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
      	},
      	{
      		path:'contractinfo',//合同信息
      		name:'contractinfo',
      		component:contractinfo
      	},
      	{
      		path:'contractlist',//合同列表
      		name:'contractlist',
      		component:contractlist
      	},
      	{
      		path:'addcontract',//添加合同
      		name:'addcontract',
      		component:addcontract
      	},
      	{
      		path:'BiddingInfo',//招投标信息
      		name:'BiddingInfo',
      		component:BiddingInfo
      	},
      	{
      		path:'Biddinglist',//招投标列表
      		name:'Biddinglist',
      		component:Biddinglist
      	},
      	{
      		path:'addBidding',//添加招投标
      		name:'addBidding',
      		component:addBidding
      	},
      	{
      		path:'usermanagement',//用户管理
      		name:'usermanagement',
      		component:usermanagement
      	},
      	{
      		path:'adduser',//添加用户
      		name:'adduser',
      		component:addcontract
      	}
      ]
    }
  ]
})
