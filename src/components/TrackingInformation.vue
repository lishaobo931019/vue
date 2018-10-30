<template>
	<div id="trackmarketinfo">
		<h5>添加新的市场跟踪报告</h5>
		<el-form ref="form" :model="trackform" label-width="80px" size="mini">
			<table id="trackformTab">
				<!--第一行-->
				<tr>
					<td>
						<el-form-item label="拜访对象" >
				  			<el-input v-model="trackform.surveyObject" v-validate="'required'" name="name1"></el-input>
				  			<span class="tipsinfo" v-show="errors.has('name1')">不能为空</span>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="责任人">
				  			<el-input v-model="trackform.responsiblePerson" v-validate="'required'" name="name2"></el-input>
				  			<span class="tipsinfo" v-show="errors.has('name2')">不能为空</span>
				  		</el-form-item>
					</td>
				</tr>
				<!--第二行-->
				<tr>
					<td>
						<el-form-item label="任务类型">
					    	<el-select v-model="trackform.workCategory" placeholder="无" style="width:220px"  v-validate="'required'" name="name3">
					      		<el-option label="无" value=""></el-option>
					      		<el-option :label="item.category" :value="item.id" v-for="item in workCategoryList"></el-option>
					    	</el-select>
					    	<span class="tipsinfo" v-show="errors.has('name3')">不能为空</span>
					  	</el-form-item>
					</td>
					<td>
						<el-form-item label="反馈类型">
				    		<el-select v-model="trackform.feedbackCategory" placeholder="无"  v-validate="'required'" name="name4">
				      			<el-option label="无" value=""></el-option>
				      			<el-option :label="item.category" :value="item.id" v-for="item in feedbackCategoryList"></el-option>
				    		</el-select>
				    		<span class="tipsinfo" v-show="errors.has('name4')">不能为空</span>
				  		</el-form-item>
					</td>
				</tr>
				<!--第三行-->
				<tr>
					<td>
						<el-form-item label="所在地区">
			    			<el-select v-model="trackform.area" placeholder="无" style="width:220px"  v-validate="'required'" name="name5">
			      				<el-option label="无" value=""></el-option>
			      				<el-option :label="item.category" :value="item.id" v-for="item in areaCategoryList"></el-option>
			    			</el-select>
			    			<span class="tipsinfo" v-show="errors.has('name5')">不能为空</span>
			  			</el-form-item>
					</td>
					<td>
						<el-form-item label="所在片区">
			    			<el-select v-model="trackform.region" placeholder="无"  v-validate="'required'" name="name6">
			      				<el-option label="无" value=""></el-option>
			      				<el-option :label="item.category" :value="item.id" v-for="item in regionCategoryList"></el-option>
			   				</el-select>
			   				<span class="tipsinfo" v-show="errors.has('name6')">不能为空</span>
			  			</el-form-item>
					</td>
				</tr>
				<!--第四行-->
				<tr>
					<td>
						<el-form-item label="调查时间">
					    	<el-col :span="11" >
					    		<el-date-picker type="date" placeholder="选择日期" v-model="trackform.surveyStartTime" ></el-date-picker>
					   	 	</el-col>
					   	 	<!--<span class="tipsinfo" v-show="errors.has('name7')">不能为空</span>-->
						</el-form-item>
					</td>
					<td>
						<el-form-item label="拜访天数" >
				  			<el-input v-model="trackform.surveyDays" v-validate="'required'" name="name8"></el-input>
				  			<span class="tipsinfo" v-show="errors.has('name8')">不能为空</span>
				  		</el-form-item>
					</td>
				</tr>
				
			</table>
			
			<div class="text-box">
				<!--第五行-->
				<el-form-item label="任务内容" class="box">
				    <el-input type="textarea"  v-model="trackform.workContent" v-validate="'required'" name="name9"></el-input>
				    <span class="tipsinfo1" v-show="errors.has('name9')">不能为空</span>
				</el-form-item>
				<!--第六行-->
				<el-form-item label="反馈情况" class="box">
					<el-input type="textarea"  v-model="trackform.feedback" v-validate="'required'" name="name10"></el-input>
					<span class="tipsinfo1" v-show="errors.has('name10')">不能为空</span>
				</el-form-item>
				<!--第七行-->
				<el-form-item label="备注" class="box">
					<el-input type="textarea"  v-model="trackform.comment" v-validate="'required'" name="name11"></el-input>
					<span class="tipsinfo1" v-show="errors.has('name11')">不能为空</span>
				</el-form-item>
				
				<el-form-item label="调查人" class="box">
				    <el-checkbox-group v-model="checkbox">
				        <el-checkbox :label="item.name" value="item.id" name="type" v-for="item in namelist"></el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				
				<!--<el-form-item label="添加联系人" id="addPerson">
				    <el-button type="primary" style="float: left;">添加联系人</el-button>
				</el-form-item>-->
				
			</div>		
				
				<el-form-item>
				    <el-button type="primary" @click="onSubmit">保存</el-button>
				    <el-button>取消</el-button>
				</el-form-item>

		</el-form>
		<!--添加附件-->
		<!--添加附件-->
			<el-upload class="upload-demo" ref="upload"
		  action="https://jsonplaceholder.typicode.com/posts/"
		  :on-preview="handlePreview"
		  :on-remove="handleRemove"
		  :file-list="fileList"
		  :auto-upload="false">
		  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
		  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
		</el-upload>
		
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	      	id:'',
	      	checkbox:[],
	      	namelist:[],
	      	fileList: [],
	        trackform: {},
	        workCategoryList:[],
	        regionCategoryList:[],
	        feedbackCategoryList:[],
	        areaCategoryList:[]
