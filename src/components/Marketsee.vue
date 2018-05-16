<template>
	<div id="zhezhaoceng">
		<div id="marketsee">
   			 <input ref="fileCategory" type="hidden" value="market">
			<h5>市场跟踪报告
				<span id="cancel" @click="cancel">
					关闭
				</span>
			</h5>
			
			<table cellSpacing="1" cellPadding="5" width="680" align="center" bgColor="#eeeeee" style="border:1px solid #8ba7e3" border="0">
	        	<tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">拜访对象:</td>
		            <td class="ta_01" bgColor="#ffffff">{{surveyObject}}</td>
		            <td align="center" bgColor="#f5fafe" class="ta_01">责任人:</td>
		            <td class="ta_01" bgColor="#ffffff">{{responsiblePerson}}</td>
	       		</tr>
	       		<tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">任务类型:</td>
		            <td class="ta_01" bgColor="#ffffff">{{workCategoryModel}}</td>
		            <td align="center" bgColor="#f5fafe" class="ta_01">反馈类型:</td>
		            <td class="ta_01" bgColor="#ffffff">{{feedbackCategoryModel}}</td>
	       		</tr>
	       		<tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">地区:</td>
		            <td class="ta_01" bgColor="#ffffff">{{areaCategory}}</td>
		            <td align="center" bgColor="#f5fafe" class="ta_01">片区:</td>
		            <td class="ta_01" bgColor="#ffffff">{{regionCategory}}</td>
	       		</tr>
	       		<tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">拜访起止时间:</td>
		            <td class="ta_01" bgColor="#ffffff">{{surveyStartTime}}</td>
		            <td align="center" bgColor="#f5fafe" class="ta_01">拜访天数:</td>
		            <td class="ta_01" bgColor="#ffffff">{{surveyDays}}</td>
	       		</tr>
	       		<tr>
		            <td class="ta_01" align="center" bgColor="#f5fafe">任务内容:</td>
		            <td class="ta_01" bgColor="#ffffff" colSpan="3">
		                <div style="height: 100px"  id="workContent">{{workContent}}</div>
		            </td>
		        </tr>
		        <tr>
		            <td class="ta_01" align="center" bgColor="#f5fafe">反馈情况:</td>
		            <td class="ta_01" bgColor="#ffffff" colSpan="3">
		                <div style="height: 100px" id="feedback">{{feedback}}</div>
		            </td>
		        </tr>
		        <tr>
		            <td class="ta_01" align="center" bgColor="#f5fafe">备注:</td>
		            <td class="ta_01" bgColor="#ffffff" colSpan="3">
		                <div style="height: 100px" id="comment">{{comment}}</div>
		            </td>
		        </tr>
		
		        <tr>
		        	<td class="ta_01" align="center" bgColor="#f5fafe">信息汇总</td>
		            <td  colSpan="4"   align="left" bgColor="#f5fafe">
		                <!--<span id="" v-for="item in files"></span>-->
		                <div v-for="item in files">
			                <span>{{item}}</span>
			                <a href="javascript:void(0)">下载</a>
			                <a href="javascript:void(0)" @click="yulan(item)">预览</a>
		                </div>
		            </td>
		        </tr>
		        <tr>
		            <td class="ta_01" align="center" bgColor="#f5fafe">调查人</td>
		            <td  colSpan="3"  align="left,center" bgColor="#f5fafe">
		                <span style="margin-right: 10px;" id="" v-for="item in investigatorList">{{item.user.name}}</span>
		            </td>
		        </tr>
			</table>
		</div>
		<!--<div id="zhezhaoceng"></div>-->
	</div>
</template>

<script>
	export default{
		name:'Marketsee',
		 data() {
		      return {
		      	id:null,
		      	fileCategory:null,
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
				investigatorList:null,
				files:null
		      }
	    },
	    props: ['childMsg'],//子组件接收父组件传来的参
	    methods: {
		      onSubmit() {
		        console.log('submit!');
		      },
		      cancel(){
		      	this.$emit('marketseetwo',false)
		      },
		      yulan(item){
           		var category = this.$refs.fileCategory.value//获取dom节点——ref的用法
//         		console.log(item)//名字
//         		console.log(this.id)//id
//         		console.log(category)//value标识
            	var url = null;
             	url = this.$http.previewFileUrl + category +"/" +this.id +"/" +item;
            	window.open (url,"newWindow","height=500, width=800, toolbar =no, menubar=no, scrollbars=yes, resizable=yes, location=no, status=no");
		      }
	    },
	    created(){
	    	var that = this;
			console.log(this.childMsg)//获取到父组件传来的数据
			var id = this.childMsg
			
			this.$http.getMarketdetail(id).then(function(data){//请求数据
				console.log(data)
			that.id                    =data.data.id;	
			that.surveyObject          = data.data.surveyObject;
			that.responsiblePerson     = data.data.responsiblePerson;
			that.workCategoryModel     = data.data.workCategoryModel.category;
			that.feedbackCategoryModel = data.data.feedbackCategoryModel.category
			that.areaCategory          = data.data.areaCategory.category
			that.regionCategory        = data.data.regionCategory.category
			that.surveyStartTime       = data.data.surveyStartTime
			that.surveyStartTime       = that.NumConvertUtil.formatDate2(that.surveyStartTime)//时间格式转变
			that.surveyDays            = data.data.surveyDays
			that.workContent           = data.data.workContent
			that.feedback              = data.data.feedback
			that.comment               = data.data.comment;
			that.investigatorList      = data.data.investigatorList;
			that.files                 = data.data.files
				
			})
			
			
	    }
	}
</script>

<style>
	#zhezhaoceng{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0);
		position: fixed;
		top: 0;
	}
	#marketsee{
		width: 50%;
		position: absolute;
		top: 120px;
		border: 1px solid #333333;
		background: #E9EEF3;
		height: 500px;
		padding: 10px;
		overflow: auto;
	}
	#marketsee h5{
		position: relative;
		width: 680px;
		height: 10px;
		text-align: center;
		line-height: 5px;
		/*border-bottom: 1px solid #000000;*/
	}
	#marketsee table .ta_01{
		height: 10px;
		width: 100px;
		text-align: left;
	}
	#cancel{
		position: absolute;
		top: 0;
		right: 10px;
		color: red;
		cursor: pointer;
	}
</style>