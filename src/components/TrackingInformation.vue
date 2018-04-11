<template>
	<div id="">
		<h5>添加新的市场跟踪报告</h5>
		<el-form ref="form" :model="form" label-width="80px">
			<table id="addmarketrepot">
			<!--第一行-->	
				<tr>
					<td>
						<el-form-item label="拜访对象">
						    <el-input v-model="form.name"></el-input>
						</el-form-item>
					</td>
					<td>
						<el-form-item label="责任人">
						    <el-input v-model="form.name"></el-input>
						</el-form-item>
					</td>
				</tr>
				<!--第二行-->
				<tr>
					<td>
						<el-form-item label="任务类型">
						    <el-select v-model="form.region" placeholder="无">
						    	<el-option label="区域一" value="1"></el-option>
						      	<el-option label="区域二" value="2"></el-option>
						    </el-select>
						</el-form-item>
					</td>
					<td>
						<el-form-item label="反馈类型">
						    <el-select v-model="form.region" placeholder="无">
						    	<el-option label="区域一" value="1"></el-option>
						      	<el-option label="区域二" value="2"></el-option>
						    </el-select>
						</el-form-item>
					</td>
				</tr>			
				<!--第三行-->
				<tr>
					<td>
						<el-form-item label="地区">
						    <el-select v-model="form.region" placeholder="无">
						    	<el-option label="区域一" value="1"></el-option>
						      	<el-option label="区域二" value="2"></el-option>
						    </el-select>
						</el-form-item>
					</td>
					<td>
						<el-form-item label="片区">
						    <el-select v-model="form.region" placeholder="无">
						    	<el-option label="区域一" value="1"></el-option>
						      	<el-option label="区域二" value="2"></el-option>
						    </el-select>
						</el-form-item>
					</td>
				</tr>			
				<!--第4行-->
				<tr>
					<td>
						<el-form-item label="活动时间">
						    <el-col :span="11">
						      	<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
						    </el-col>
						    <el-col class="line" :span="2">-</el-col>
						    <el-col :span="11">
						    	<el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
						    </el-col>
						</el-form-item>
					</td>
				</tr>
				<!--第五行-->
				<tr>
					<td>
						<el-form-item label="任务内容">
						    <el-input type="textarea" v-model="form.desc"></el-input>
						</el-form-item>
					</td>
				</tr>
				<!--第六行-->
				<tr>
					<td>
						<el-form-item label="反馈情况">
						    <el-input type="textarea" v-model="form.desc"></el-input>
						</el-form-item>
					</td>
				</tr
				<!--第七行-->
				<tr>
					<td>
						<el-form-item label="备注">
						    <el-input type="textarea" v-model="form.desc"></el-input>
						</el-form-item>
					</td>
				</tr>
				
				<el-form-item label="调查人">
				    <el-checkbox-group v-model="form.type">
				        <el-checkbox label="小王" name="type"></el-checkbox>
				        <el-checkbox label="小李" name="type"></el-checkbox>
				        <el-checkbox label="小猴子" name="type"></el-checkbox>
				        <el-checkbox label="小凳子" name="type"></el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				<el-form-item>
				    <el-button type="primary" @click="onSubmit">保存</el-button>
				    <el-button>取消</el-button>
				</el-form-item>
			</table>
		</el-form>
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
	#addmarketrepot{
		width: 80%;
		background: pink;
		margin: auto;
	}
	h5{
		text-align: center;
		height: 30px;
		line-height: 30px;
		width: 100%;
	}
</style>