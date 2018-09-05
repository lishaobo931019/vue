<template>
	<div id="addcontract">
		<h5>添加合同</h5>
		<el-form ref="form" :model="addcontractform" label-width="80px" size="mini">
			<table id="addcontractTab">
				<!--第一行-->
				<tr>
					<td>
						<el-form-item label="项目编号" >
				  			<el-input v-model="addcontractform.contractCode"  v-validate="'required'" name="name1"></el-input>
				  			<span class="tipsinfo" v-show="errors.has('name1')">不能为空</span>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="合同单位">
				  			<el-input v-model="addcontractform.contractCompany" v-validate="'required'" name="name2"></el-input>
				  			<span class="tipsinfo" v-show="errors.has('name2')">不能为空</span>
				  		</el-form-item>
					</td>
				</tr>
				<!--第二行-->
				<tr>
					<td>
						<el-form-item label="工程名称" >
				  			<el-input v-model="addcontractform.projectName" v-validate="'required'" name="name3"></el-input>
				  			<span class="tipsinfo" v-show="errors.has('name3')">不能为空</span>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="质保金退回时间">
				  			<el-date-picker type="date" placeholder="选择日期" v-model="addcontractform.depositBackTime" ></el-date-picker>
				  		</el-form-item>
					</td>
				</tr>
				<!---->
				<tr>
					<td>
						<el-form-item label="已施工数量" >
				  			<el-input v-model="addcontractform.completeAmount"></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="应该施工总量">
				  			<el-input v-model="totalAmount" readonly="readonly"></el-input> <!--//addcontractform.totalQuantity-->
				  		</el-form-item>
					</td>
				</tr>
				<!---->
				<tr>
					<td>
						<el-form-item label="已付款" >
				  			<el-input v-model="totalPrice" readonly="readonly"></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="合同总价">
				  			<el-input v-model="totalPrix" readonly="readonly"></el-input> <!--//addcontractform.totalPrice-->
				  		</el-form-item>
					</td>
				</tr>
				<!---->
				<tr>
					<td>
						<el-form-item label="合同预计签订时间">
					    	<el-col :span="11">
					    		<el-date-picker type="date" placeholder="选择日期" v-model="addcontractform.preSignDate"></el-date-picker>
					   	 	</el-col>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="合同签订时间">
					    	<el-col :span="11">
					    		<el-date-picker type="date" placeholder="选择日期" v-model="addcontractform.signDate"></el-date-picker>
					   	 	</el-col>
				  		</el-form-item>
					</td>
				</tr>
				<!---->
				
				<!--第三行-->
				<tr>
					<td>
						<el-form-item label="所在地区">
			    			<el-select v-model="addcontractform.area" placeholder="无">
			      				<el-option label="无" value=""></el-option>
			      				<el-option :label="item.category" :value="item.id" v-for="item in areaCategoryList" ></el-option>
			    			</el-select>
			  			</el-form-item>
					</td>
					<td>
						<el-form-item label="所在片区">
			    			<el-select v-model="addcontractform.region" placeholder="无">
			      				<el-option label="无" value=""></el-option>
			      				<el-option :label="item.category" :value="item.id" v-for="item in regionCategoryList" ></el-option>
			   				</el-select>
			  			</el-form-item>
					</td>
				</tr>
				<!--第四行-->
				<tr>
					<td>
						<el-form-item label="发票类型">
					    	<el-select v-model="addcontractform.taxCategory" placeholder="无">
			      				<el-option label="无" value=""></el-option>
			      				<el-option :label="item.category" :value="item.id" v-for="item in invoiceCategoryList" ></el-option>
			   				</el-select>
						</el-form-item>
					</td>
					<td>
						<el-form-item label="质保金总额" >
				  			<el-input v-model="addcontractform.deposit"></el-input>
				  		</el-form-item>
					</td>
				</tr>
				
			</table>
			
			<div class="text-box">
				<!--第五行-->
				<el-form-item label="开票备注" class="box">
				    <el-input type="textarea"  v-model="addcontractform.note"></el-input>
				</el-form-item>
				<!--第七行-->
				<el-form-item label="备注" class="box">
					<el-input type="textarea"  v-model="addcontractform.comment"></el-input>
				</el-form-item>
				
				
				<el-form-item label="已付款清单" id="addPerson">
				    <el-button type="primary" style="float: left;" @click="addfirst">添加清单</el-button>
				</el-form-item>
				
				
				
				<table  id="insidedata">
        					<tr >
        						<th class="firsttr" align="center" width="25%" height=20>序号</th>
		                        <th class="firsttr" align="center" width="25%" height=20>已付款金额</th>
		                        <th class="firsttr" align="center" width="25%" height=20>付款日期</th>
		                        <th class="firsttr" align="center" width="25%" height=20>操作</th>
        					</tr>
        					<tr v-for="(item,index) in arrList">
        						<td class="secondtr" align="center" width="25%" height=20 >
						  			<input type="text"  class="inpu"v-model="index" readonly="readonly"/>
        						</td>
        						<td class="secondtr" align="center" width="25%" height=20>
							  		<input type="text"  class="inpu"  v-model="item.paid"/>
        						</td>
        						
        						<td class="secondtr" align="center" width="25%" height=20>
        							<el-form-item >
								    	<el-col :span="1">
								    		<el-date-picker type="date" placeholder="选择日期" v-model="item.payTime" ></el-date-picker>
								   	 	</el-col>
						  			</el-form-item>
        						</td>
        						<td class="secondtr" align="center" width="25%" height=20>
        							<input type="button" value="删除" class="del" @click="delatetr(index)"/>
        						</td>
        					</tr>
        		</table>
				
				<!---->
				<!---->
				
				<el-form-item label="添加产品明细" id="addPerson">
				    <el-button type="primary" style="float: left;" @click="addProduct">添加清单</el-button>
				</el-form-item>
				<!---->
				<!---->
				<table  id="insidedata2">
        					<tr >
        						<th class="firsttr" align="center" width="10%" height=20>产品类型</th>
		                        <th class="firsttr" align="center" width="10%" height=20>产品单价</th>
		                        <th class="firsttr" align="center" width="10%" height=20>单位</th>
		                        <th class="firsttr" align="center" width="10%" height=20>数量</th>
		                        <th class="firsttr" align="center" width="10%" height=20>总价</th>
		                        <th class="firsttr" align="center" width="10%" height=20>操作</th>
        					</tr>
        					<tr v-for="(item,index) in arrList2" >
        						<td class="secondtr" align="center" width="10%" height=20 >
        							<select name="" v-model="item.productCategory" placeholder="无" style="width: 120px;">
        								<option :label="item.category" :value="item.id" v-for="item in productCategoryList"></option>
        							</select>	
        						</td>
        						<td class="secondtr" align="center" width="10%" height=20>
        								<input type="text"  class="inpu"v-model="item.unitPrice"/>
        						</td>
        						<td class="secondtr" align="center" width="10%" height=20>
        							<select name="" v-model="item.unit" placeholder="无" style="width: 120px;">
        								<option  :label="item.category" :value="item.id" v-for="item in priceUnitCategoryList"></option>
        							</select>	
        						</td>
        						<td class="secondtr" align="center" width="10%" height=20>
        								<input type="text"  class="inpu" v-model="item.amount"/>
        						</td>
        						
        						<td class="secondtr" align="center" width="10%" height=20>
        								<input type="text"  class="inpu" v-model="item.summation"/>
        						</td>
        						<td class="secondtr" align="center" width="10%" height=20>
        							<input type="button" value="删除" class="del" @click="deletetrProduct(index)"/>
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
	      	createDate:null,
	      	fileList: [],
	      	arrList:[{//自定义一个数组来接收数据
	        		paid:null,
	        		payTime:null,
	        }],
	        addcontractform: {},
	        areaCategoryList:[],
	        regionCategoryList:[],
	        invoiceCategoryList:[],
	        productCategoryList:[],//产品类型
	        priceUnitCategoryList:[],//单位
	        paymentList:[],//传输第一个表格
	        contractProductList:[],//传数据第二个表格的数组
	        arrList2:[{//自定义第二个表格数组
	        	amount:null,
	        	productCategory:null,
	        	summation:null,
	        	unit:null,
	        	unitPrice:null
	        }]
	      }
	    },
	    computed:{
	    	totalPrice(){ // 已付款
	    		let total = null;
	    		this.arrList.map((item)=>{
	    			if(item.paid){
	    				total = total + item.paid*1
	    			}
	    			
	    		})
	    		return total;
	    	},
	    	totalAmount(){ //施工总量
	    		let total = null;
	    		this.arrList2.map(function(item){
	    			if(item.amount){
	    				total = total + item.amount*1;
	    			}
	    		})
	    		return total;
	    	},
	    	totalPrix(){ // 合同总价
	    		let total = null;
	    		this.arrList2.map(function(item){
	    			if(item.summation){
	    				total = total + item.summation*1;
	    			}
	    		})
	    		return total;
	    	}
	    },
	    mounted(){
	    	
	    },
	    methods: {
	      addfirst(){
	      	this.arrList.push({//点击添加，往数组里面添加一个对象。
	    			paid:null,
	        		payTime:null,
	    		})
	      },
	      addProduct(){
	      	this.arrList2.push({
	      		amount:null,
	        	productCategory:null,
	        	summation:null,
	        	unit:null,
	        	unitPrice:null
	      	})
	      },
	      deletetrProduct(){
	      	if(index==0){//当点击第一行数据时，清除第一行内容
    			this.arrList2[index].amount = null;
    			this.arrList2[index].productCategory = null;
    			this.arrList2[index].summation = null;
    			this.arrList2[index].unit = null;
    			this.arrList2[index].unitPrice = null;
    			return
    		}
    		this.arrList2.splice(index,1)//点击哪一个，就从哪一个开始删除1个数组元素。
	      },
	      delatetr(index){
	      	if(index==0){//当点击第一行数据时，清除第一行内容
	    			this.arrList[index].paid = null;
	    			this.arrList[index].payTime = null;
	    			return
	    		}
	    		this.arrList.splice(index,1)//点击哪一个，就从哪一个开始删除1个数组元素。
	      },
	      onSubmit() {
	      	console.log(this.arrList)
	      	
	      	
	      	//限制条件。当表格无内容时候让数组为空
	      		for(var i = 0; i < this.arrList.length; i++){
	      			for(var key in this.arrList[i]){
	      				this.arrList[i].payTime = Date.parse(new Date(this.arrList[i].payTime))//时间最终转为字符戳
	      				if(this.arrList[i][key]){
	      					this.paymentList.push(this.arrList[i])
	      					break;
	      				}
	      			}
	      		}
	      	
	      	
	      	//限制条件。当表格无内容时候让数组为空
	      		for(var i = 0; i < this.arrList2.length; i++){
	      			for(var key in this.arrList2[i]){
	      				if(this.arrList2[i][key]){
	      					this.contractProductList.push(this.arrList2[i])
	      					break;
	      				}
	      			}
	      		}
	      	
	      	
			var that = this;
			that.addcontractform.id = this.uuid();//引入uuid唯一标识
			
			that.addcontractform.createDate = that.createDate//把数组加入对象传值
			that.addcontractform.paymentList = that.paymentList//把数组加入对象传值
			that.addcontractform.contractProductList = that.contractProductList//把数组加入对象传值
			 that.addcontractform.totalPrice=that.totalPrix //重新赋值合同总价
			 that.addcontractform.paid=that.totalPrice //重新赋值已经付款
			 that.addcontractform.totalQuantity=that.totalAmount //重新赋值施工总量
			
			
	        this.$validator.validateAll().then(function(res){//固定用法格式
		    		if(res){
		    			console.log(res)
		    			that.addcontractform.depositBackTime = Date.parse(new Date(that.addcontractform.depositBackTime))//时间最终转为字符戳
						that.addcontractform.signDate = Date.parse(new Date(that.addcontractform.signDate))//时间最终转为字符戳
						that.addcontractform.preSignDate = Date.parse(new Date(that.addcontractform.preSignDate))//时间最终转为字符戳
		    			
		    			
		    			that.$http.ContractAddUrl(that.addcontractform).then(function(data){
							console.log(data)
							that.$router.push({path:'contractlist'});
						}).catch(function (error) {
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
	    	this.$http.allCategory().then(function(data){//读取后台数据下拉列表
	    		console.log(data)
	    		that.areaCategoryList = data.data.areaCategoryList
	    		that.regionCategoryList = data.data.regionCategoryList
	    		that.invoiceCategoryList = data.data.invoiceCategoryList
	    		that.productCategoryList = data.data.productCategoryList;
	    		that.priceUnitCategoryList = data.data.priceUnitCategoryList;
	    	})
	    }
 	 }
</script>

<style>
	
	h5{
		color:#01a8a1;
		height: 20px;
	    border-bottom: 1px solid #01a8a1;
	    text-align: left;
	    line-height: 20px;
	}
	/**/
	#addcontractTab{
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
	#addcontract .el-form .box .el-form-item--mini{
		width: 50%;
		margin: auto;
		margin:30px auto;
		
	}
	/*左对齐多选框,调整多选框*/
	#addcontract .el-form .box .el-checkbox-group label{
		float: left;
		width: 70px;
		margin-left: 0;
		text-align: left;		
	}
	#addcontract .el-form-item .el-form-item__label{
		width:130px!important;
	}
	#addcontract .el-form-item__content{
		margin-left: 130px!important;
	}
	/*给textarea写一个宽度*/
	#addcontract .box textarea{
		height: 150px;
		margin-bottom: 18px;
	}
	#addcontract .text-box{
		max-width: 706px!important;
		margin: 0 auto;
	}
	
	/*调整label宽度，使其文字在一行*/
	#addcontract .el-input__inner{
		width: 220px;
	}
	/*添加文件添加margin*/
	#addcontract .upload-demo{
		margin-top: 30px;
	}
	
	/*添加清单的表格样式*/
	#addcontract #insidedata{
		margin: auto;
		margin-top: 10px;
		margin-bottom: 10px;
		margin-left: 26px;
		width: 300px;
		border-collapse:collapse;
		border: 1px solid #ebeef5;
		font-size: 14px;
   		color: #606266;
	}
	#addcontract #insidedata .firsttr{
		background: #fff;
	}
	#addcontract #insidedata td{
		border: 1px solid #ebeef5;
	}
	#addcontract #insidedata .inpu{
		width: 210px;
		height: 23px;
		border-radius: 4px;
		border: 1px solid #D3DCE6;
	}
	#addcontract #insidedata .del{
		width: 50px;
		height: 23px;
		background: #01a8a1;
		border: none;
		color: #FFFFFF;
		border: 1px solid ##409EFF;
		font-size: 12px;
	}
	/*下面调整添加清单中的margin问题*/
	#insidedata .el-form-item__content{
		margin:0!important
	}
	/**/
	/*添加清单的表格样式2*/
	#addcontract #insidedata2{
		margin: auto;
		margin-top: 10px;
		margin-bottom: 10px;
		margin-left: 26px;
		width: 100%;
		border-collapse:collapse;
		border: 1px solid #ebeef5;
		font-size: 14px;
   		color: #606266;
	}
	#addcontract #insidedata2 .firsttr{
		background: #fff;
	}
	#addcontract #insidedata2 td{
		border: 1px solid #ebeef5;
	}
	#addcontract #insidedata2 .inpu{
		width: 129px;
		border: 1px solid #D3DCE6;
	}
	#addcontract #insidedata2 .del{
		width: 50px;
		background: #01a8a1;
		border: none;
		color: #FFFFFF;
		font-size: 12px;
	}
	/*下面调整添加清单中的margin问题*/
	#insidedata2 .el-form-item__content{
		margin:0!important
	}
	/*提示*/
	#addcontract .tipsinfo{
		font-size: 10px;
		color: red;
		position: absolute;
		top: 30px;
		left: 3px;
	}
	
	
	#addcontract .el-button--small{
		color:white !important;
	}
</style>