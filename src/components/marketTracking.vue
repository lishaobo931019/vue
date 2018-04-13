<template>
	<div>
		<el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
			<table id="topTab">
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
					    	<el-select v-model="sizeForm.region" placeholder="无">
					      		<el-option label="区域一" value="shanghai"></el-option>
					      		<el-option label="区域二" value="beijing"></el-option>
					    	</el-select>
					  	</el-form-item>
					</td>
					<td>
						<el-form-item label="返回类型">
				    		<el-select v-model="sizeForm.region" placeholder="无">
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
			    			<el-select v-model="sizeForm.region" placeholder="无">
			      				<el-option label="区域一" value="shanghai"></el-option>
			      				<el-option label="区域二" value="beijing"></el-option>
			    			</el-select>
			  			</el-form-item>
					</td>
					<td>
						<el-form-item label="所在片区">
			    			<el-select v-model="sizeForm.region" placeholder="无">
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
					    		<el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
					   	 	</el-col>
					    	<el-col class="line" :span="1">-</el-col>
					    	<el-col :span="11">
					    		<el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date2" style="width: 100%;"></el-date-picker>
					    	</el-col>
						</el-form-item>
					</td>
					<td>
						<el-form-item label="拜访天数" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!--第五行-->
				<tr>
					<td>
						<el-form-item size="large">
						    <el-button type="primary" @click="onSubmit">查询</el-button>
						</el-form-item>
					</td>
				</tr>
			</table>
			<!---->
		</el-form>
	<!---->
	
		<el-table :data="tableData" border style="max-width: 782px;margin:0 auto">
			<el-table-column  prop="Meetperson" label="拜访对象" width="150" height="30"></el-table-column>
			<el-table-column  prop="zeren" label="责任人" width="150"></el-table-column>
			<el-table-column  prop="date" label="拜访日期" sortable width="150"></el-table-column>
			<el-table-column  prop="worktype" label="工作任务类型" width="150"></el-table-column>
			<el-table-column  prop="over" label="完成情况" width="150"></el-table-column>
			<el-table-column  prop="suozaidiqu" label="所在地区" width="150"></el-table-column>
			<el-table-column  prop="suozai" label="所在片区" width="150"></el-table-column>
		    <el-table-column  label="操作" width="100">
		      	<template slot-scope="scope">
		        	<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
		        	<el-button type="text" size="small">编辑</el-button>
		      	</template>
		    </el-table-column>
		</el-table>
	
	</div>
</template>

<script>
	export default {
    data() {
      return {
        sizeForm: {
          name: '拜访对象',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData: [{
        	Meetperson: '小王',
          date: '2016-05-03',
        }, {
        	Meetperson: '小刘',
          date: '2016-05-02',
        }, {
        	Meetperson: '小李',
          date: '2016-05-04',
        }, {
        	Meetperson: '小张',
          date: '2016-05-01',
        }]
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  };
	
</script>

<style>
	/*选择框左对齐*/
	.el-form-item__content .el-select--mini{
		float: left;
	}
	/*按钮左对齐*/
	.el-button--large{
		float: left;
		margin:10px 0;
	}
	/*第二个table的表头高度控制*/
	.el-table__header-wrapper{
		line-height: 0px;
	}
	/*表头文字居中*/
	.cell{
		text-align: center;
	}
	/*修改label的位置*/
	.el-form-item__label{
		margin-top:4px;
	}
	.el-form-item__label:nth-of-type(6){
		margin-top:none;
		color: red;
	}
	/*修改行距*/
	.el-form .el-form-item{
		margin: 0;
	}
	/*表格背景*/
	.el-table{
		background: none;
	}
	/*表格居中*/
	.el-table__header,.el-table__body{
		margin: auto;
	}
	/**/
	#topTab{
		/*width: 50%;*/
		margin: auto;
	}
	.el-form-item--mini{
		/*width: 80%;*/
		margin: auto;
	}
</style>