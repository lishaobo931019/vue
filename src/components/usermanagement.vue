<template>
	<div id="">
		<h5>应用系统列表</h5>
		 <el-table :data="usermanageData" id="usermanageData" border >
			<el-table-column  prop="Meetperson" label="工号" width="200" height="30"></el-table-column>
			<el-table-column  prop="zeren" label="工作地点" width="180"></el-table-column>
			<el-table-column  prop="date" label="手机号"  width="180"></el-table-column>
			<el-table-column  prop="worktype" label="邮箱" width="180"></el-table-column>
			<el-table-column  prop="over" label="创建时间" width="180"></el-table-column>
		    <el-table-column  label="操作" width="100" fixed="right">
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
  	data(){
	  	return{
	  		usermanageData: [{
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
	  	}
  	}
  	
  }
</script>
<style>
	/*第二个table的表头高度控制*/
	#usermanageData .el-table__header-wrapper{
		line-height: 0px;
	}
	/*表头文字居中*/
	#usermanageData .cell{
		text-align: center;
	}
	/*修改label的位置*/
	#usermanageData .el-form-item__label{
		margin-top:4px;
	}
	#usermanageData .el-form-item__label:nth-of-type(6){
		margin-top:none;
	}
	/*修改行距*/
	#usermanageData .el-form .el-form-item{
		margin: 0;
	}
	/*表格背景*/
	#usermanageData .el-table{
		background: none;
	}
	/*表格居中*/
	#usermanageData .el-table__header,.el-table__body{
		margin: auto;
	}
	/**/
	#usermanageData .el-form-item--mini{
		/*width: 80%;*/
		margin: auto;
	}
	
	#usermanageData{
		max-width: 1021px;
		margin: 0 auto;
	}
	
</style>