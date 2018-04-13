<template>
	<div id="">
		<h5>添加招投标管理信息</h5>
		<el-form ref="form" :model="form" label-width="80px" size="mini">
			<table id="MarketTab">
				<!--第一行-->
				<tr>
					<td>
						<el-form-item label="招标单位" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="招标项目名称">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!--第二行-->
				<tr>
					<td>
						<el-form-item label="招标数量" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!---->
				<tr>
					<td>
						<el-form-item label="招标时间">
				  			<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" ></el-date-picker>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="审核状态" >
				  			<el-select v-model="form.region" placeholder="无">
			      				<el-option label="区域一" value="shanghai"></el-option>
			      				<el-option label="区域二" value="beijing"></el-option>
			    			</el-select>
				  		</el-form-item>
					</td>
				</tr>
				
				<!--第三行-->
				<tr>
					<td>
						<el-form-item label="所在地区">
			    			<el-select v-model="form.region" placeholder="无">
			      				<el-option label="区域一" value="shanghai"></el-option>
			      				<el-option label="区域二" value="beijing"></el-option>
			    			</el-select>
			  			</el-form-item>
					</td>
					<td>
						<el-form-item label="所在片区">
			    			<el-select v-model="form.region" placeholder="无">
			      				<el-option label="区域一" value="shanghai"></el-option>
			      				<el-option label="区域二" value="beijing"></el-option>
			   				</el-select>
			  			</el-form-item>
					</td>
				</tr>
				<!--第四行-->
				
			</table>
			
			<div class="text-box">
				<!--第五行-->
				<el-form-item label="备注" class="box">
				    <el-input type="textarea"  v-model="form.desc"></el-input>
				</el-form-item>
				<!--第七行-->
				<el-form-item label="招标总结" class="box">
					<el-input type="textarea"  v-model="form.desc"></el-input>
				</el-form-item>
				
				<el-form-item label="包号清单" id="addPerson">
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
	        form: {
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
	/*area框设置*/
	.el-form .box .el-form-item--mini{
		width: 50%;
		margin: auto;
		margin:30px auto;
		
	}
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
	.text-box{
		max-width: 826px!important;
		margin: 0 auto;
	}
</style>