<!--管理主页面-->
<template>
	<div id="bigbox">
		<el-container >
			  <!--头部-->
			  <el-header>
			  	<Header></Header>
			  </el-header>
			  
			  <el-container>
					  <el-aside width="200px" style="overflow: hidden;">
					  	<!--左侧包裹嵌套组件-->
					  	<Leftaside></Leftaside>
					  </el-aside>
				  
					  <el-main>
					  		<router-view></router-view>
					  </el-main>
			  </el-container>
		</el-container>
	</div>
</template>

<script>
	import header from '@/components/Header'//头部组件
	import leftaside from '@/components/Leftaside'//左侧导航组件
	export default{
		name:'home',
		
		components:{
			Header:header,
			Leftaside:leftaside
		}
	}
	
</script>

<style>
	#bigbox .el-header, .el-footer {
    background-color: #01a8a1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  #bigbox .el-aside {
    background-color: #091b29;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  #bigbox .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }
  
  /*设置全屏*/
  #bigbox .el-container{
  	height: 100vh;
  }
  body{
  	margin:0;
  	padding: 0;
  }
  /*--------------------------------*/
  /*---------------------------------*/
	
</style>