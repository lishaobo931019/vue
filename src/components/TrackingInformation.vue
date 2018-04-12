<template>
	<div id="">
		<h5>添加新的市场跟踪报告</h5>
		<el-form ref="form" :model="form" label-width="80px" size="mini">
			<table id="MarketTab">
				<!--第一行-->
				<tr>
					<td>
						<el-form-item label="拜访对象" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="责任人">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!--第二行-->
				<tr>
					<td>
						<el-form-item label="任务类型">
					    	<el-select v-model="form.region" placeholder="无">
					      		<el-option label="区域一" value="shanghai"></el-option>
					      		<el-option label="区域二" value="beijing"></el-option>
					    	</el-select>
					  	</el-form-item>
					</td>
					<td>
						<el-form-item label="返回类型">
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
				<tr>
					<td>
						<el-form-item label="调查时间">
					    	<el-col :span="11">
					    		<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
					   	 	</el-col>
					    	<el-col class="line" :span="1">-</el-col>
					    	<el-col :span="11">
					    		<el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
					    	</el-col>
						</el-form-item>
					</td>
					<td>
						<el-form-item label="拜访天数" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				
			</table>
			
			<div class="text-box">
				<!--第五行-->
				<el-form-item label="任务内容" class="box">
				    <el-input type="textarea"  v-model="form.desc"></el-input>
				</el-form-item>
				<!--第六行-->
				<el-form-item label="反馈情况" class="box">
					<el-input type="textarea"  v-model="form.desc"></el-input>
				</el-form-item>
				<!--第七行-->
				<el-form-item label="备注" class="box">
					<el-input type="textarea"  v-model="form.desc"></el-input>
				</el-form-item>
				
				<el-form-item label="调查人" class="box">
				    <el-checkbox-group v-model="form.type">
				        <el-checkbox label="小王" name="type"></el-checkbox>
				        <el-checkbox label="小李" name="type"></el-checkbox>
				        <el-checkbox label="小猴子" name="type"></el-checkbox>
				        <el-checkbox label="小凳子" name="type"></el-checkbox>
				        <el-checkbox label="小子" name="type"></el-checkbox>
				        <el-checkbox label="小子子" name="type"></el-checkbox>
				        <el-checkbox label="小拉子" name="type"></el-checkbox>
				        <el-checkbox label="小额子" name="type"></el-checkbox>
				        <el-checkbox label="小啊子" name="type"></el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				
				<el-form-item label="添加联系人" id="addPerson">
				    <el-button type="primary" style="float: left;">添加联系人</el-button>
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