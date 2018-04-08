<template>
	<div id="">
		
		<div id="logo">
			航凯电力
		</div>
		
		
		<el-dropdown trigger="click" class="mylogin">
		  <span class="el-dropdown-link">
		    	用户
		    <i class="el-icon-caret-bottom el-icon--right"></i>
		  </span>
		  <el-dropdown-menu slot="dropdown">
		    <el-dropdown-item class="clearfix">
			退出
		    </el-dropdown-item>
		  </el-dropdown-menu>
		</el-dropdown>
		
		
		
		
		
		
		<el-input v-model="input" v-if="chuxian==true?true:false" placeholder="请输入内容" class="sousuo"></el-input>
		<el-button type="primary" icon="el-icon-search" class="search" @click="sousuo()" >搜索</el-button>
		
		<el-badge is-dot class="item">
		  <el-button class="share-button" icon="el-icon-message" type="primary"></el-button>
		</el-badge>
	
		  	
	</div>
</template>

<script>
	export default{
		name:'Header',
		data(){
			return{
				input:"",
				chuxian:false
			}
		},
		methods:{
			sousuo:function(){
				this.chuxian = true;
//				if(this.chuxian){
//					this.chuxian =false
//				}
			}
		}
	}
</script>

<style>
	#logo{
		display: inline-block;float:left
	}
	.item{
		float: right;
		margin-right: 22px;
	}
	.search{
		float: right;
		margin-right: 20px;
		margin-top:10px
	}
	.item .el-badge__content{
		top:10px
	}
	.mylogin{
		float: right;
	}
	
	.el-dropdown-menu{
		z-index: 9999;
		position: absolute;
		top:42px
	}
	.sousuo{
		display: block;
		width: 250px;
		position: absolute;
		top:55px;
		right: 60px;
	}
	/*.search{
		float: right;
		
	}
	.el-icon-message{
		float: right;
		display: inline-block;
		font-size:25px;
		margin-top:18px;
		
	}
	.topbar-num {
	    font-size: 12px;
	    color: #fff;
	    background: #f90;
	    border-radius: 5px;
	    padding: 2px 5px;
	    display: inline-block;
	    line-height: 16px;
	    vertical-align: top;
	    text-align: center;
	    margin-top:19px;
	    float: right;
	    margin-right: 25px;
	}
	.username{
		float: right;
	}
	.caret {
	    display: inline-block;
	    width: 0;
	    height: 0;
	    margin-left: 2px;
	    vertical-align: middle;
	    border-top: 4px dashed;
	    border-top: 4px solid \9;
	    border-right: 4px solid transparent;
	    border-left: 4px solid transparent;
    }*/
</style>