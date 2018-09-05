<template>
	<div id="contractlist">
		<h5 >合同列表</h5>
		<el-form ref="form" :model="contractlistForm" label-width="80px" size="mini">
			<table id="contractlistFormtopTab">
				<!--第一行-->
				<tr>
					<td>
						<el-form-item label="项目编号" >
				  			<el-input v-model="contractlistForm.contractCode"></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="合同单位">
				  			<el-input v-model="contractlistForm.contractCompany"></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!--第二行-->
				<tr>
					<td>
						<el-form-item label="工程名称">
					    	<el-input v-model="contractlistForm.projectName"></el-input>
					  	</el-form-item>
					</td>
				</tr>
				<!--第三行-->
				<tr>
					<td>
						<el-form-item label="所在地区">
			    			<el-select v-model="contractlistForm.area" placeholder="无">
			      				<el-option label="无" value=""></el-option>
			      				<el-option :label="item.category" :value="item.id" v-for="item in areaCategoryList"></el-option>
			    			</el-select>
			  			</el-form-item>
					</td>
					<td>
						<el-form-item label="所在片区">
			    			<el-select v-model="contractlistForm.region" placeholder="无">
			      				<el-option label="无" value=""></el-option>
			      				<el-option :label="item.category" :value="item.id" v-for="item in regionCategoryList "></el-option>
			   				</el-select>
			  			</el-form-item>
					</td>
				</tr>
				<!--第四行-->
				<tr>
					<td>
						<el-form-item label="合同签约时间区间" id="contractDate" >
					    	<el-col :span="11">
					    		<el-date-picker type="date" placeholder="选择日期" v-model="contractlistForm.startTime" style="width: 100%;"></el-date-picker>
					   	 	</el-col>
					    	<el-col class="line" :span="1">-</el-col>
					    	<el-col :span="11">
					    		<el-date-picker type="date" placeholder="选择日期" v-model="contractlistForm.endTime" style="width: 100%;"></el-date-picker>
					    	</el-col>
						</el-form-item>
					</td>
				</tr>
				<!--第五行-->
				<tr>
					<td>
						
					</td>
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
	
		<el-table :data="contractlistFormtableData" id="contractlistFormtableData" border >
			<el-table-column type="index" label="编号" width="50"></el-table-column>
			<el-table-column  prop="contractCode" label="项目编号" width="150" height="30"></el-table-column>
			<el-table-column  prop="projectName" label="工程名称" width="150"></el-table-column>
			<el-table-column  prop="contractCompany" label="合同单位" width="150"></el-table-column>
			<el-table-column  prop="signDate" label="签约日期" sortable width="120"></el-table-column>
			<el-table-column  prop="preSignDate" label="预计签约日期" sortable width="150"></el-table-column>
			<el-table-column  prop="depositBackTime" label="质保金退回日期" sortable width="150"></el-table-column>
			<el-table-column  prop="totalPrice" label="合同总价" width="100"></el-table-column>
			
			<el-table-column label="施工情况" width="100">
				<template slot-scope="scope">
					{{(scope.row.completeAmount/scope.row.totalQuantity).toFixed(2)*100+'%'}}
				</template>
			</el-table-column>
			
			<el-table-column label="付款情况" width="100">
				<template slot-scope="scope">
					{{(scope.row.paid/scope.row.totalPrice).toFixed(2)*100+'%'}}
				</template>
			</el-table-column>			
			
			<el-table-column  prop="areaCategoryModel.category" label="所在地区" width="80"></el-table-column>
			<el-table-column  prop="regionCategoryModel.category" label="所在片区" width="80"></el-table-column>
		    <el-table-column  label="操作" width="100">
		      	<template slot-scope="scope">
		        	<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
		        	<el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
		      	</template>
		    </el-table-column>
		</el-table>
		
		<div class="block">
		    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1"
		      :page-size="10"
		      layout="total, prev, pager, next"
		      :total="totalNum">
		    </el-pagination>
		</div>
		
		<contractsee v-if="contractsee" v-on:contractsee2="contractsee2" :child-msg="id"></contractsee>
		<contractedit v-if="contractedit" v-on:contractedit2="contractedit2" :child-msg="id"></contractedit>
		
	</div>
</template>

