<template>
	<div id="markettracking">
		<h5>市场跟踪</h5>
		<el-form ref="form" :model="marketForm" label-width="80px" size="mini">
			<table id="marketFormtopTab">
				<!--第一行-->
				<tr>
					<td>
						<el-form-item label="拜访对象">
				  			<el-input  v-model="marketForm.surveyObject"></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="责任人" >
				  			<el-input v-model="marketForm.responsiblePerson"></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!--第二行-->
				<tr>
					<td>
						<el-form-item label="任务类型">
					    	<el-select v-model="marketForm.workCategory" placeholder="无">
					      		<el-option label="无" value=""></el-option>
					      		<el-option :label="item.category" :value="item.id" v-for="item in workCategoryList"></el-option>
					    	</el-select>
					  	</el-form-item>
					</td>
					<td>
						<el-form-item label="返回类型">
				    		<el-select v-model="marketForm.feedbackCategory" placeholder="无">
				    			<el-option label="无" value=""></el-option>
				      			<el-option :label="item.category" :value="item.id" v-for="item in feedbackCategoryList"></el-option>
				    		</el-select>
				  		</el-form-item>
					</td>
				</tr>
				<!--第三行-->
				<tr>
					<td>
						<el-form-item label="所在地区">
			    			<el-select v-model="marketForm.area" placeholder="无">
			    				<el-option label="无" value=""></el-option>
			      				<el-option :label="item.category" :value="item.id" v-for="item in areaCategoryList"></el-option>
			    			</el-select>
			  			</el-form-item>
					</td>
					<td>
						<el-form-item label="所在片区">
			    			<el-select v-model="marketForm.region" placeholder="无">
			    				<el-option label="无" value=""></el-option>
			      				<el-option :label="item.category" :value="item.id" v-for="item in regionCategoryList"></el-option>
			   				</el-select>
			  			</el-form-item>
					</td>
				</tr>
				<!--第四行-->
				<tr>
						<el-form-item label="调查时间">
					    	<el-col :span="11">
					    		<el-date-picker type="date" placeholder="选择日期" v-model="marketForm.surveyStartTime" style="width: 100%;"></el-date-picker>
					   	 	</el-col>
					    	<el-col class="line" :span="1">-</el-col>
					    	<el-col :span="11">
					    		<el-date-picker type="date" placeholder="选择日期" v-model="marketForm.surveyEndTime" style="width: 100%;"></el-date-picker>
					    	</el-col>
						</el-form-item>
					<td>
						
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
	
		<el-table :data="markettableData" id="markettableData" border >
			<el-table-column type="index" label="编号" width="50"></el-table-column>
			<el-table-column  prop="surveyObject" label="拜访对象" width="190" height="30"></el-table-column>
			<el-table-column  prop="responsiblePerson" label="责任人" width="150"></el-table-column>
			<el-table-column  prop="surveyStartTime" label="拜访日期" sortable width="150"></el-table-column>
			<el-table-column  prop="workCategoryModel.category" label="工作任务类型" width="150"></el-table-column>
			<el-table-column  prop="feedbackCategoryModel.category" label="完成情况" width="80"></el-table-column>
			<el-table-column  prop="areaCategory.category" label="所在地区" width="80"></el-table-column>
			<el-table-column  prop="regionCategory.category" label="所在片区" width="80"></el-table-column>
		    <el-table-column  label="操作" width="100">
		      	<template slot-scope="scope">
		        	<el-button @click="handleClick(scope.row)" type="text" size="small" >查看</el-button>
		        	<el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
		      	</template>
		    </el-table-column>
		</el-table>
		<!---->
		<div class="block">
	    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1"
	      :page-size="10"
	      layout="total, prev, pager, next"
	      :total="totalNum">
	    </el-pagination>
	  </div>
	  <!--编辑页面和查看页面的子组件-->
	  <marketedit v-if="marketedit" v-on:marketedittwo="marketedittwo" :child-msg="id"></marketedit>
	  <marketsee v-if="marketsee" v-on:marketseetwo="marketseetwo" :child-msg="id"></marketsee>
	  
	</div>