//	        contactsList:[]//新建联系人
	      }
	    },
	    methods: {
	      onSubmit() {
		       var that = this;
		       
		       var idList = [];//定义空数组
		       for(var j = 0; j < this.checkbox.length; j++){//遍历两个数组
		       		for(var i = 0; i < this.namelist.length; i++){
			       		if(this.checkbox[j] == this.namelist[i].name){//当勾选的联系人和接口返回的联系人相等时候，追加一个uuid
			       			idList.push(this.namelist[i].id)
			       		}
			        }
		       }
		       console.log(idList)
		     	that.trackform.investigators = idList;//调查人
//		     	that.trackform.contactsList = that.contactsList
				that.trackform.id = that.uuid();//引入uuid唯一标识
		       
		       that.trackform.surveyStartTime = Date.parse(new Date(that.trackform.surveyStartTime)).toString()//时间最终转为字符戳
		       
		       
		       
		       this.$validator.validateAll().then(function(res){//固定用法格式
		    		if(res){
		    			console.log(res)
		    			that.$http.SaveMarketUrl(that.trackform).then(function(data){
				        	console.log(data)
				       		 //点击保存跳转到列表——成功时跳转
				    		that.$router.push({path:'marketTracking'});
				        }) .catch(function (error) {
						    console.log(error);
						});
		    		}
		    	})
		       
	      },
	      submitUpload() {
	        	this.$refs.upload.submit();
	      },
	      handleRemove(file, fileList) {
	        	console.log(file, fileList);
	      },
	      handlePreview(file) {
	        	console.log(file);
	      }
	    },
	    created(){
	    	var that = this;
	    	this.$http.MarketSearchCategory().then(function(data){//读取四个下拉列表的书籍
//	    		console.log(data)
	    		that.areaCategoryList = data.data.areaCategoryList
	    		that.feedbackCategoryList = data.data.feedbackCategoryList
	    		that.regionCategoryList = data.data.regionCategoryList
	    		that.workCategoryList = data.data.workCategoryList
	    	})
	    	//
	    	this.$http.Investigator().then(function(data){
	    		console.log(data)
	    		that.namelist = data.data;
	    	})
	    }
 	 }
</script>

<style>
	#trackmarketinfo h5{
		color:#01a8a1;
		height: 20px;
	  border-bottom: 1px solid #01a8a1;
	  text-align: left;
	  line-height: 20px;
	}
	/**/
	#trackformTab{
		/*width: 50%;*/
		margin: auto;
	}
	/*选择框左对齐*/
	.el-form-item__content .el-select--mini{
		float: left;
	}
	/*修改label的位置*/
	.el-form-item__label{
		margin-top:4px;
	}
	/*修改行距*/
	.el-form .el-form-item{
		margin: 0;
	}
	/*表格居中*/
	.el-table__header,.el-table__body{
		margin: auto;
	}
	/**/
	/*area框设置*/
	.el-form .box .el-form-item--mini{
		width: 50%;
		margin: auto;
		margin:30px auto;
		
	}
	/*左对齐多选框,调整多选框*/
	#trackmarketinfo .el-form .box .el-checkbox-group label{
		float: left;
		width: 70px;
		margin-left: 0;
		text-align: left;		
	}
	#trackmarketinfo .el-form-item .el-form-item__label{
		width:100px!important;
	}
	#trackmarketinfo .el-form-item__content{
		margin-left: 100px!important;
	}
	/*给textarea写一个宽度*/
	#trackmarketinfo .box textarea{
		height: 150px;
		margin-bottom: 18px;
	}
	#trackmarketinfo .text-box{
		max-width: 620px!important;
		margin: 10px auto;
	}
	
	/*添加文件添加margin*/
	#trackmarketinfo .upload-demo{
		margin-top: 30px;
	}
	
	/*下面是调整提示语的位置*/
	#trackmarketinfo .tipstd{
		position: relative
	}
	#trackmarketinfo .tipsinfo{
		font-size: 10px;
		color: red;
		position: absolute;
		top: 30px;
		left: 3px;
	}
	#trackmarketinfo .tipsinfo1{
		font-size: 10px;
		color: red;
		position: absolute;
		top: 145px;
		left: 3px;
	}
	#trackmarketinfo .el-button--small{
		color:white !important;
	}
</style>