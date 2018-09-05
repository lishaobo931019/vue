<template>
	<div id="biddinglist">
		<h5>招投标信息列表</h5>
		<el-form ref="form" :model="biddinglistForm" label-width="80px" size="mini">
			<table id="biddinglistFormtopTab">
				<!--第一行-->
				<tr>
					<td>
						<el-form-item label="招标文件发布方" >
				  			<el-input v-model="biddinglistForm.bidCompany"></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="审核状态">
			    			<el-select v-model="biddinglistForm.status" placeholder="无">
			      				<el-option label="无" value=""></el-option>
				      			<el-option :label="item.category" :value="item.id" v-for="item in auditlist"></el-option>
			   				</el-select>
			  			</el-form-item>
					</td>
				</tr>
				<!--第三行-->
				<tr>
					<td>
						<el-form-item label="合同签约时间">
					    	<el-col :span="11">
					    		<el-date-picker type="date" placeholder="选择日期" v-model="biddinglistForm.bidStartDate" ></el-date-picker>
					   	 	</el-col>
						</el-form-item>
					</td>
					<td>
						<el-form-item label="合同签约时间">
					    	<el-col :span="11">
					    		<el-date-picker type="date" placeholder="选择日期" v-model="biddinglistForm.bidEndDate" ></el-date-picker>
					    	</el-col>
						</el-form-item>
					</td>
				</tr>
				<!---->
				<tr>
					<td>
						<el-form-item label="所在地区">
			    			<el-select v-model="biddinglistForm.area" placeholder="无">
			      				<el-option label="无" value=""></el-option>
				      			<el-option :label="item.category" :value="item.id" v-for="item in areaCategoryList"></el-option>
			    			</el-select>
			  			</el-form-item>
					</td>
					<td>
						<el-form-item label="所在片区">
			    			<el-select v-model="biddinglistForm.region" placeholder="无">
			      				<el-option label="无" value=""></el-option>
				      			<el-option :label="item.category" :value="item.id" v-for="item in regionCategoryList"></el-option>
			   				</el-select>
			  			</el-form-item>
					</td>
				</tr>
				<!--第四行-->
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
	
		<el-table :data="biddinglisttableData" border style="max-width: 1050px;margin:0 auto;margin-top:30px;">
				<el-table-column type="index" label="编号" width="50"></el-table-column>
			<el-table-column  prop="bidCompany" label="招标单位" width="150" height="30"></el-table-column>
			<el-table-column  prop="bidProject" label="招标项目名称" width="150"></el-table-column>
			<el-table-column  prop="bidTime" label="投标日期" sortable width="150"></el-table-column>
			<el-table-column  prop="bidAuditCategory.category" label="审核状态" width="150"></el-table-column>
			<el-table-column  prop="areaCategory.category" label="所在地区" width="150"></el-table-column>
			<el-table-column  prop="regionCategory.category" label="所在片区" width="150"></el-table-column>
		    <el-table-column  label="操作" width="100">
		      	<template slot-scope="scope">
		        	<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
		        	<el-button type="text"@click="handleClick2(scope.row)" size="small">编辑</el-button>
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
		
		<biddingsee v-if="biddingsee" v-on:bidding="bidding" :child-msg="id"></biddingsee>
		<biddingedit v-if="biddingedit" v-on:biddingeditt="biddingeditt" :child-msg="id"></biddingedit>
		
	</div>
</template>

