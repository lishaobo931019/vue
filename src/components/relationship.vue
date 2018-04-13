<template>
	<div>
		<h5 class="personlist">联系人信息列表</h5>
		<div class="diyihang">
			<el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
						<el-form-item>
		    				<el-input  placeholder="姓名"></el-input>
		   				 </el-form-item>
						<el-form-item>
		    				<el-input  placeholder="公司"></el-input>
		    			</el-form-item>
						<el-form-item>
		    				<el-button type="primary" @click="onSubmit">查询</el-button>
						</el-form-item>
			</el-form>
		</div>
		<!--第二块-->
		<el-table :data="tableData" border style="max-width: 800px;margin:0 auto;margin-top:30px">
			<el-table-column  prop="Meetperson" label="姓名" width="100" height="30"></el-table-column>
			<el-table-column  prop="company" label="公司" width="100"></el-table-column>
			<el-table-column  prop="lururen" label="录入人" width="100"></el-table-column>
			<el-table-column  prop="zhiwu" label="职务" width="100"></el-table-column>
			<el-table-column  prop="tel" label="手机号" width="100"></el-table-column>
			<el-table-column  prop="date" label="录入时间" sortable width="100"></el-table-column>
			<el-table-column  prop="workimport" label="职位重要度" width="100"></el-table-column>
		    <el-table-column  label="操作" width="100">
		      	<template slot-scope="scope">
		        	<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
		      	</template>
		    </el-table-column>
		</el-table>
		<!---->
		
		<div class="block">
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page.sync="currentPage1"
		      :page-size="100"
		      layout="total, prev, pager, next"
		      :total="1000">
		    </el-pagination>
		</div>
		
	</div>
</template>

<script>
	export default {
	    data() {
	    	return {
	        	formInline: {
	          		user: '',
	          		region: ''
	        	},
	        	tableData: [{
		        	Meetperson: '小王',
		        	company:"百度",
		        	lururen:"小小黑",
		        	zhiwu:"员工",
		        	tel:"187********",
		          	date: '2016-05-03',
		          	workimport:"1"
		        }, {
		        	Meetperson: '小刘',
		        	company:"百度",
		        	lururen:"小小黑",
		        	zhiwu:"员工",
		        	tel:"187********",
		          	date: '2016-05-02',
		          	workimport:"1"
		        }, {
		        	Meetperson: '小李',
		        	company:"百度",
		        	lururen:"小小黑",
		        	zhiwu:"员工",
		        	tel:"187********",
		          	date: '2016-05-04',
		          	workimport:"1"
		        }, {
		        	Meetperson: '小张',
		        	company:"百度",
		        	lururen:"小小黑",
		        	zhiwu:"员工",
		        	tel:"187********",
		         	date: '2016-05-01',
		         	workimport:"1"
		        }],
		        currentPage1: 5,
		        currentPage2: 5,
		        currentPage3: 5,
		        currentPage4: 4
	      	}
	    },
	    methods: {
	      	onSubmit() {
	        console.log('submit!');
	      	},
	      	handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		      },
		      handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		      }
	    }
  	}
	
</script>

<style>
	.personlist{
		margin: 0;
		width:100% ;
		height: 20px;
		line-height: 20px;
		text-align: left;
	}
	.diyihang{
		width:100%;
		height: 28px;
		
	}
	.el-table__header-wrapper{
		line-height: 0px;	
	}
	/*表格背景*/
	.el-table{
		background: none;
	}
	/*表格居中*/
	.el-table__header,.el-table__body{
		margin: auto;
	}
</style>