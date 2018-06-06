<template>
	<div id="addBiddingMarket">
		<h5>添加招投标管理信息</h5>
		<el-form ref="form" :model="addBiddingform" label-width="80px" size="mini">
			<table id="addBiddingMarketTab">
				<!--第一行-->
				<tr>
					<td>
						<el-form-item label="招标单位" >
				  			<el-input v-model="addBiddingform.bidCompany" v-validate="'required'" name="name1"></el-input>
				  			<span class="tipsinfo" v-show="errors.has('name1')">不能为空</span>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="招标项目名称">
				  			<el-input  v-model="addBiddingform.bidProject"  v-validate="'required'" name="name2"></el-input>
				  			<span class="tipsinfo" v-show="errors.has('name2')">不能为空</span>
				  		</el-form-item>
					</td>
				</tr>
				<!--第二行-->
				<tr>
					<td>
						<el-form-item label="招标数量" >
				  			<el-input v-model="addBiddingform.bidAmount"></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!---->
				<tr>
					<td>
						<el-form-item label="招标时间">
				  			<el-date-picker type="date" placeholder="选择日期" v-model="addBiddingform.bidTime" v-validate="'required'" name="date"></el-date-picker>
				  			<span class="tipsinfo" v-show="errors.has('date')">不能为空</span>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="审核状态" >
				  			<el-select v-model="addBiddingform.status" placeholder="无">
			      				<el-option label="无" value=""></el-option>
			      				<el-option :label="item.category" :value="item.id" v-for="item in bidAuditCategoryList"></el-option>
			    			</el-select>
				  		</el-form-item>
					</td>
				</tr>
				
				<!--第三行-->
				<tr>
					<td>
						<el-form-item label="所在地区">
			    			<el-select v-model="addBiddingform.area" placeholder="无" >
			      				<el-option label="无" value=""></el-option>
			      				<el-option :label="item.category" :value="item.id" v-for="item in areaCategoryList"></el-option>
			    			</el-select>
			  			</el-form-item>
					</td>
					<td>
						<el-form-item label="所在片区">
			    			<el-select v-model="addBiddingform.region" placeholder="无">
			      				<el-option label="无" value=""></el-option>
			      				<el-option :label="item.category" :value="item.id" v-for="item in regionCategoryList"></el-option>
			   				</el-select>
			  			</el-form-item>
					</td>
				</tr>
				<!--第四行-->
				
			</table>
			
			<div class="text-box-addBidding">
				<!--第五行-->
				<el-form-item label="备注" class="box">
				    <el-input type="textarea"  v-model="addBiddingform.comment"></el-input>
				</el-form-item>
				<!--第七行-->
				<el-form-item label="招标总结" class="box">
					<el-input type="textarea"  v-model="addBiddingform.bidSummary"></el-input>
				</el-form-item>
				
				<el-form-item label="包号清单" id="addPerson">
				    <el-button type="primary" style="float: left;" @click="addlist">添加清单</el-button>
				</el-form-item>
				<!---->
				<!---->
				<table  id="insidedata">
        					<tr >
        						<th class="firsttr" align="center" width="16.66%" height=20>包号</th>
		                        <th class="firsttr" align="center" width="16.66%" height=20>产品类型</th>
		                        <th class="firsttr" align="center" width="16.66%" height=20>数量</th>
		                        <th class="firsttr" align="center" width="16.66%" height=20>单位</th>
		                        <th class="firsttr" align="center" width="16.66%" height=20>中标单位</th>
		                        <th class="firsttr" align="center" width="16.66%" height=20>中标价格</th>
		                        <th class="firsttr" align="center" width="16.66%" height=20>操作</th>
        					</tr>
        					<tr v-for="(item,index) in arrList">
        						<td class="secondtr" align="center" width="16.66%" height=20 >
        							<input type="text" class="inpu" v-model="item.pkgNum"/>
        						</td>
        						<td class="secondtr" align="center" width="16.66%" height=20>
        							<select class="inpu" v-model="item.productCategory">
        								<option :value="item.id" :label="item.category" v-for="item in productCategoryList"></option>
        							</select>
        						</td>
        						
        						<td class="secondtr" align="center" width="16.66%" height=20>
        							<input type="text"  class="inpu" v-model="item.amount"/>
        						</td>
        						<td class="secondtr" align="center" width="16.66%" height=20>
        							<select class="inpu" v-model="item.unit">
        								<option :value="item.id" :label="item.category" v-for="item in priceUnitCategoryList"></option>
        							</select>
        						</td>
        						<td class="secondtr" align="center" width="16.66%" height=20>
        							<input type="text"  class="inpu" v-model="item.bidder"/>
        						</td>
        						<td class="secondtr" align="center" width="16.66%" height=20>
        							<input type="text"  class="inpu" v-model="item.tenderPrice"/>
        						</td>
        						<td class="secondtr" align="center" width="16.66%" height=20>
        							<input type="button" value="删除" class="del" @click="delatetr(index)"/>
        						</td>
        					</tr>
        				</table>
				
			</div>		
				
				<el-form-item>
				    <el-button type="primary" @click="onSubmit">保存</el-button>
				    <el-button>取消</el-button>
				</el-form-item>

		</el-form>
		<!--添加附件-->
			<el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
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
		      	listshow:0,
		      	fileList: [],
		        addBiddingform: {},
	        	areaCategoryList:[],
	       	 	regionCategoryList:[],
	        	bidAuditCategoryList:[],
	        	productCategoryList:[],
	        	priceUnitCategoryList:[],
	        	bidPkgList:[],
	        	arrList:[{//自定义一个数组来接收数据
	        		pkgNum:null,
	        		amount:null,
	        		bidder:'',
	        		productCategory:null,
	        		tenderPrice:null,
	        		unit:null
	        		
	        	}]
	      }
	    },
	    methods: {
	    	addlist(){
	    		this.arrList.push({//点击添加，往数组里面添加一个对象。
	    			pkgNum:null,
	        		amount:null,
	        		bidder:'',
	        		productCategory:null,
	        		tenderPrice:null,
	        		unit:null
	    		})
	    	},
	    	delatetr(index){
	    		if(index==0){//当点击第一行数据时，清除第一行内容
	    			this.arrList[index].pkgNum = null;
	    			this.arrList[index].amount = null;
	    			this.arrList[index].bidder = '';
	    			this.arrList[index].productCategory = null;
	    			this.arrList[index].tenderPrice = null;
	    			this.arrList[index].unit = null;
	    			return
	    		}
	    		this.arrList.splice(index,1)//点击哪一个，就从哪一个开始删除1个数组元素。
	    	},
	      	onSubmit() {
	      		
	      		var that = this;
	      		that.bidPkgList = that.arrList//让自定义数组和接口数组相等
	      		that.addBiddingform.bidPkgList = that.bidPkgList
	      		
	        	that.addBiddingform.id = this.uuid();//引入uuid唯一标识
	        	that.addBiddingform.bidTime = Date.parse(new Date(that.addBiddingform.bidTime))//时间最终转为字符戳
	        	this.$validator.validateAll().then(function(res){//固定用法格式
		    		if(res){
		    			console.log(res)
		    			that.$http.bidAddUrl(that.addBiddingform).then(function(data){
				        	console.log(data)
				       		 //点击保存跳转到列表——成功时跳转
				    		that.$router.push({path:'Biddinglist'});
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
	    		this.$http.allCategory().then(function(data){//向后台拿取下拉列表数据
//	    		console.log(data)
	    		that.areaCategoryList = data.data.areaCategoryList
	    		that.regionCategoryList = data.data.regionCategoryList
	    		that.bidAuditCategoryList = data.data.bidAuditCategoryList
	    		that.productCategoryList = data.data.productCategoryList
	    		that.priceUnitCategoryList = data.data.priceUnitCategoryList
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
	#addBiddingMarketTab{
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
	#addBiddingMarket .el-form .box .el-form-item--mini{
		width: 50%;
		margin: auto;
		margin:30px auto;
		
	}
	/*左对齐多选框,调整多选框*/
	#addBiddingMarket .el-form .box .el-checkbox-group label{
		float: left;
		width: 70px;
		margin-left: 0;
		text-align: left;		
	}
	#addBiddingMarket .el-form-item .el-form-item__label{
		width:100px!important;
	}
	#addBiddingMarket .el-form-item__content{
		margin-left: 100px!important;
	}
	/*给textarea写一个宽度*/
	#addBiddingMarket .box textarea{
		height: 150px;
		margin-bottom: 18px;
	}
	#addBiddingMarket .text-box-addBidding{
		max-width: 646px!important;
		margin: 0 auto;
	}
	#addBiddingMarket .el-select--mini{
		width:220px
	}
	#addBiddingMarket .upload-demo{
		margin: auto;
		margin-top: 80px;
	}
	
	
	#addBiddingMarket #insidedata{
		margin-top: 10px;
		margin-bottom: 10px;
		width: 100%;
		border-collapse:collapse;
		border: 1px solid #ebeef5;
		font-size: 14px;
   		color: #606266;
	}
	#addBiddingMarket #insidedata .firsttr{
		background: #fff;
	}
	#addBiddingMarket #insidedata td{
		border: 1px solid #ebeef5;
	}
	#addBiddingMarket #insidedata .inpu{
		width: 100px;
		border: 1px solid #D3DCE6;
	}
	#addBiddingMarket #insidedata .del{
		width: 50px;
		background: #409EFF;
		border: none;
		color: #FFFFFF;
		font-size: 12px;
	}
	
	
	/*下面是调整提示语的位置*/
	#addBiddingMarket .tipstd{
		position: relative
	}
	#addBiddingMarket .tipsinfo{
		font-size: 10px;
		color: red;
		position: absolute;
		top: 30px;
		left: 3px;
	}
	
</style>