</template>

<script>
	import Marketedit from '@/components/Marketedit'//引入编辑组件
	import Marketsee from '@/components/Marketsee'//引入查看组件
	export default {
	components:{
			marketedit:Marketedit,//引入编辑组件
			marketsee:Marketsee//引入查看组件
	},
    data() {
      return {
      	id:null,
      	marketedit:false,
      	marketsee:false,
      	currentPage1: 1,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        marketForm: {//用来存储v-model变量
        	surveyObject:'',
        	responsiblePerson:'',
        	workCategory:'',
        	feedbackCategory:'',
        	area:'',
        	region:'',
        	surveyStartTime:'',
        	surveyEndTime:'',
        	sort:"surveyStartTime",
        	order:"desc",
        	page:1,
        	rows:10
        },
        inputMarketForm: {//用来对接后台数据
        	surveyObject:'',
        	responsiblePerson:'',
        	workCategory:'',
        	feedbackCategory:'',
        	area:'',
        	region:'',
        	surveyStartTime:'',
        	surveyEndTime:'',
        	sort:"surveyStartTime",
        	order:"desc",
        	page:1,
        	rows:10
        },
        totalNum:0,
        workCategoryList:[],
        feedbackCategoryList:[],
        areaCategoryList:[],
        regionCategoryList:[],
        markettableData: [{
        }]
      };
    },
    created(){
    	//读取数据写入
    	var that = this;
    	this.$http.getMarketTypeinfo().then(function(data){
//  		console.log(data)
    		that.workCategoryList     = data.data.workCategoryList//任务类型
    		that.feedbackCategoryList = data.data.feedbackCategoryList//返回类型
    		that.areaCategoryList     = data.data.areaCategoryList//所在地区
    		that.regionCategoryList   = data.data.regionCategoryList//所在片区
    	})
    	
    	//钩子函数中利用formData来传值
    	var fd = new FormData();
    	fd.append("surveyObject",this.inputMarketForm.surveyObject)
    	fd.append("responsiblePerson",this.inputMarketForm.responsiblePerson)
    	fd.append("workCategory",this.inputMarketForm.workCategory)
    	fd.append("feedbackCategory",this.inputMarketForm.feedbackCategory)
    	fd.append("area",this.inputMarketForm.area)
    	fd.append("region",this.inputMarketForm.region)
    	fd.append("surveyStartTime",this.inputMarketForm.surveyStartTime)
    	fd.append("surveyEndTime",this.inputMarketForm.surveyEndTime)
    	fd.append("sort",this.inputMarketForm.sort)
    	fd.append("order",this.inputMarketForm.order)
    	fd.append("page",this.inputMarketForm.page)
    	fd.append("rows",this.inputMarketForm.rows)
    	
    	//请求接口
    	var that = this;//转译this指向
    	this.$http.getMarketList(fd).then(function(data){//fd传给后台参数。data返回的数据。
	  		that.totalNum = data.data.total;//总数
	  		var list = data.data.rows;//列表数组
	  		console.log(data)
	  		for(var i = 0; i < list.length; i++){//遍历所有的时间戳。转换成XX-XX-XX的形式赋值
				list[i].surveyStartTime = that.NumConvertUtil.formatDate2(list[i].surveyStartTime)
			}
			that.markettableData = list;//让列表数组等于后台返回的数组。
    	})

    },
    methods: {
    	edit(scope){
//  		console.log(scope.id)
    		this.marketedit = true;//点击编辑出现组件
    		this.id = scope.id;
    	},
    	handleClick(scope){
    		this.marketsee = true;//点击查看出现组件
//  		console.log(scope)
    		this.id = scope.id;
    		
    	},
    	marketseetwo(res){
    		this.marketsee = res//父组件接收子组件的信息
    	},
    	marketedittwo(res){
    		this.marketedit = res//父组件接收子组件的信息
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
	  
	//    	consolconsolee.log(date.getFullYear())
      },
      onSubmit() {
      	this.currentPage1 = 1;
      	this.inputMarketForm = JSON.parse(JSON.stringify(this.marketForm));//点击搜查时让两个对象相等，以便对接后台的对象等于数据双向绑定的对象。
	        var fd = new FormData();
	    	fd.append("surveyObject",this.inputMarketForm.surveyObject)
	    	fd.append("responsiblePerson",this.inputMarketForm.responsiblePerson)
	    	fd.append("workCategory",this.inputMarketForm.workCategory)
	    	fd.append("feedbackCategory",this.inputMarketForm.feedbackCategory)
	    	fd.append("area",this.inputMarketForm.area)
	    	fd.append("region",this.inputMarketForm.region)
	    	fd.append("surveyStartTime",this.formatDate(this.inputMarketForm.surveyStartTime))//点击查询时候修改时间的格式
	    	fd.append("surveyEndTime",this.formatDate(this.inputMarketForm.surveyEndTime))
	    	fd.append("sort",this.inputMarketForm.sort)
	    	fd.append("order",this.inputMarketForm.order)
	    	fd.append("page",1)
	    	fd.append("rows",this.inputMarketForm.rows)
	    	
	    	//请求接口
	    	var that = this;//转译this指向
	    	this.$http.getMarketList(fd).then(function(data){//fd传给后台参数。data返回的数据。
		  		that.totalNum = data.data.total;//总数
		  		var list = data.data.rows;//列表数组
	//	  		console.log(list)
		  		for(var i = 0; i < list.length; i++){//遍历所有的时间戳。转换成XX-XX-XX的形式赋值
					list[i].surveyStartTime = that.NumConvertUtil.formatDate2(list[i].surveyStartTime)
				}
				that.markettableData = list;//让列表数组等于后台返回的数组。
	    	})
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {//点击切换页面请求后台数据返回页面刷新
        console.log(`当前页: ${val}`);
//      this.inputMarketForm =null

        var fd = new FormData();
    	fd.append("surveyObject",this.inputMarketForm.surveyObject)
    	fd.append("responsiblePerson",this.inputMarketForm.responsiblePerson)
    	fd.append("workCategory",this.inputMarketForm.workCategory)
    	fd.append("feedbackCategory",this.inputMarketForm.feedbackCategory)
    	fd.append("area",this.inputMarketForm.area)
    	fd.append("region",this.inputMarketForm.region)
    	fd.append("surveyStartTime",this.formatDate(this.inputMarketForm.surveyStartTime))//点击页码时候也加入时间格式限制
    	fd.append("surveyEndTime",this.formatDate(this.inputMarketForm.surveyEndTime))
    	fd.append("sort",this.inputMarketForm.sort)
    	fd.append("order",this.inputMarketForm.order)
    	fd.append("page",val)
    	fd.append("rows",this.inputMarketForm.rows)
    	//请求接口
    	var that = this;
    	this.$http.getMarketList(fd).then(function(data){
	  		that.totalNum = data.data.total;
	  		var list = data.data.rows;
//	  		console.log(list)
	  		for(var i = 0; i < list.length; i++){//遍历所有的时间戳。转换成XX-XX-XX的形式赋值
				list[i].surveyStartTime = that.NumConvertUtil.formatDate2(list[i].surveyStartTime)
			}
			that.markettableData = list;
    	})
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
	#marketFormtopTab{
		/*max-width: 786px;*/
		margin: auto;
	}
	.el-form-item--mini{
		/*width: 80%;*/
		margin: auto;
	}
	
	#markettableData{
		max-width: 1031px;
		margin: 0 auto;
	}
	#markettracking h5{
		color:#01a8a1;
		height: 20px;
	    border-bottom: 1px solid #01a8a1;
	    text-align: left;
	    line-height: 20px;
	}
	
	/*修改文本框宽度*/
	#markettracking .el-input--mini{
		max-width: 193px!important;
		float: left;
	}

	
</style>