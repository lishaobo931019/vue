<template>
	<div id="addcontract">
		<h5>添加合同</h5>
		<el-form ref="form" :model="addcontractform" label-width="80px" size="mini">
			<table id="addcontractTab">
				<!--第一行-->
				<tr>
					<td>
						<el-form-item label="项目标号" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="合同单位">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!--第二行-->
				<tr>
					<td>
						<el-form-item label="工程名称" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="质保金退回时间">
				  			<el-date-picker type="date" placeholder="选择日期" v-model="addcontractform.date1" ></el-date-picker>
				  		</el-form-item>
					</td>
				</tr>
				<!---->
				<tr>
					<td>
						<el-form-item label="已施工数量" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="应该施工总量">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!---->
				<tr>
					<td>
						<el-form-item label="已付款" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="合同总价">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!---->
				<tr>
					<td>
						<el-form-item label="质保金总额" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="合同签订时间">
					    	<el-col :span="11">
					    		<el-date-picker type="date" placeholder="选择日期" v-model="addcontractform.date1" ></el-date-picker>
					   	 	</el-col>
				  		</el-form-item>
					</td>
				</tr>
				<!---->
				
				<!--第三行-->
				<tr>
					<td>
						<el-form-item label="所在地区">
			    			<el-select v-model="addcontractform.region" placeholder="无">
			      				<el-option label="区域一" value="shanghai"></el-option>
			      				<el-option label="区域二" value="beijing"></el-option>
			    			</el-select>
			  			</el-form-item>
					</td>
					<td>
						<el-form-item label="所在片区">
			    			<el-select v-model="addcontractform.region" placeholder="无">
			      				<el-option label="区域一" value="shanghai"></el-option>
			      				<el-option label="区域二" value="beijing"></el-option>
			   				</el-select>
			  			</el-form-item>
					</td>
				</tr>
				<!--第四行-->
				<tr>
					<td>
						<el-form-item label="发票类型">
					    	<el-select v-model="addcontractform.region" placeholder="无">
			      				<el-option label="区域一" value="shanghai"></el-option>
			      				<el-option label="区域二" value="beijing"></el-option>
			   				</el-select>
						</el-form-item>
					</td>
					
				</tr>
				
			</table>
			
			<div class="text-box">
				<!--第五行-->
				<el-form-item label="开票备注" class="box">
				    <el-input type="textarea"  v-model="addcontractform.desc"></el-input>
				</el-form-item>
				<!--第七行-->
				<el-form-item label="备注" class="box">
					<el-input type="textarea"  v-model="addcontractform.desc"></el-input>
				</el-form-item>
				
				
				<el-form-item label="已付款清单" id="addPerson">
				    <el-button type="primary" style="float: left;">添加清单</el-button>
				</el-form-item>
				
				<el-form-item label="添加产品明细" id="addPerson">
				    <el-button type="primary" style="float: left;">添加清单</el-button>
				</el-form-item>
			</div>		
				
				<el-form-item>
				    <el-button type="primary" @click="onSubmit">保存</el-button>
				    <el-button>取消</el-button>
				</el-form-item>

		</el-form>
		<!--添加附件-->
		<div>
			<input type="file"/>
			<button>上传</button>
		</div>
		
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	        addcontractform: {
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
	#addcontractTab{
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
	/*area框设置*/
	#addcontract .el-form .box .el-form-item--mini{
		width: 50%;
		margin: auto;
		margin:30px auto;
		
	}
	/*左对齐多选框,调整多选框*/
	#addcontract .el-form .box .el-checkbox-group label{
		float: left;
		width: 70px;
		margin-left: 0;
		text-align: left;		
	}
	#addcontract .el-form-item .el-form-item__label{
		width:130px!important;
	}
	#addcontract .el-form-item__content{
		margin-left: 130px!important;
	}
	/*给textarea写一个宽度*/
	#addcontract .box textarea{
		height: 150px;
		margin-bottom: 18px;
	}
	#addcontract .text-box{
		max-width: 706px!important;
		margin: 0 auto;
	}
	
	/*调整label宽度，使其文字在一行*/
	#addcontract .el-input__inner{
		width: 220px;
	}
</style>