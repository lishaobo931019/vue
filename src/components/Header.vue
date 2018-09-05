<template>
	<div id="">
		
		<div id="logo">
			
		</div>
		

	
		  	
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
		display: inline-block;float:left;
		width: 190px;
		height: 50px;
		background: url(../assets/logo.jpg) center;
		background-size: cover;
		background-position: center center;
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