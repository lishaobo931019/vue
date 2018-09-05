<template>
	<div id="">
		<div id="marketedit">
			<input ref="fileCategory" type="hidden" value="market">   <!--ref标识表示市场页面-->
			<table cellSpacing="1" cellPadding="5" width="680" align="center" bgColor="#eeeeee" style="border:1px solid #8ba7e3" border="0">
		        <tr>
		            <td align="center" colSpan="4" bgColor="#f5fafe">
		                <font face="宋体" size="2"><strong>添加新的市场跟踪报告</strong></font>
		            </td>
		        </tr>
		<!---->
		        <tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">拜访对象:</td>
		            <td bgColor="#ffffff">
		                <input type="text" id="surveyObject" required v-model="surveyObject" v-validate="'required'" name="name1">
		                <span class="tipsinfo" v-show="errors.has('name1')">不能为空</span>
		            </td>
		            <td  align="center" bgColor="#f5fafe" class="ta_01">责任人:</td>
		            <td bgColor="#ffffff">
		                <input type="text"  id="responsiblePerson" required v-model="responsiblePerson" v-validate="'required'" name="name2">
		                 <span class="tipsinfo" v-show="errors.has('name2')">不能为空</span>
		            </td>
		        </tr>
		        <tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">任务类型:</td>
		            <td bgColor="#ffffff">
		
		                <select id="workCategory" name="workCategory" required style="width:170px" v-model="workCategoryModel">
		                    <option  :label="item.category" :value="item.id" v-for="item in workCategoryList" ></option>
		                </select>
		
		            </td>
		            <td align="center" bgColor="#f5fafe" class="ta_01" >反馈类型:</td>
		            <td bgColor="#ffffff">
		
		                <select id="feedbackCategory" name="feedbackCategory" required style="width:170px" v-model="feedbackCategoryModel">
		                    <option :label="item.category" :value="item.id" v-for="item in feedbackCategoryList" ></option>
		                </select>
		            </td>
		        </tr>
		
		        <tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">地区:</td>
		            <td  bgColor="#ffffff">
		                <select id="area" name="area" required style="width:170px" v-model="areaCategory">
		                    <option :label="item.category" :value="item.id" v-for="item in areaCategoryList"></option>
		                </select>
		            </td>
		
		            <td align="center" bgColor="#f5fafe" class="ta_01">片区:</td>
		            <td bgColor="#ffffff">
		                <select id="region" name="region" required style="width:170px" v-model="regionCategory">
		                    <option :label="item.category" :value="item.id" v-for="item in regionCategoryList" ></option>
		                </select>
		            </td>
		
		        </tr>
		
		        <tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">拜访起始时间:</td>
		            <td bgColor="#ffffff">
		                <input type="date" id="surveyStartTime"  required v-model="surveyStartTime">
		            </td>
		
		            <td align="center" bgColor="#f5fafe" class="ta_01">拜访天数:</td>
		            <td  bgColor="#ffffff">
		                <input type="text"  id="surveyDays" required v-model="surveyDays" v-validate="'required'" name="name4">
		                 <span class="tipsinfo" v-show="errors.has('name4')">不能为空</span>
		            </td>
		        </tr>
		
		        <tr>
		            <td  align="center" bgColor="#f5fafe">任务内容:</td>
		            <td  bgColor="#ffffff" colSpan="3">
		                <textarea id="workContent" name="workContent" placeholder="请输入任务内容" cols="80%"  rows="8" required v-model="workContent"></textarea>
		            </td>
		        </tr>
		        <tr>
		            <td  align="center" bgColor="#f5fafe">反馈情况:</td>
		            <td  bgColor="#ffffff" colSpan="3">
		                <textarea id="feedback" name="feedback" placeholder="请输入反馈情况" cols="80%"  rows="8" required v-model="feedback"></textarea>
		            </td>
		        </tr>
		
		        <tr>
		            <td  align="center" bgColor="#f5fafe">备注:</td>
		            <td  bgColor="#ffffff" colSpan="3">
		                <textarea id="comment" name="comment" placeholder="请输入备注" cols="80%"  rows="8" required v-model="comment"></textarea>
		            </td>
		        </tr>
		
		        <tr>
		        	<td  align="center" bgColor="#f5fafe">调查人:</td>
		        	<td bgColor="#ffffff" colSpan="3">
			        	<el-form ref="form"  :model="trackform" label-width="10px" size="mini">
			            	<el-form-item class="box">
							    <el-checkbox-group v-model="checkbox">
							        <el-checkbox :label="item.info.name" value="item.info.id"  :checked="item.checked" name="type" v-for="item in namelist" ></el-checkbox>
								</el-checkbox-group>
							</el-form-item>
						</el-form>
		        	</td>
		        </tr>
		
		
		        <tr>
			        	<td lclass="ta_01" bgColor="#f5fafe" colSpan="4">
			        		<el-row >
  								<el-button type="primary" @click="tijiao">提交</el-button>
  								<el-button @click="cancel">关闭</el-button>
							</el-row>
			        	</td>
			    </tr>

   			</table>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Marketedit",
		data(){
			return{
				trackform: {},
				checkbox:[],
				namelist:[],
				userid:[],
				intorid:[],
				id:[],
				//拿取后台接口显示
				surveyObject:null,
				responsiblePerson:null,
				workCategoryModel:null,
				feedbackCategoryModel:null,
				areaCategory:null,
				regionCategory:null,
				surveyStartTime:null,
				surveyDays:null,
		        workContent:null,
		        feedback:null,
		        comment:null,
				responsiblePerson:null,
				files:null,
				//
				//下拉列表
				workCategoryList:[],
	       		regionCategoryList:[],
	        	feedbackCategoryList:[],
	        	areaCategoryList:[],
	        	//
	        	//
	        	postform:{}
			}
		},
		props: ['childMsg'],//子组件接收父组件传来的参
		methods:{
			cancel(){//关闭按钮
		      	this.$emit('marketedittwo',false)//子组件传给父组件的参数
		    },
		    tijiao(){
		    	var that = this;
		    	that.postform.surveyObject = that.surveyObject
		    	that.postform.responsiblePerson = that.responsiblePerson
		    	that.postform.workCategory = that.workCategoryModel
		    	that.postform.feedbackCategory = that.feedbackCategoryModel
		    	that.postform.area = that.areaCategory
		    	that.postform.region = that.regionCategory
		    	that.postform.surveyStartTime = that.surveyStartTime
		    	that.postform.surveyDays = that.surveyDays
		    	that.postform.workContent = that.workContent
		    	that.postform.feedback = that.feedback
		    	that.postform.comment = that.comment
    			
				that.postform.id = that.childMsg;//引入uuid唯一标识
		       
		       	that.postform.surveyStartTime = Date.parse(new Date(that.postform.surveyStartTime)).toString()//时间最终转为字符戳
    			
    			var idList = [];//定义空数组
			       for(var j = 0; j < this.checkbox.length; j++){//遍历两个数组
			       		for(var i = 0; i < this.namelist.length; i++){
				       		if(this.checkbox[j] == this.namelist[i].info.name){//当勾选的联系人和接口返回的联系人相等时候，追加一个uuid
				       			idList.push(this.namelist[i].info.id)
				       		}
				        }
			    }
		     	that.postform.investigators = idList;//调查人
    			
    			
    			
    			
    			 this.$validator.validateAll().then(function(res){//固定用法格式
		    		if(res){
		    			console.log(res)
		    			that.$http.updateMarketUrl(that.postform).then(function(data){
				        	console.log(data)
				       		 //点击保存跳转到列表——成功时跳转
				       		  window.location.reload()//重新加载页面
				        }) .catch(function (error) {
						    console.log(error);
						});
		    		}
		    	})
    			 
    			 
    			 
    			 //
		    }
		},
		created(){
			var that = this;
			console.log(this.childMsg)//获取到父组件传来的数据
			this.id = this.childMsg
			
			var fd = new FormData();
			fd.append("id",this.id)
			this.$http.marketDetail(fd).then(function(data){
				console.log(data)
				that.surveyObject          = data.data.surveyObject
				that.responsiblePerson     = data.data.responsiblePerson
				that.workCategoryModel 	   = data.data.workCategoryModel.id
				that.feedbackCategoryModel = data.data.feedbackCategoryModel.id
				that.areaCategory          = data.data.areaCategory.id
				that.regionCategory        = data.data.regionCategory.id
				that.surveyStartTime       = data.data.surveyStartTime
				that.surveyStartTime       = that.NumConvertUtil.formatDate2(that.surveyStartTime)//时间格式转变
				that.surveyDays            = data.data.surveyDays
				that.workContent           = data.data.workContent
				that.feedback              = data.data.feedback
				that.comment               = data.data.comment;
				that.responsiblePerson      = data.data.responsiblePerson;
				that.files                 = data.data.files
				var idlist                   =data.data.investigatorList//被选中的调查人
				
				
				for(var i = 0 ; i<idlist.length;i++){
					that.id = idlist[i].user.id 
					that.intorid.push(idlist[i].user.id)//给自定义的数组添加所有选中调查人的ID
				}
				
				//
					//调查人接口
				that.$http.Investigator().then(function(data){//把调查人接口放在编辑接口中处理异步加载的问题
	//	    		that.namelist = data.data;
		    		
		    		that.userid = data.data.id
		    		var useridlist = data.data
		    		for(var i = 0;i<useridlist.length;i++){
		    			that.userid = useridlist[i].id
		    			
		    			var obj = {}//自定义空对象
		    			obj.info = useridlist[i]//把调查人赋值给info属性
		    			
		    			if(contains(that.intorid,useridlist[i].id)){
		    				obj.checked = true
	                	}else{
	                		obj.checked = false
	                	}
	                	that.namelist.push(obj)
		    		}
	//	    			console.log(that.namelist)
		    		
		    		function contains(arr, obj) {
				            for (var i = 0;i<arr.length;i++) {
				                if (arr[i] === obj) {
				                    return true;
				                }
				            }
				            return false;
				        }
		    	})
				
			})
			
			
			
			
		
			
			
			
			
	    	this.$http.MarketSearchCategory().then(function(data){//读取四个下拉列表的书籍
//	    		console.log(data)
	    		that.areaCategoryList = data.data.areaCategoryList
	    		that.feedbackCategoryList = data.data.feedbackCategoryList
	    		that.regionCategoryList = data.data.regionCategoryList
	    		that.workCategoryList = data.data.workCategoryList
	    	})
			
			
			
		}
	}
</script>

<style>
	#marketedit{
		width: 50%;
		position: absolute;
		top: 120px;
		border: 1px solid #333333;
		background: #E9EEF3;
		height: 500px;
		padding: 10px;
		overflow: auto;
	}
	.el-checkbox{
		float: left!important;
		width: 50px;
	}
	#surveyStartTime{
		width: 170px;
		height: 19px;
	}
	#marketedit td{
		position: relative;
	}
	#marketedit .tipsinfo{
		font-size: 10px;
		color: red;
		position: absolute;
		top: 36px;
		left: 40px;
	}
	#marketedit textarea::-webkit-input-placeholder{
        color:red;
    }
    #marketedit textarea::-moz-placeholder{   /* Mozilla Firefox 19+ */
        color:red;
    }
    #marketedit textarea:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
        color:red;
    }
    #marketedit textarea:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
        color:red;
    }
</style>