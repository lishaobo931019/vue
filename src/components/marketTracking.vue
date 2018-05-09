<template>
	<div>
		<el-form ref="form" :model="marketForm" label-width="80px" size="mini">
			<table id="marketFormtopTab">
				<!--第一行-->
				<tr>
					<td>
						<el-form-item label="拜访对象" v-model="marketForm.surveyObject">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="责任人" v-model="marketForm.responsiblePerson">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!--第二行-->
				<tr>
					<td>
						<el-form-item label="任务类型">
					    	<el-select v-model="marketForm.workCategory" placeholder="无">
					      		<el-option label="区域一" value="shanghai"></el-option>
					      		<el-option label="区域二" value="beijing"></el-option>
					    	</el-select>
					  	</el-form-item>
					</td>
					<td>
						<el-form-item label="返回类型">
				    		<el-select v-model="marketForm.feedbackCategory" placeholder="无">
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
			    			<el-select v-model="marketForm.area" placeholder="无">
			      				<el-option label="区域一" value="shanghai"></el-option>
			      				<el-option label="区域二" value="beijing"></el-option>
			    			</el-select>
			  			</el-form-item>
					</td>
					<td>
						<el-form-item label="所在片区">
			    			<el-select v-model="marketForm.region" placeholder="无">
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
					    		<el-date-picker type="date" placeholder="选择日期" v-model="marketForm.surveyStartTime" style="width: 100%;"></el-date-picker>
					   	 	</el-col>
					    	<el-col class="line" :span="1">-</el-col>
					    	<el-col :span="11">
					    		<el-date-picker type="date" placeholder="选择日期" v-model="marketForm.surveyEndTime" style="width: 100%;"></el-date-picker>
					    	</el-col>
						</el-form-item>
					</td>
					<td>
						
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
	
		<el-table :data="markettableData" id="markettableData" border >
			<el-table-column  prop="surveyObject" label="拜访对象" width="190" height="30"></el-table-column>
			<el-table-column  prop="responsiblePerson" label="责任人" width="150"></el-table-column>
			<el-table-column  prop="surveyStartTime" label="拜访日期" sortable width="150"></el-table-column>
			<el-table-column  prop="workCategoryModel.category" label="工作任务类型" width="150"></el-table-column>
			<el-table-column  prop="feedbackCategoryModel.category" label="完成情况" width="80"></el-table-column>
			<el-table-column  prop="areaCategory.category" label="所在地区" width="80"></el-table-column>
			<el-table-column  prop="regionCategory.category" label="所在片区" width="80"></el-table-column>
		    <el-table-column  label="操作" width="100">
		      	<template slot-scope="scope">
		        	<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
		        	<el-button type="text" size="small">编辑</el-button>
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
	</div>
</template>

<script>
	export default {
    data() {
      return {
      	currentPage1: 1,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        marketForm: {
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
        markettableData: [{
        }]
      };
    },
    created(){
    	//钩子函数中利用formData来传值
    	var fd = new FormData();
    	fd.append("surveyObject",this.marketForm.surveyObject)
    	fd.append("responsiblePerson",this.marketForm.responsiblePerson)
    	fd.append("workCategory",this.marketForm.workCategory)
    	fd.append("feedbackCategory",this.marketForm.feedbackCategory)
    	fd.append("area",this.marketForm.area)
    	fd.append("region",this.marketForm.region)
    	fd.append("surveyStartTime",this.marketForm.surveyStartTime)
    	fd.append("surveyEndTime",this.marketForm.surveyEndTime)
    	fd.append("sort",this.marketForm.sort)
    	fd.append("order",this.marketForm.order)
    	fd.append("page",this.marketForm.page)
    	fd.append("rows",this.marketForm.rows)
    	
    	//请求接口
    	var that = this;
    	this.$http.getMarketList(fd).then(function(data){
	  		
	  		that.totalNum = data.data.total;
	  		var list = data.data.rows;
	  		console.log(list)
	  		for(var i = 0; i < list.length; i++){//遍历所有的时间戳。转换成XX-XX-XX的形式赋值
				list[i].surveyStartTime = that.NumConvertUtil.formatDate2(list[i].surveyStartTime)
			}
			that.markettableData = list;
    	})

    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {//点击切换页面请求后台数据返回页面刷新
        console.log(`当前页: ${val}`);
        var fd = new FormData();
    	fd.append("surveyObject",this.marketForm.surveyObject)
    	fd.append("responsiblePerson",this.marketForm.responsiblePerson)
    	fd.append("workCategory",this.marketForm.workCategory)
    	fd.append("feedbackCategory",this.marketForm.feedbackCategory)
    	fd.append("area",this.marketForm.area)
    	fd.append("region",this.marketForm.region)
    	fd.append("surveyStartTime",this.marketForm.surveyStartTime)
    	fd.append("surveyEndTime",this.marketForm.surveyEndTime)
    	fd.append("sort",this.marketForm.sort)
    	fd.append("order",this.marketForm.order)
    	fd.append("page",val)
    	fd.append("rows",this.marketForm.rows)
    	//请求接口
    	var that = this;
    	this.$http.getMarketList(fd).then(function(data){
	  		
	  		that.totalNum = data.data.total;
	  		var list = data.data.rows;
	  		console.log(list)
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
		max-width: 1106px;
		margin: 0 auto;
	}
	
	
</style>