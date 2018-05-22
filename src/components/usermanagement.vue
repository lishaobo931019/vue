<template>	
	<div id="">
		<h5>应用系统列表</h5>
		<el-table :data="usermanageData" id="usermanageData" border >
			<el-table-column  prop="name" label="工号" width="200" height="30"></el-table-column>
			<el-table-column  prop="workplace" label="工作地点" width="180"></el-table-column>
			<el-table-column  prop="mobile" label="手机号"  width="180"></el-table-column>
			<el-table-column  prop="email" label="邮箱" width="180"></el-table-column>
			<el-table-column  prop="createDate" label="创建时间" width="180"></el-table-column>
		    <el-table-column  label="操作" width="100" >
		      	<template slot-scope="scope">
		        	<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
		      	</template>
		    </el-table-column>
		</el-table>
		<div class="block">
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page.sync="currentPage1"
		      :page-size="10"
		      layout="total, prev, pager, next"
		      :total="totalNum">
		    </el-pagination>
		</div>
	     <usermanageinfo v-if="usermanageinfo" :child-msg="id" v-on:usermanagelist="usermanagelist"></usermanageinfo>
  </div>
</template>

<script>
	import usermanageinfo from '@/components/usermanageinfo'//引入查看组件
export default {
	components:{
			usermanageinfo:usermanageinfo//引入查看组件
	},
	data(){
	  	return{
	  		usermanageinfo:false,
	  		id:null,
	  		totalNum:10,
	  		currentPage1: 1,
	        currentPage2: 5,
	        currentPage3: 5,
	        currentPage4: 4,
	        rows:10,
	        page:1,
	  		usermanageData: []
	  	}
	},
	created(){
		var that = this;
		
		
    	//钩子函数中利用formData来传值
    	var fd = new FormData();
    	fd.append('rows',that.rows)
    	fd.append('page',that.page)
    	
		this.$http.UserListUrl(fd).then(function(data){
			console.log(data)
			var list = data.data.rows;
			for(var i = 0; i < list.length; i++){//遍历所有的时间戳。转换成XX-XX-XX的形式赋值
				list[i].createDate = that.NumConvertUtil.formatDate2(list[i].createDate)
			}
			that.usermanageData = list;//让列表数组等于后台返回的数组。
			that.totalNum = data.data.total;//总数
		})
	},
	methods:{
		handleSizeChange(val) {
      	  console.log(`每页 ${val} 条`);
      	},
      	handleCurrentChange(val) {//点击切换页面请求后台数据返回页面刷新
        	console.log(`当前页: ${val}`);
     	},
     	 handleClick(scope){
      		this.usermanageinfo = true;//点击查看出现组件
//  		console.log(scope)
    		this.id = scope.id;
      	},
      	usermanagelist(res){
    		this.usermanageinfo = res//父组件接收子组件的信息
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