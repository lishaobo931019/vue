<template>
	<div id="adduser">
		<h5>添加用户</h5>
		<el-form ref="addPersonInfoform" :model="adduserform" label-width="80px" size="mini">
			<table id="adduserTab">
				<!--第一行-->
				<tr>
					<td>
						<el-form-item label="工号" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="姓名">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!--第二行-->
				<tr>
					<td>
						<el-form-item label="密码">
					    	<el-input type="password"></el-input>
					  	</el-form-item>
					</td>
					<td>
						<el-form-item label="确认密码">
				    		<el-input type="password"></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!--第三行-->
				<tr>
					<td>
						<el-form-item label="邮箱">
			    			<el-input></el-input>
			  			</el-form-item>
					</td>
					<td>
						<el-form-item label="手机号">
							<el-input></el-input>
			  			</el-form-item>
					</td>
				</tr>
				<!--第四行-->
				<tr>
					<td>
						<el-form-item label="所属地区">
					    	<el-select v-model="adduserform.region" placeholder="无">
			      				<el-option label="区域一" value="shanghai"></el-option>
			      				<el-option label="区域二" value="beijing"></el-option>
			   				</el-select>
						</el-form-item>
					</td>
					<td>
						<el-form-item label="所属分区">
					    	<el-select v-model="adduserform.region" placeholder="无">
			      				<el-option label="区域一" value="shanghai"></el-option>
			      				<el-option label="区域二" value="beijing"></el-option>
			   				</el-select>
						</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="入职时间">
					    	<el-col :span="11">
					    		<el-date-picker type="date" placeholder="选择日期" v-model="adduserform.date1" ></el-date-picker>
					   	 	</el-col>
						</el-form-item>
					</td>
					<td>
						<el-form-item label="录入人">
							<el-input></el-input>
						</el-form-item>
					</td>
				</tr>
			</table>
			
			<!---->
			<div class="text-ADDPersonInformationbox">
				<!--第五行-->
				<el-form-item label="备注" class="box">
					<el-input type="textarea"  v-model="adduserform.desc"></el-input>
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
	        adduserform: {
	          name: '',
	          region: '',
	          date1: '',
	          date2: '',
	          delivery: false,
	          type: [],
	          resource: '',
	          desc: ''
	        }
	      }
	    },
	    methods: {
	      onSubmit() {
	        console.log('submit!');
	      }
	    }
 	 }
</script>

<style>
	
	h5{
		text-align: center;
		height: 30px;
		line-height: 30px;
		width: 100%;
	}
	/**/
	#adduserTab{
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
	#adduser .el-form-item .el-form-item__label{
		width:100px!important;
	}
	#adduser .el-form-item__content{
		margin-left: 100px!important;
	}
	/*给textarea写一个宽度*/
	#adduser .box textarea{
		height: 150px;
		margin-bottom: 18px;
	}
	#adduser .text-ADDPersonInformationbox{
		max-width: 643px!important;
		margin: 0 auto;
	}
	
	#adduser .el-input__inner{
		width: 220px;
	}
</style>