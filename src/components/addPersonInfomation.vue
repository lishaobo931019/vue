<template>
	<div id="">
		<h5>添加相关联系人信息</h5>
		<el-form ref="addPersonInfoform" :model="addPersonInfoform" label-width="80px" size="mini">
			<table id="MarketTab">
				<!--第一行-->
				<tr>
					<td>
						<el-form-item label="姓名" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="所属单位">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!--第二行-->
				<tr>
					<td>
						<el-form-item label="职位">
					    	<el-input></el-input>
					  	</el-form-item>
					</td>
					<td>
						<el-form-item label="联系电话">
				    		<el-input></el-input>
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
						<el-form-item label="安全级别">
			    			<el-select v-model="addPersonInfoform.region" placeholder="无">
			      				<el-option label="区域一" value="shanghai"></el-option>
			      				<el-option label="区域二" value="beijing"></el-option>
			   				</el-select>
			  			</el-form-item>
					</td>
				</tr>
				<!--第四行-->
				<tr>
					<td>
						<el-form-item label="职位重要度">
					    	<el-select v-model="addPersonInfoform.region" placeholder="无">
			      				<el-option label="区域一" value="shanghai"></el-option>
			      				<el-option label="区域二" value="beijing"></el-option>
			   				</el-select>
						</el-form-item>
					</td>
					<td>
						<el-form-item label="录入人" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
			</table>
			
			<!---->
			<div class="text-ADDPersonInformationbox">
				<!--第五行-->
				<el-form-item label="简介" class="box">
				    <el-input type="textarea"  v-model="addPersonInfoform.desc"></el-input>
				</el-form-item>
				<!--第六行-->
				<el-form-item label="备注" class="box">
					<el-input type="textarea"  v-model="addPersonInfoform.desc"></el-input>
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
	        addPersonInfoform: {
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
	#MarketTab{
		/*width: 50%;*/
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
	.el-form-item .el-form-item__label{
		width:100px!important;
	}
	.el-form-item__content{
		margin-left: 100px!important;
	}
	/*给textarea写一个宽度*/
	.box textarea{
		height: 150px;
		margin-bottom: 18px;
	}
	.text-ADDPersonInformationbox{
		max-width: 594px!important;
		margin: 0 auto;
	}
</style>