<script>
	import biddingsee from '@/components/biddingsee'//引入查看组件
	import biddingedit from '@/components/biddingedit'//引入编辑组件
	export default {
	components:{
		biddingsee:biddingsee,
		biddingedit:biddingedit
	},
    data() {
      return {
      	id:null,
      	biddingedit:false,
      	biddingsee:false,
      	totalNum:0,
      	currentPage1: 1,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        biddinglistForm: {
          	bidCompany:'',
        	bider:'',
        	bidStartDate:'',
        	bidEndDate:'',
        	status:'',
        	area:'',
        	region:'',
        	sort:'bidTime',
        	order:'desc',
        	page:1,
        	rows:10
        },
        inputbiddingform:{//发送给后台对接数据
        	bidCompany:'',
        	bider:'',
        	bidStartDate:'',
        	bidEndDate:'',
        	status:'',
        	area:'',
        	region:'',
        	sort:'bidTime',
        	order:'desc',
        	page:1,
        	rows:10
        },
        biddinglisttableData: [],
        areaCategoryList:[],
        invoiceCategoryList:[],
        productCategoryList:[],
        regionCategoryList:[],
        auditlist:[]
      };
    },
    methods: {
    	handleClick(scope){//查看
    		this.biddingsee = true
    		this.id = scope.id;
//  		console.log(scope.id)
    	},
    	handleClick2(scope){//编辑
    		this.biddingedit = true
    		this.id = scope.id;
    	},
    	bidding(res){
    		this.biddingsee = res//父组件接收子组件的信息 = res//父组件接收子组件的信息
    	},
    	biddingeditt(res){
    		this.biddingedit = res//父组件接收子组件的信息 = res//父组件接收子组件的信息
    	},
    	formatDate(date){//转换时间格式
      	if(!date){
      		return 
      	}
      		var date = new Date(date);
	      	var year = date.getFullYear();
	      	var month = date.getMonth();
	      	var day = date.getDate();
	      	return year + '-' + ((month+1)<10?'0'+(month+1):(month+1)) + '-' +(day<10?'0'+day:day)
	  
	//    	console.log(date.getFullYear())
      },
    	onSubmit() {
        	console.log('submit!');
        	this.currentPage1 = 1;
      		this.inputbiddingform = JSON.parse(JSON.stringify(this.biddinglistForm));//点击搜查时让两个对象相等，以便对接后台的对象等于数据双向绑定的对象。
        	var fd = new FormData();
	    	fd.append("bidCompany",this.inputbiddingform.bidCompany)
	    	fd.append("bider",this.inputbiddingform.bider)
	    	fd.append("bidStartDate",this.formatDate(this.inputbiddingform.bidStartDate))//点击查询时候修改时间的格式
	    	fd.append("bidEndDate",this.formatDate(this.inputbiddingform.bidEndDate))
	    	fd.append("status",this.inputbiddingform.status)
	    	fd.append("area",this.inputbiddingform.area)
	    	fd.append("region",this.inputbiddingform.region)
	    	fd.append("sort",this.inputbiddingform.sort)
	    	fd.append("order",this.inputbiddingform.order)
	    	fd.append("page",1)
	    	fd.append("rows",this.inputbiddingform.rows)
	    	
	    	//请求接口
	    	var that = this;//转译this指向
	    	this.$http.bidListUrl(fd).then(function(data){
	    		console.log(data)
	    		that.totalNum = data.data.total;//总数
	    		var list = data.data.rows;//列表数组
	    		for(var i = 0; i < list.length; i++){//遍历所有的时间戳。转换成XX-XX-XX的形式赋值
					list[i].bidTime = that.NumConvertUtil.formatDate2(list[i].bidTime)
				}
				that.biddinglisttableData = list;//让列表数组等于后台返回的数组。
	    	})
      	},
        handleSizeChange(val) {
        	console.log(`每页 ${val} 条`);
      	},
      	handleCurrentChange(val) {//点击切换页面请求后台数据返回页面刷新
        	console.log(`当前页: ${val}`);
        	//钩子函数中利用formData来传值
	    	var fd = new FormData();
	    	fd.append("bidCompany",this.inputbiddingform.bidCompany)
	    	fd.append("bider",this.inputbiddingform.bider)
	    	fd.append("bidStartDate",this.inputbiddingform.bidStartDate)
	    	fd.append("bidEndDate",this.inputbiddingform.bidEndDate)
	    	fd.append("status",this.inputbiddingform.status)
	    	fd.append("area",this.inputbiddingform.area)
	    	fd.append("region",this.inputbiddingform.region)
	    	fd.append("sort",this.inputbiddingform.sort)
	    	fd.append("order",this.inputbiddingform.order)
	    	fd.append("page",val)
	    	fd.append("rows",this.inputbiddingform.rows)
	    	
	    	//请求接口
	    	var that = this;//转译this指向
	    	this.$http.bidListUrl(fd).then(function(data){
	    		console.log(data)
	    		that.totalNum = data.data.total;//总数
	    		var list = data.data.rows;//列表数组
	    		for(var i = 0; i < list.length; i++){//遍历所有的时间戳。转换成XX-XX-XX的形式赋值
					list[i].bidTime = that.NumConvertUtil.formatDate2(list[i].bidTime)
				}
				that.biddinglisttableData = list;//让列表数组等于后台返回的数组。
	    	})
        	
	  	}
    },
    created(){
    	var that = this;
    	this.$http.contractSelectCategory().then(function(data){
    		that.areaCategoryList    = data.data.areaCategoryList
    		that.invoiceCategoryList = data.data.invoiceCategoryList
    		that.productCategoryList = data.data.productCategoryList
    		that.regionCategoryList  = data.data.regionCategoryList
    	})
    	
    	this.$http.bidAuditCategory().then(function(data){
    			that.auditlist =data.data
    	})
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	//钩子函数中利用formData来传值
    	var fd = new FormData();
    	fd.append("bidCompany",this.inputbiddingform.bidCompany)
    	fd.append("bider",this.inputbiddingform.bider)
    	fd.append("bidStartDate",this.inputbiddingform.bidStartDate)
    	fd.append("bidEndDate",this.inputbiddingform.bidEndDate)
    	fd.append("status",this.inputbiddingform.status)
    	fd.append("area",this.inputbiddingform.area)
    	fd.append("region",this.inputbiddingform.region)
    	fd.append("sort",this.inputbiddingform.sort)
    	fd.append("order",this.inputbiddingform.order)
    	fd.append("page",this.inputbiddingform.page)
    	fd.append("rows",this.inputbiddingform.rows)
    	
    	//请求接口
    	var that = this;//转译this指向
    	this.$http.bidListUrl(fd).then(function(data){
    		console.log(data)
    		that.totalNum = data.data.total;//总数
    		var list = data.data.rows;//列表数组
    		for(var i = 0; i < list.length; i++){//遍历所有的时间戳。转换成XX-XX-XX的形式赋值
				list[i].bidTime = that.NumConvertUtil.formatDate2(list[i].bidTime)
			}
			that.biddinglisttableData = list;//让列表数组等于后台返回的数组。
    	})
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
	#biddinglistFormtopTab{
		/*width: 50%;*/
		margin: auto;
	}
	.el-form-item--mini{
		/*width: 80%;*/
		margin: auto;
	}
	
		/*给label一个宽度使文字在一行*/
	#biddinglistFormtopTab .el-form-item .el-form-item__label{
		width:110px!important;
	}
	#biddinglistFormtopTab .el-form-item__content{
		margin-left: 110px!important;
	}
	/*修改选择框的宽*/
	#biddinglistFormtopTab .el-input__inner{
		width:219px
	}
	
	#biddinglist h5{
		color:#01a8a1;
		height: 20px;
	    border-bottom: 1px solid #01a8a1;
	    text-align: left;
	    line-height: 20px;
	}
	
</style>