<script>
	import contractsee from '@/components/contractsee'//引入查看组件
	import contractedit from '@/components/contractedit'//引入编辑组件
	export default {
	
	components:{
		contractsee:contractsee,
		contractedit:contractedit
	},
    data() {
      return {
      	contractedit:false,
      	contractsee:false,
      	id:null,
      	totalNum:0,
      	currentPage1: 1,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        contractlistForm: {
        	contractCode: '',
          	contractCompany: '',
          	projectName: '',
          	area:'',
        	region:'',
        	productCategory:'',
        	startTime:'',
        	endTime:'',
        	page:1,
        	rows:10,
        	sort:'signDate',
        	order:'desc'
        },
        postcontractlistform:{//自定义对象用来传值给后台数据
        	contractCode:'',
        	contractCompany:'',
        	projectName:'',
        	area:'',
        	region:'',
        	productCategory:'',
        	startTime:'',
        	endTime:'',
        	page:1,
        	rows:10,
        	sort:'signDate',
        	order:'desc'
        },
        contractlistFormtableData: [],
        areaCategoryList:[],
        regionCategoryList:[]
      };
    },
    methods: {
    	formatDate(date){//转换时间格式
      	if(!date){
      		return 
      	}
      		var date = new Date(date);
	      	var year = date.getFullYear();
	      	var month = date.getMonth();
	      	var day = date.getDate();
	      	return year + '-' + ((month+1)<10?'0'+(month+1):(month+1)) + '-' +(day<10?'0'+day:day)
     	},
    	onSubmit() {
        	this.currentPage1 = 1;
      		this.postcontractlistform = JSON.parse(JSON.stringify(this.contractlistForm));//点击搜查时让两个对象相等，以便对接后台的对象等于数据双向绑定的对象。
	        var fd = new FormData();
	    	fd.append("contractCode",this.postcontractlistform.contractCode)
	    	fd.append("contractCompany",this.postcontractlistform.contractCompany)
	    	fd.append("projectName",this.postcontractlistform.projectName)
	    	fd.append("area",this.postcontractlistform.area)
	    	fd.append("region",this.postcontractlistform.region)
	    	fd.append("productCategory",this.postcontractlistform.productCategory)
	    	fd.append("startTime",this.formatDate(this.postcontractlistform.startTime))//点击查询时候修改时间的格式
	    	fd.append("endTime",this.formatDate(this.postcontractlistform.endTime))
	    	fd.append("page",this.postcontractlistform.page)
	    	fd.append("rows",this.postcontractlistform.rows)
	    	fd.append("sort",this.postcontractlistform.sort)
	    	fd.append("order",this.postcontractlistform.order)
	    	
	    	var that = this
	    	this.$http.Contractlist(fd).then(function(data){
	    		that.totalNum = data.data.total;//总数
		  		var list = data.data.rows;//列表数组
		  		for(var i = 0; i < list.length; i++){//遍历所有的时间戳。转换成XX-XX-XX的形式赋值
					list[i].signDate = that.NumConvertUtil.formatDate2(list[i].signDate)//签约时间
					list[i].preSignDate = that.NumConvertUtil.formatDate2(list[i].preSignDate)//预计签约时间
					list[i].depositBackTime = that.NumConvertUtil.formatDate2(list[i].depositBackTime)//质保金退回时间
				}
				that.contractlistFormtableData = list;//让列表数组等于后台返回的数组。
	    		
	    	})
	    	
	    	
      	},
     	handleSizeChange(val) {
        	console.log(`每页 ${val} 条`);
      	},
      	handleCurrentChange(val) {//点击切换页面请求后台数据返回页面刷新
        	console.log(`当前页: ${val}`);
        	//钩子函数中利用formData来传值
	    	var fd = new FormData();
	    	fd.append("contractCode",this.postcontractlistform.contractCode)
	    	fd.append("contractCompany",this.postcontractlistform.contractCompany)
	    	fd.append("projectName",this.postcontractlistform.projectName)
	    	fd.append("area",this.postcontractlistform.area)
	    	fd.append("region",this.postcontractlistform.region)
	    	fd.append("productCategory",this.postcontractlistform.productCategory)
	    	fd.append("startTime",this.postcontractlistform.startTime)
	    	fd.append("endTime",this.postcontractlistform.endTime)
	    	fd.append("page",val)
	    	fd.append("rows",this.postcontractlistform.rows)
	    	fd.append("sort",this.postcontractlistform.sort)
	    	fd.append("order",this.postcontractlistform.order)
	    	
	    	var that = this
	    	this.$http.Contractlist(fd).then(function(data){
	    		that.totalNum = data.data.total;//总数
		  		var list = data.data.rows;//列表数组
		  		for(var i = 0; i < list.length; i++){//遍历所有的时间戳。转换成XX-XX-XX的形式赋值
					list[i].signDate = that.NumConvertUtil.formatDate2(list[i].signDate)//签约时间
					list[i].preSignDate = that.NumConvertUtil.formatDate2(list[i].preSignDate)//预计签约时间
					list[i].depositBackTime = that.NumConvertUtil.formatDate2(list[i].depositBackTime)//质保金退回日期
				}
				that.contractlistFormtableData = list;//让列表数组等于后台返回的数组。
	    		
	    	})
        	
		},
		handleClick(scope){
			console.log(scope)//当前数据id
			this.id = scope.id
			this.contractsee=true
		},
		edit(scope){//打开编辑页面
			this.contractedit=true
			this.id = scope.id
		},
		contractsee2(res){
    		this.contractsee = res//父组件接收子组件的信息
    	},
    	contractedit2(res){
    		this.contractedit = res//父组件接收子组件的信息
    	}
    },
    created(){
    	//获取合同类别信息
    	this.$http.ContractTypeinfo().then(function(data){
    		console.log(data)
    		that.areaCategoryList = data.data.areaCategoryList//地区
    		that.regionCategoryList = data.data.regionCategoryList//片区
    	})
    	
    	
    	
    	
    	//钩子函数中利用formData来传值
    	var fd = new FormData();
    	fd.append("contractCode",this.postcontractlistform.contractCode)
    	fd.append("contractCompany",this.postcontractlistform.contractCompany)
    	fd.append("projectName",this.postcontractlistform.projectName)
    	fd.append("area",this.postcontractlistform.area)
    	fd.append("region",this.postcontractlistform.region)
    	fd.append("productCategory",this.postcontractlistform.productCategory)
    	fd.append("startTime",this.postcontractlistform.startTime)
    	fd.append("endTime",this.postcontractlistform.endTime)
    	fd.append("page",this.postcontractlistform.page)
    	fd.append("rows",this.postcontractlistform.rows)
    	fd.append("sort",this.postcontractlistform.sort)
    	fd.append("order",this.postcontractlistform.order)
    	
    	var that = this
    	this.$http.Contractlist(fd).then(function(data){
    		console.log(data)
    		that.totalNum = data.data.total;//总数
	  		var list = data.data.rows;//列表数组
	  		for(var i = 0; i < list.length; i++){//遍历所有的时间戳。转换成XX-XX-XX的形式赋值
				list[i].signDate = that.NumConvertUtil.formatDate2(list[i].signDate)//签约时间
				list[i].preSignDate = that.NumConvertUtil.formatDate2(list[i].preSignDate)//预计签约时间
				list[i].depositBackTime = that.NumConvertUtil.formatDate2(list[i].depositBackTime)//质保金退回时间
			}
			that.contractlistFormtableData = list;//让列表数组等于后台返回的数组。
    		
    	})
    }
  };
	
</script>

<style>
	#contractlist h5{
		color:#01a8a1;
		height: 20px;
	    border-bottom: 1px solid #01a8a1;
	    text-align: left;
	    line-height: 20px;
	}
	
	
	#contractlistFormtopTab{
		margin: auto;
	}
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
	
	.el-form-item--mini{
		/*width: 80%;*/
		margin: auto;
	}
	/*给label一个宽度使文字在一行*/
	#contractlistFormtopTab .el-form-item .el-form-item__label{
		width:130px!important;
	}
	#contractlistFormtopTab .el-form-item__content{
		margin-left: 130px!important;
	}
	#contractlistFormtableData{
		max-width: 1480px;
		margin: 0 auto;
	}
	/*修改文本框宽度*/
	#contractlist .el-input--mini{
		max-width: 193px!important;
		float: left;
	}

	
</style>