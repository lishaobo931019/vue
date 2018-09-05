<template>
	<div id="relationship">
		<h5 class="personlist">联系人信息列表</h5>
		<div class="diyihang">
			<el-form :inline="true" :model="personform" class="demo-form-inline" size="mini">
						<el-form-item>
		    				<el-input  placeholder="姓名" v-model="personform.name"></el-input>
		   				 </el-form-item>
						<el-form-item>
		    				<el-input  placeholder="公司"  v-model="personform.company"></el-input>
		    			</el-form-item>
						<el-form-item>
		    				<el-button type="primary" @click="onSubmit">查询</el-button>
						</el-form-item>
			</el-form>
		</div>
		<!--第二块-->
		<el-table :data="PersontableData" border style="max-width: 1071px;margin:0 auto;margin-top:30px;">
			<el-table-column type="index" label="编号" width="50"></el-table-column>
			<el-table-column  prop="name" label="姓名" width="100" height="30"></el-table-column>
			<el-table-column  prop="company" label="公司" width="180"></el-table-column>
			<el-table-column  prop="user.name" label="录入人" width="100"></el-table-column>
			<el-table-column  prop="job" label="职务" width="180"></el-table-column>
			<el-table-column  prop="mobile" label="手机号" width="130"></el-table-column>
			<el-table-column  prop="inputTime" label="录入时间" sortable width="130"></el-table-column>
			<el-table-column  prop="importanceLevel" label="职位重要度" width="100"></el-table-column>
		    <el-table-column  label="操作" width="100">
		      	<template slot-scope="scope">
		        	<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
		        	<el-button @click="personeditclick(scope.row)" type="text" size="small">编辑</el-button>
		      	</template>
		    </el-table-column>
		</el-table>
		<!---->
		<!--分页器-->
		<div class="block">
		   <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1"
	      :page-size="10" layout="total, prev, pager, next" :total="totalNum">
	    </el-pagination>
		</div>
		
		
		
		<personsee v-if="personsee2" :child-msg="id" v-on:personsee="personsee"></personsee>
		<personedit v-if="personedit2" :child-msg="id" v-on:personedit="personedit"></personedit>
	</div>
</template>

<script>
	import personsee from '@/components/personsee'//引入查看组件
	import personedit from '@/components/personedit'//引入编辑组件
	export default {
		components:{
			personsee:personsee,//引入查看组件
			personedit:personedit//引入编辑组件
		},
	    data() {
	    	return {
	    		personedit2:false,
	    		personsee2:false,
	    		id:null,
	    		totalNum:0,
	    		personform:{
	    			name:'',
	    			company:''
	    		},
	        	postform: {
	          		name:'',//值不能为null 
	    			company:'',
	    			sort:"inputTime",
        			order:"desc",
        			page:1,
        			rows:10,
	        	},
	        	PersontableData: [],
		        currentPage1: 1,
		        currentPage2: 5,
		        currentPage3: 5,
		        currentPage4: 4
	      	}
	    },
	    methods: {
	      	onSubmit() {
	        	console.log('submit!');
	        	this.currentPage1 = 1;
	        	this.postform.name = JSON.parse(JSON.stringify(this.personform.name));
	        	this.postform.company = JSON.parse(JSON.stringify(this.personform.company));
	       		var fd = new FormData();//钩子函数中利用formData来传值
		    	fd.append("name",this.postform.name)
		    	fd.append("company",this.postform.company)
		    	fd.append("sort",this.postform.sort)
		    	fd.append("order",this.postform.order)
		    	fd.append("page",1)
		    	fd.append("rows",this.postform.rows)
		    		
		    	var that = this;//改变this指向

			    this.$http.ContactListUrl(fd).then(function(data){
			    	console.log(data)
			    	that.totalNum = data.data.total;//总数
			    	var list = data.data.rows;
			    	for(var i = 0; i < list.length; i++){//遍历所有的时间戳。转换成XX-XX-XX的形式赋值
					list[i].inputTime = that.NumConvertUtil.formatDate2(list[i].inputTime)
				}
			    	that.PersontableData = list;
			    })
	      	},
	      	handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		    },
		    handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		        var fd = new FormData();//钩子函数中利用formData来传值
			    var that = this;//改变this指向
		    	fd.append("name",this.postform.name)
		    	fd.append("company",this.postform.company)
		    	fd.append("sort",this.postform.sort)
		    	fd.append("order",this.postform.order)
		    	fd.append("page",val)
		    	fd.append("rows",this.postform.rows)
		    		
			    this.$http.ContactListUrl(fd).then(function(data){
			    	console.log(data)
			    	var list = data.data.rows;
			    	for(var i = 0; i < list.length; i++){//遍历所有的时间戳。转换成XX-XX-XX的形式赋值
						list[i].inputTime = that.NumConvertUtil.formatDate2(list[i].inputTime)
				    }
			    	that.PersontableData = list;
			    })
		    },
		    handleClick(scope){//点击查看
		      	this.personsee2 =true
		      	console.log(scope)
		      	this.id = scope.id;//利用id来选择点击的是哪一个
		    },
		    personeditclick(scope){//点击编辑
		      	this.personedit2 =true
		      	this.id = scope.id;//利用id来选择点击的是哪一个
		    },
		    personsee(res){
    			this.personsee2 = res//父组件接收子组件的信息
    		},
    		personedit(res){
    			this.personedit2 =res//父组件接收子组件的信息
    		}
	    },
	    created(){
	    	var fd = new FormData();//钩子函数中利用formData来传值
	    	var that = this;//改变this指向
    		fd.append("name",this.postform.name)
    		fd.append("company",this.postform.company)
    		fd.append("sort",this.postform.sort)
    		fd.append("order",this.postform.order)
    		fd.append("page",this.postform.page)
    		fd.append("rows",this.postform.rows)
    		
	    	this.$http.ContactListUrl(fd).then(function(data){
	    		console.log(data)
	    		var list = data.data.rows;
	    		that.totalNum = data.data.total;//总数
	    		for(var i = 0; i < list.length; i++){//遍历所有的时间戳。转换成XX-XX-XX的形式赋值
				list[i].inputTime = that.NumConvertUtil.formatDate2(list[i].inputTime)
			}
	    		that.PersontableData = list;
	    	})
	    }
  	}
	
</script>

<style>
	
	#relationship .personlist{
		color:#01a8a1;
		height: 20px;
	    border-bottom: 1px solid #01a8a1;
	    text-align: left;
	    line-height: 20px;
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
	.cell{
		text-align: center;
	}
</style>