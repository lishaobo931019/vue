<template>
	<el-col :span="12">
	    <el-menu
	      default-active="2"
	      class="el-menu-vertical-demo"
	      @open="handleOpen"
	      @close="handleClose"
	      background-color="#545c64"
	      text-color="#fff"
	      active-text-color="#ffd04b">
	      
	      
	      <el-submenu index="1">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span class="yijibiaoti">市场管理</span>
	        </template>
	        <el-menu-item-group>
	          <el-menu-item index="1-1" @click="toMarketInfo">市场信息汇总</el-menu-item>
	          <el-menu-item index="1-2" @click="toMarketTarck">市场跟踪</el-menu-item>
	          <el-menu-item index="1-3" @click="toRelationship">关系搜索</el-menu-item>
	          <el-menu-item index="1-4" @click="toTrackInfo">添加市场跟踪信息</el-menu-item>
	          <el-menu-item index="1-5">添加新联系人资源</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      
	      <el-submenu index="2">
	        <template slot="title">
	          <i class="el-icon-menu"></i>
	          <span class="yijibiaoti">合同管理</span>
	        </template>
	        <el-menu-item-group>
	          <el-menu-item index="2-1">合同信息汇总</el-menu-item>
	          <el-menu-item index="2-2">合同信息列表</el-menu-item>
	          <el-menu-item index="2-3">添加合同信息</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      
	      
	       <el-submenu index="3">
	        <template slot="title">
	          <i class="el-icon-document"></i>
	          <span class="yijibiaoti">投招标管理</span>
	        </template>
	        <el-menu-item-group>
	          <el-menu-item index="3-1">投招标信息汇总</el-menu-item>
	          <el-menu-item index="3-2">投招标信息列表</el-menu-item>
	          <el-menu-item index="3-3">新建招投标信息</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      
	      
	       <el-submenu index="4">
	        <template slot="title">
	          <i class="el-icon-setting"></i>
	          <span class="yijibiaoti">系统管理</span>
	        </template>
	        <el-menu-item-group>
	          <el-menu-item index="4-1">用户管理</el-menu-item>
	          <el-menu-item index="4-2">添加用户</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      
	    </el-menu>
	  </el-col>
	</el-row>
</template>

<script>
	export default{
		name:'Leftaside',
		methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      toMarketInfo:function(){//跳转到市场信息
	      	this.$router.push({
	      		path:'/home/marketInformation',
	      		query:{}
	      	})
	      },
	      toMarketTarck:function(){
	      	this.$router.push({
	      		path:'/home/marketTracking',
	      		query:{}
	      	})
	      },
	      toRelationship:function(){
	      	this.$router.push({
	      		path:'/home/relationship',
	      		query:{}
	      	})
	      },
	      toTrackInfo:function(){
	      	this.$router.push({
	      		path:'/home/trackinginformation',
	      		query:{}
	      	})
	      }
	    }
	}
</script>

<style>
	.el-menu-vertical-demo{
		width: 200px;
	}
	.yijibiaoti{
		padding-right: 70px;
	}
</style>