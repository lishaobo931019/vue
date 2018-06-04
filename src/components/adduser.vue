<template>
	<div id="adduser">
		<h5>添加用户</h5>
		<el-form ref="addPersonInfoform" :model="adduserform" label-width="80px" size="mini">
			<table id="adduserTab">
				<!--第一行-->
				<tr>
					<td>
						<el-form-item label="工号" >
				  			<el-input  :value="staffId"  readonly ></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="姓名">
				  			<el-input v-model="adduserform.name"></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!--第二行-->
				<tr>
					<td class="tipstd">
						<el-form-item label="密码">
					    	<el-input type="password" v-model="adduserform.pwd" v-validate="'required|min:6'" name="password"></el-input>
					  	</el-form-item>
					  	<span class="tipsinfo" v-show="errors.has('password')">{{ errors.first('password') }}</span>
					</td>
					<td class="tipstd">
						<el-form-item label="确认密码">
				    		<el-input type="password" v-model="adduserform.pwdConfirm" v-validate="'required|confirmed:password'" name="pwdConfirm"></el-input>
				  		</el-form-item>
				  		<span class="tipsinfo" v-show="errors.has('pwdConfirm')">两次输入的密码不一致</span>
					</td>
				</tr>
				<!--第三行-->
				<tr>
					<td  class="tipstd" >
						<el-form-item label="邮箱">
			    			<el-input v-model="adduserform.email" v-validate="'required|email'" name="email"></el-input>
			  			</el-form-item>
			  			<span class="tipsinfo" v-show="errors.has('email')">{{ errors.first('email') }}</span>
					</td>
					<td class="tipstd">
						<el-form-item label="手机号">
							<el-input v-model="adduserform.mobile" v-validate="'required|phone'" name="phone"></el-input>
			  			</el-form-item>
			  			<span class="tipsinfo" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
					</td>
				</tr>
				<!--第四行-->
				<tr>
					<td>
						<el-form-item label="所属地区" >
					    	<el-select v-model="adduserform.region" placeholder="无" >
			      				<el-option label="无" value=""></el-option>
			      				<el-option :label="item.category" :value="item.id" v-for="item in regionCategoryList"></el-option>
			   				</el-select>
						</el-form-item>
					</td>
					<td>
						<el-form-item label="所属分区">
					    	<el-select v-model="adduserform.area" placeholder="无">
			      				<el-option label="无" value=""></el-option>
			      				<el-option :label="item.category" :value="item.id" v-for="item in areaCategoryList"></el-option>
			   				</el-select>
						</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="入职时间">
					    	<el-select placeholder="无" v-model="adduserform.isDuty">
			      				<el-option label="无" value=""></el-option>
			      				<el-option label="在职" value="1"></el-option>
			      				<el-option label="离职" value="2"></el-option>
			   				</el-select>
						</el-form-item>
					</td>
					<td>
						<el-form-item label="录入人">
							<el-input></el-input>
						</el-form-item>
					</td>
				</tr>
			</table>
			
			<!---->
			<div class="text-ADDPersonInformationbox">
				<!--第五行-->
				<el-form-item label="备注" class="box">
					<el-input type="textarea"  v-model="adduserform.comment"></el-input>
				</el-form-item>
			</div>
			
			<el-form-item>
			    <el-button type="primary" @click="onSubmit">保存</el-button>
			    <el-button>取消</el-button>
			</el-form-item>
		</el-form>	
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	      	staffId:'',//工号 只读不可修改
	        adduserform: {},
	        regionCategoryList:[],
	        areaCategoryList:[]
	      }
	    },
	    methods: {
		    onSubmit() {
		    	var that = this;
		    	this.$validator.validateAll().then(function(res){
		    		if(res){
		    			console.log(res)
		    			that.adduserform.staffId = that.staffId;
		    			that.$http.UserAddUrl(that.adduserform).then(function(data){
				        	console.log(data)
				       		 //点击保存跳转到列表——成功时跳转
				    		that.$router.push({path:'usermanagement'});
				        }) .catch(function (error) {
						    console.log(error);
						});
		    		}
		    	})
		    }
	    },
	    created(){
	    	//页面刷新时只读工号不可修改
	    	var that = this;
	    	this.$http.staffIdGenerateUrl().then(function(data){
	    		console.log(data)
	    		that.staffId = data.data
	    	})
	    	
	    	this.$http.MarketSearchCategory().then(function(data){//读取两个下拉列表
	    		console.log(data)
	    		that.regionCategoryList = data.data.regionCategoryList
	    		that.areaCategoryList   = data.data.areaCategoryList
	    	})
	    }
 	 }
</script>

<style>
	
	h5{
		text-align: center;
		height: 30px;
		line-height: 30px;
		width: 100%;
	}
	/**/
	#adduserTab{
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
	/*左对齐多选框,调整多选框*/
	.el-form .box .el-checkbox-group label{
		float: left;
		width: 70px;
		margin-left: 0;
		text-align: left;		
	}
	#adduser .el-form-item .el-form-item__label{
		width:100px!important;
	}
	#adduser .el-form-item__content{
		margin-left: 100px!important;
	}
	/*给textarea写一个宽度*/
	#adduser .box textarea{
		height: 150px;
		margin-bottom: 18px;
	}
	#adduser .text-ADDPersonInformationbox{
		max-width: 643px!important;
		margin: 0 auto;
	}
	
	#adduser .el-input__inner{
		width: 220px;
	}
	
	/*下面是调整提示语的位置*/
	#adduser .tipstd{
		position: relative
	}
	#adduser .tipsinfo{
		font-size: 10px;
		color: red;
		position: absolute;
		top: 40px;
		left: 102px;
	}
	
</style>