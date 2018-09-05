<template>
	<div id="personeditzhezhaoceng">
		<div id="personedit">
			<form id="contactForm"  method="post">
			    <table cellSpacing="1" cellPadding="5" width="750" align="center" bgColor="#eeeeee" style="border:1px solid #8ba7e3" border="0">
			        <tr>
			            <td class="ta_01" align="center" colSpan="4">
			                <font face="宋体" size="2"><strong>添加相关联系人信息</strong></font>
			            </td>
			        </tr>
			        <tr>
			            <td align="center" bgColor="#f5fafe" class="ta_01">姓名:</td>
			            <td class="ta_01" bgColor="#ffffff">
			                <input id="name" type="text"  required v-model="name" v-validate="'required'" name="name1">
			                 <span class="tipsinfo" v-show="errors.has('name1')">不能为空</span>
			            </td>
			            <td width="18%" align="center" bgColor="#f5fafe" class="ta_01">所属单位:</td>
			            <td class="ta_01" bgColor="#ffffff">
			                <input type="text"  required v-model="company" v-validate="'required'" name="name2">
			                 <span class="tipsinfo" v-show="errors.has('name2')">不能为空</span>
			            </td>
			        </tr>
			        <tr>
			            <td align="center" bgColor="#f5fafe" class="ta_01">职位:</td>
			            <td class="ta_01" bgColor="#ffffff">
			                <input type="text"  required v-model="job" v-validate="'required'" name="name3">
			                <span class="tipsinfo" v-show="errors.has('name3')">不能为空</span>
			            </td>
			            <td align="center" bgColor="#f5fafe" class="ta_01">联系电话:</td>
			            <td class="ta_01" bgColor="#ffffff">
			                <input type="text"  required v-model="mobile" v-validate="'required'" name="name4">
			                <span class="tipsinfo" v-show="errors.has('name4')">不能为空</span>
			            </td>
			        </tr>
			        <tr>
			
			            <td align="center" bgColor="#f5fafe" class="ta_01">邮箱:</td>
			            <td class="ta_01" bgColor="#ffffff">
			                <input type="text"  required v-model="email" v-validate="'required'" name="name5">
			                <span class="tipsinfo" v-show="errors.has('name5')">不能为空</span>
			            </td>
			
			            <td align="center" bgColor="#f5fafe" class="ta_01">安全级别:</td>
			            <td class="ta_01" bgColor="#ffffff">
			                <select name="securityLevel" style="width: 170px;" v-model="securityLevel">
			                    <option value="1">1</option>
			                    <option value="2">2</option>
			                    <option value="3">3</option>
			                    <option value="4">4</option>
			                    <option value="4">5</option>
			                </select>
			            </td>
			        </tr>
			        <tr>
			            <td align="center" bgColor="#f5fafe" class="ta_01">职位重要度:</td>
			            <td class="ta_01" bgColor="#ffffff">
			                <select name="importanceLevel" style="width: 170px;" v-model="importanceLevel">
			                    <option value="1">1</option>
			                    <option value="2">2</option>
			                    <option value="3">3</option>
			                    <option value="4">4</option>
			                    <option value="4">5</option>
			                </select>
			            </td>
			
			            <td align="center" bgColor="#f5fafe" class="ta_01">录入人:</td>
			            <td class="ta_01" bgColor="#ffffff">
			                <p id="inputUser" v-model="username"></p>
			            </td>
			        </tr>
			
			
			        <tr>
			            <td class="ta_01" align="center" bgColor="#f5fafe">简介:</td>
			            <td class="ta_01" bgColor="#ffffff" colSpan="3">
			                <textarea id="intro"  cols="90%"  rows="5" required v-model="intro" v-validate="'required'" name="name6"></textarea>
			                 <span class="tipsinfos" v-show="errors.has('name6')">不能为空</span>
			                <span>0/200</span>
			            </td>
			        </tr>
			
			
			
			        <tr>
			            <td class="ta_01" align="center" bgColor="#f5fafe">备注:</td>
			            <td class="ta_01" bgColor="#ffffff" colSpan="3">
			                <textarea id="comment"  cols="90%"  rows="5" required v-model="comment" v-validate="'required'" name="name7"></textarea>
			                 <span class="tipsinfos" v-show="errors.has('name7')">不能为空</span>
			                <span>0/200</span>
			            </td>
			        </tr>
			        <tr>
			        	<td lclass="ta_01" bgColor="#f5fafe" colSpan="4">
			        		<el-row style="margin-top:10px">
			        			<el-button type="primary" @click="tijiao">提交</el-button>
  								<el-button @click="close">关闭</el-button>
							</el-row>
			        	</td>
			        </tr>
			    </table>
			    
			</form>
			 		
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
				username:null,
				postpeopleform:{}
			}
		},
		props: ['childMsg'],
		methods:{
			close(){//关闭按钮
		      	this.$emit('personedit',false)//子组件传给父组件的参数
		    },
		    tijiao(){
		    	var that = this;
		    	that.postpeopleform.name            = that.name
		    	that.postpeopleform.company         = that.company
		    	that.postpeopleform.job             = that.job
		    	that.postpeopleform.mobile          = that.mobile
		    	that.postpeopleform.email           = that.email
		    	that.postpeopleform.importanceLevel = that.importanceLevel
		    	that.postpeopleform.securityLevel   = that.securityLevel
		    	that.postpeopleform.intro           = that.intro
		    	that.postpeopleform.comment         = that.comment
		    	that.postpeopleform.username        = that.username
    			
				that.postpeopleform.id = that.childMsg;//引入uuid唯一标识
		       
    			
    			 this.$validator.validateAll().then(function(res){//固定用法格式
		    		if(res){
		    			console.log(res)
		    			that.$http.contactUpdateUrl(that.postpeopleform).then(function(data){
				        	console.log(data)
				       		 //点击保存跳转到列表——成功时跳转
				       		 window.location.reload()//重新加载页面
				        }) .catch(function (error) {
						    console.log(error);
						});
		    		}
		    	})
		    }
		},
		created(){
			var that = this;
			console.log(this.childMsg)//获取到父组件传来的数据
			var id = this.childMsg;
			this.$http.ContactsdetailUrl(id).then(function(data){//页面刷新时候加载信息显示
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
			})
		}
	}
</script>

<style>
	#personeditzhezhaoceng{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0);
		position: fixed;
		top: 0;
	}
	#personedit{
		width: 50%;
		position: absolute;
		top: 120px;
		border: 1px solid #333333;
		background: #E9EEF3;
		height: 500px;
		padding: 10px;
		overflow: auto;
	}
	#personedit td{
		position: relative;
	}
	#personedit .tipsinfo{
		font-size: 10px;
		color: red;
		position: absolute;
		top: 10px;
		left: 53px;
	}
	#personedit .tipsinfos{
		font-size: 10px;
		color: red;
		position: absolute;
		top: 6px;
		left: 18px;
	}
</style>