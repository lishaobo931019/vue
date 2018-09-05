<template>
	<div id="addPersonInfo">
		<h5>添加相关联系人信息</h5>
		<el-form ref="addPersonInfoform" :model="addPersonInfoform" label-width="80px" size="mini">
			<table id="addPersonInfoTab">
				<!--第一行-->
				<tr>
					<td>
						<el-form-item label="姓名" >
				  			<el-input v-model="addPersonInfoform.name"  v-validate="'required'" name="name1"></el-input>
				  			<span class="tipsinfo" v-show="errors.has('name1')">不能为空</span>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="所属单位">
				  			<el-input v-model="addPersonInfoform.company" v-validate="'required'" name="name2"></el-input>
				  			<span class="tipsinfo" v-show="errors.has('name1')">不能为空</span>
				  		</el-form-item>
					</td>
				</tr>
				<!--第二行-->
				<tr>
					<td>
						<el-form-item label="职位">
					    	<el-input v-model="addPersonInfoform.job" v-validate="'required'" name="name3"></el-input>
					    	<span class="tipsinfo" v-show="errors.has('name3')">不能为空</span>
					  	</el-form-item>
					</td>
					<td>
						<el-form-item label="联系电话">
				    		<el-input v-model="addPersonInfoform.mobile" v-validate="'required'" name="name4"></el-input>
				    		<span class="tipsinfo" v-show="errors.has('name4')">不能为空</span>
				  		</el-form-item>
					</td>
				</tr>
				<!--第三行-->
				<tr>
					<td>
						<el-form-item label="邮箱">
			    			<el-input v-model="addPersonInfoform.email"></el-input>
			  			</el-form-item>
					</td>
					<td>
						<el-form-item label="安全级别">
			    			<el-select v-model="addPersonInfoform.securityLevel" placeholder="无">
			      				<el-option label="1" value="1"></el-option>
			      				<el-option label="2" value="2"></el-option>
			      				<el-option label="3" value="3"></el-option>
			      				<el-option label="4" value="4"></el-option>
			      				<el-option label="5" value="5"></el-option>
			   				</el-select>
			  			</el-form-item>
					</td>
				</tr>
				<!--第四行-->
				<tr>
					<td>
						<el-form-item label="职位重要度">
					    	<el-select v-model="addPersonInfoform.importanceLevel" placeholder="无">
			      				<el-option label="1" value="1"></el-option>
			      				<el-option label="2" value="2"></el-option>
			      				<el-option label="3" value="3"></el-option>
			      				<el-option label="4" value="4"></el-option>
			      				<el-option label="5" value="5"></el-option>
			   				</el-select>
						</el-form-item>
					</td>
					<td>
						<el-form-item label="录入人" >
				  			<el-input v-model="addPersonInfoform.inputUser" readonly="readonly"></el-input>
				  		</el-form-item>
					</td>
				</tr>
			</table>
			
			<!---->
			<div class="text-ADDPersonInformationbox">
				<!--第五行-->
				<el-form-item label="简介" class="box">
				    <el-input type="textarea"  v-model="addPersonInfoform.intro"></el-input>
				</el-form-item>
				<!--第六行-->
				<el-form-item label="备注" class="box">
					<el-input type="textarea"  v-model="addPersonInfoform.comment"></el-input>
				</el-form-item>
			</div>
			
			<el-form-item>
			    <el-button type="primary" @click="onSubmit">保存</el-button>
			    <el-button>取消</el-button>
			</el-form-item>
		</el-form>	
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	        addPersonInfoform: {}
	      }
	    },
	    methods: {
	      onSubmit() {
				
				var that = this
	    		that.addPersonInfoform.id = this.uuid();//引入uuid唯一标识
	    		
	    		this.$validator.validateAll().then(function(res){//固定用法格式
		    		if(res){
		    			
		    			that.$http.contactAddUrl(that.addPersonInfoform).then(function(data){
							console.log(data)
							that.$router.push({path:'relationship'});
						}).catch(function (error) {
						    console.log(error);
						});
		    		}
		    	})
	    	
				
	      }
	    },
	    created(){
	    	
	    }
 	 }
</script>

<style>
	#addPersonInfo h5{
		color:#01a8a1;
		height: 20px;
	    border-bottom: 1px solid #01a8a1;
	    text-align: left;
	    line-height: 20px;
	}
	/**/
	#addPersonInfoTab{
		margin: auto;
	}
	/*选择框左对齐*/
	.el-form-item__content .el-select--mini{
		float: left;
	}
	/*修改label的位置*/
	.el-form-item__label{
		margin-top:4px;
	}
	/*修改行距*/
	.el-form .el-form-item{
		margin: 0;
	}
	/*表格居中*/
	.el-table__header,.el-table__body{
		margin: auto;
	}
	/**/
	/*左对齐多选框,调整多选框*/
	.el-form .box .el-checkbox-group label{
		float: left;
		width: 70px;
		margin-left: 0;
		text-align: left;		
	}
	#addPersonInfo .el-form-item .el-form-item__label{
		width:100px!important;
	}
	#addPersonInfo .el-form-item__content{
		margin-left: 100px!important;
	}
	/*给textarea写一个宽度*/
	#addPersonInfo .box textarea{
		height: 150px;
		margin-bottom: 18px;
	}
	#addPersonInfo .text-ADDPersonInformationbox{
		max-width: 594px!important;
		margin: 0 auto;
	}
	/*提示*/
	#addPersonInfo .tipsinfo{
		font-size: 10px;
		color: red;
		position: absolute;
		top: 30px;
		left: 3px;
	}
</style>