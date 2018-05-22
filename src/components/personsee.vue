<template>
	<div id="personseezhezhaoceng">
		<div id="personsee">
			<h5>
				<span id="close" @click="close">关闭</span>
			</h5>
			<table cellSpacing="1" cellPadding="5" width="680" align="center" bgColor="#eeeeee" style="border:1px solid #8ba7e3"
		           border="0">
		        <tr>
		            <td align="center" colSpan="4">
		                <strong>联系人信息</strong>
		            </td>
		        </tr>
		
		        <tr>
		            <td colspan="1" align="center" bgColor="#f5fafe">姓名:</td>
		            <td colspan="1" bgColor="#ffffff">
		                <label id="name">{{name}}</label>
		            </td>
		            <td colspan="1" align="center" bgColor="#f5fafe" >所属单位:</td>
		            <td colspan="1" bgColor="#ffffff">
		                <label id="company">{{company}}</label>
		            </td>
		        </tr>
		        <tr>
		            <td colspan="1" align="center" bgColor="#f5fafe" >职位:</td>
		            <td colspan="1" bgColor="#ffffff">
		                <label id="job">{{job}}</label>
		            </td>
		            <td colspan="1" align="center" bgColor="#f5fafe" >联系电话:</td>
		            <td colspan="1" bgColor="#ffffff">
		                <label id="mobile">{{mobile}}</label>
		            </td>
		        </tr>
		        <tr>
		
		            <td colspan="1" align="center" bgColor="#f5fafe" >邮箱:</td>
		            <td colspan="1" bgColor="#ffffff">
		                <label id="email">{{email}}</label>
		            </td>
		
		            <td colspan="1" align="center" bgColor="#f5fafe" >安全级别:</td>
		            <td colspan="1" bgColor="#ffffff">
		                <label id="securityLevel">{{securityLevel}}</label>
		            </td>
		        </tr>
		        <tr>
		            <td colspan="1" align="center" bgColor="#f5fafe" >职位重要度:</td>
		            <td colspan="1" bgColor="#ffffff">
		                <label id="importanceLevel">{{importanceLevel}}</label>
		            </td>
		
		            <td colspan="1" align="center" bgColor="#f5fafe" >录入人:</td>
		            <td colspan="1" bgColor="#ffffff">
		                <label id="inputUser">{{username}}</label>
		            </td>
		        </tr>
		
		        <tr>
		            <td  align="center" bgColor="#f5fafe">简介:</td>
		            <td  bgColor="#ffffff" colSpan="3">
		                <div style="height: 100px" id="intro">
		                	{{intro}}
		                </div>
		            </td>
		        </tr>
		
		        <tr>
		            <td  align="center" bgColor="#f5fafe">备注:</td>
		            <td  bgColor="#ffffff" colSpan="3">
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
				id:null,
				name:null,
				company:null,
				job:null,
				mobile:null,
				email:null,
				importanceLevel:null,
				securityLevel:null,
				intro:null,
				comment:null,
				username:null
			}
		},
		props: ['childMsg']
		,//子组件接收父组件传来的参
		created(){
			var that = this;
			console.log(this.childMsg)//获取到父组件传来的数据
			var id = this.childMsg;
			this.$http.ContactsdetailUrl(id).then(function(data){
				console.log(data)
				that.name = data.data.name
				that.company = data.data.company
				that.job = data.data.job
				that.mobile = data.data.mobile
				that.email = data.data.email
				that.importanceLevel = data.data.importanceLevel
				that.securityLevel = data.data.securityLevel
				that.intro = data.data.intro
				that.comment = data.data.comment
				that.username = data.data.user.name
			})
		},
		methods:{
			close(){//关闭按钮
		      	this.$emit('personsee',false)//子组件传给父组件的参数
		    },
		}
	}
</script>

<style>
	#personseezhezhaoceng{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0);
		position: fixed;
		top: 0;
	}
	#personsee{
		width: 50%;
		position: absolute;
		top: 120px;
		border: 1px solid #333333;
		background: #E9EEF3;
		height: 500px;
		padding: 10px;
		overflow: auto;
	}
	/*简介文字居左*/
	#intro,#comment{
		text-align: left;
	}
	#personsee h5{
		height: 1px;
	}
	#personsee #close{
		position: absolute;
		top:10px;
		right: 10px;
		color: red;
		cursor: pointer;
		font-size: 20px;
	}
</style>