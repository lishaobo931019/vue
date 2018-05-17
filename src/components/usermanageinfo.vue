<template>
	<div id="usermanagezhezhao">
		<div id="usermanagelist">
			<h5>
				<span id="cancel" @click="cancel">关闭</span>
			</h5>
		<table cellSpacing="1" cellPadding="5" width="680" align="center" bgColor="#eeeeee" style="border:1px solid #8ba7e3"
	           border="0">
	        <tr>
	            <td  align="center" colSpan="4">
	                <font face="宋体" size="2"><strong>用户信息</strong></font>
	            </td>
	        </tr>
	        <tr>
	            <td align="center" bgColor="#f5fafe">工号:</td>
	            <td bgColor="#ffffff">
	                <p id="staffId">{{staffId}}</p>
	            </td>
	            <td width="18%" align="center" bgColor="#f5fafe">姓名:</td>
	            <td bgColor="#ffffff">
	                <p id="name">{{name}}</p>
	            </td>
	        </tr>
	        <tr>
	            <td align="center" bgColor="#f5fafe" >手机号:</td>
	            <td bgColor="#ffffff">
	                <p id="mobile">{{mobile}}</p>
	            </td>
	            <td align="center" bgColor="#f5fafe" >邮箱:</td>
	            <td bgColor="#ffffff">
	                <p id="email">{{email}}</p>
	            </td>
	        </tr>
	        <tr>
	            <td align="center" bgColor="#f5fafe">备注：</td>
	            <td bgColor="#ffffff" colSpan="3">
	                <div style="height: 100px" id="comment">
	                	{{comment}}
	                </div>
	            </td>
	        </tr>
	    </table>

		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				name:"usermanageinfo",
				staffId:null,
				name:null,
				mobile:null,
				email:null,
				comment:null,
			}
		},
		props: ['childMsg'],//子组件接收父组件传来的参
		created(){
			var that = this;
			var id = this.childMsg;
			this.$http.UserDetail(id).then(function(data){
				console.log(data)
				that.staffId  =  data.data.data.staffId;
				that.name     =  data.data.data.name;
				that.mobile   =  data.data.data.mobile;
				that.email    =  data.data.data.email;
				that.comment  =  data.data.data.staffId;
			})
		},
		methods:{
			cancel(){//关闭按钮
		      	this.$emit('usermanagelist',false)//子组件传给父组件的参数
		      }
		}
	}
</script>

<style>
	#usermanagezhezhao{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0);
		position: fixed;
		top: 0;
	}
	#usermanagelist{
		width: 50%;
		position: absolute;
		top: 120px;
		border: 1px solid #333333;
		background: #E9EEF3;
		height: 300px;
		padding: 10px;
		overflow: auto;
	}
	#usermanagelist h5{
		position: relative;
		width: 680px;
		height: 10px;
		text-align: center;
		line-height: 5px;
		/*border-bottom: 1px solid #000000;*/
	}
	#usermanagelist #cancel{
		position: absolute;
		top: 0;
		right: 10px;
		color: red;
		cursor: pointer;
		font-size: 18px;
	}
</style>