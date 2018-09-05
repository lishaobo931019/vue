<template>
	<div id="contracteditzhezhaoceng">
		<div id="contractedit">
					<form id="contractForm" method="post">
					
					    <input id="id" type="hidden" name="id" value="">
					    <input id="fileCategory" type="hidden" value="contract">
					    <br>
					    <table id="contractfirst" cellSpacing="1" cellPadding="5" width="680" align="center" bgColor="#eeeeee" style="border:1px solid #8ba7e3" border="0">
					
					        <tr>
					            <td align="center" colSpan="4">
					                <font face="宋体" size="2"><strong>添加合同</strong></font>
					            </td>
					        </tr>
					        
					        <tr>
					            <td align="center" bgColor="#f5fafe">项目编号:</td>
					            <td class="tipsbiaozhun" bgColor="#ffffff">
					                <input id="contractCode"  v-model="contractCode"  v-validate="'required'" name="name1">
					                <span class="tipsinfo" v-show="errors.has('name1')">不能为空</span>
					            </td>
					            <td align="center" bgColor="#f5fafe">合同单位：</td>
					            <td class="tipsbiaozhun" bgColor="#ffffff">
					                <input id="contractCompany" v-model="contractCompany" v-validate="'required'" name="name2">
					                <span class="tipsinfo" v-show="errors.has('name2')">不能为空</span>
					            </td>
					        </tr>
					        
					         <tr>
					            <td align="center" bgColor="#f5fafe" class="ta_01">工程名称</td>
					            <td class="tipsbiaozhun" bgColor="#ffffff">
					                <input id="projectName"   v-model="projectName" v-validate="'required'" name="name4">
					                 <span class="tipsinfo" v-show="errors.has('name4')">不能为空</span>
					            </td>
					            <td align="center" bgColor="#f5fafe" class="ta_01">质保金退回时间：</td>
					            <td  bgColor="#ffffff">
					                <input id="unitPrice"  type="date" style="width: 170px;" v-model="depositBackTime" >
					            </td>
					        </tr>
					      
							 <tr>
					            <td align="center" bgColor="#f5fafe" class="ta_01">已施工数量：</td>
					            <td   bgColor="#ffffff">
					                <input id="completeAmount"   v-model="completeAmount" >
					            </td>
					            <td align="center" bgColor="#f5fafe" class="ta_01">应该施工总量：</td>
					            <td bgColor="#ffffff">
					                <input id="totalQuantity" name="totalQuantity" v-model="totalAmount" readonly="readonly">
					            </td>
					        </tr>
					
					        <tr>
					            <td align="center" bgColor="#f5fafe" class="ta_01">已付款：</td>
					            <td  bgColor="#ffffff">
					                <input id="totalPaid"  name="paid" v-model="Alreadypaidearly" readonly="readonly">
					            </td>
					            <td align="center" bgColor="#f5fafe" class="ta_01">合同总价：</td>
					            <td bgColor="#ffffff">
					                <input id="totalPrice" name="totalPrice"  v-model="totalPrix" readonly="readonly">
					            </td>
					        </tr>
					        
					        <tr>
					            <td align="center" bgColor="#f5fafe" class="ta_01">合同预计签订时间：</td>
					            <td  bgColor="#ffffff">
					                <input id="totalPaid"  type="date" style="width: 170px;" v-model="preSignDate" v-validate="'required'" name="name1">
					            </td>
					            <td align="center" bgColor="#f5fafe" class="ta_01">合同签订时间：</td>
					            <td  bgColor="#ffffff">
					                <input id="totalPrice"   type="date" style="width: 170px;" v-model="signDate" v-validate="'required'" name="name1">
					            </td>
					        </tr>
					        
					         <tr>
					            <td align="center" bgColor="#f5fafe" class="ta_01">质保金总额：</td>
					            <td  bgColor="#ffffff">
					                <input id="deposit"  v-model="deposit" >
					            </td>
					            <td colspan="2" align="center" bgColor="#f5fafe" class="ta_01"></td>
					        </tr>

					        <tr>
					            <td align="center" bgColor="#f5fafe">地区:</td>
					            <td  bgColor="#ffffff">
					                <select id="area" name="area" style="width: 170px;" v-model="areaCategoryModel">
					                     <option  :label="item.category" :value="item.id" v-for="item in areaCategoryList"></option>
					                </select>
					            </td>
					
					            <td align="center" bgColor="#f5fafe">片区:</td>
					            <td bgColor="#ffffff">
					                <select id="region" name="region" style="width: 170px;" v-model="regionCategoryModel">
					                    <option  :label="item.category" :value="item.id" v-for="item in regionCategoryList"></option>
					                </select>
					            </td>
					        </tr>
					        
					        <tr>
					            <td align="center" bgColor="#f5fafe">发票类型:</td>
					            <td  bgColor="#ffffff">
					                <select id="taxCategory" name="taxCategory" style="width: 170px;" v-model="invoiceCategoryModel">
					                    <option  :label="item.category" :value="item.id" v-for="item in invoiceCategoryList"></option>
					                </select>
					            </td>
					            <td colspan="2" align="center" bgColor="#f5fafe"></td>
					        </tr>
					        
					        <tr>
					            <td align="center" bgColor="#f5fafe">开票备注:</td>
					            <td bgColor="#ffffff" colSpan="3">
					                <textarea id="note" name="note" placeholder="开票备注" cols="80%"  rows="8" v-model="note"></textarea>
					            </td>
					        </tr>
					
					
					        <tr>
					            <td align="center" bgColor="#f5fafe">备注：</td>
					            <td bgColor="#ffffff" colSpan="3">
					                <textarea id="comment" name="comment" placeholder="请输入备注" cols="80%"  rows="8" v-model="comment"></textarea>
					            </td>
					        </tr>
					    </table>
						
							
						<!--第二个表格-->					    
					    <!---->
					    
					    
					    <el-form ref="form" :model="addcontractformedit" label-width="100px" size="mini" id="addcontractformedit">
						    <el-form-item label="已付款清单" id="addPerson">
							    <el-button type="primary" style="float: left;" @click="addfirst">添加清单</el-button>
							</el-form-item>
					    	<table  id="insidedataedit">
	        					<tr >
	        						<th class="firsttr" align="center" width="25%" height=20>序号</th>
			                        <th class="firsttr" align="center" width="25%" height=20>已付款金额</th>
			                        <th class="firsttr" align="center" width="25%" height=20>付款日期</th>
			                        <th class="firsttr" align="center" width="25%" height=20>操作</th>
	        					</tr>
	        					<tr v-for="(item,index) in arrList">
	        						<td class="secondtr" align="center" width="25%" height=20 >
							  			<input type="text"  class="inpu" readonly="readonly" v-model="index"/>
	        						</td>
	        						<td class="secondtr" align="center" width="25%" height=20>
								  		<input type="text"  class="inpu" v-model="item.paid" v-validate="'required'" name="name3"/>
	        						</td>
	        						
	        						<td class="secondtr" align="center" width="25%" height=20>
	        							<input type="date" style="width: 173px;" v-model="item.payTime">
	        						</td>
	        						<td class="secondtr" align="center" width="25%" height=20>
	        							<input type="button" value="删除" class="del" @click="delatetr(index)"/>
	        						</td>
	        					</tr>
	        				</table>
					    
							
							
							<el-form-item label="添加产品明细" id="addPerson">
				    			<el-button type="primary" style="float: left;" @click="addProduct">添加清单</el-button>
							</el-form-item>
						
							<table  id="insidedataedit2">
			        					<tr >
			        						<th class="firsttr" align="center" width="10%" height=20>产品类型</th>
					                        <th class="firsttr" align="center" width="10%" height=20>产品单价</th>
					                        <th class="firsttr" align="center" width="10%" height=20>单位</th>
					                        <th class="firsttr" align="center" width="10%" height=20>数量</th>
					                        <th class="firsttr" align="center" width="10%" height=20>总价</th>
					                        <th class="firsttr" align="center" width="10%" height=20>操作</th>
			        					</tr>
			        					<tr v-for="(item,index) in arrList2">
			        						<td class="secondtr" align="center" width="10%" height=20 >
			        							<select name=""  placeholder="无" class="inpu" v-model="item.productCategory">
			        								<option  :label="item.category" :value="item.id" v-for="item in productCategoryList"></option>
			        							</select>	
			        						</td>
			        						<td class="secondtr" align="center" width="10%" height=20>
			        								<input type="text"  class="inpu" v-model="item.unitPrice" v-validate="'required'" name="name3"/>
			        								<span class="tipsinfos" v-show="errors.has('name3')">不能为空</span>
			        						</td>
			        						<td class="secondtr" align="center" width="10%" height=20>
			        							<select name=""  placeholder="无" class="inpu" v-model="item.unit">
			        								<option  :label="item.category" :value="item.id" v-for="item in priceUnitCategoryList"></option>
			        							</select>	
			        						</td>
			        						<td class="secondtr" align="center" width="10%" height=20>
			        								<input type="text"  class="inpu" v-model="item.amount" v-validate="'required'" name="name3"/>
			        						</td>
			        						
			        						<td class="secondtr" align="center" width="10%" height=20>
			        								<input type="text"  class="inpu" v-model="item.summation" v-validate="'required'" name="name3"/>
			        								
			        						</td>
			        						<td class="secondtr" align="center" width="10%" height=20>
			        							<input type="button" value="删除" class="del" @click="deletetrProduct(index)"/>
			        						</td>
			        					</tr>
			        		</table>
					    </el-form>
					    <!---->
					    <!---->
					    <!---->
					    
					        		<el-row >
					        			<el-button type="primary" @click="tijiao">提交</el-button>
		  								<el-button  @click="close">关闭</el-button>
									</el-row>
					    
					</form>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				id:null,
				addcontractformedit: {},
				arrList:[],
				arrList2:[],
				areaCategoryList:[],//地区
	        	regionCategoryList:[],//片区
	        	invoiceCategoryList:[],//发票类型
	        	productCategoryList:[],//产品类型
	        	priceUnitCategoryList:[],//单位
	        	contractCode:null,//项目编号
	        	contractCompany:null,
	        	projectName:null,
	        	depositBackTime:null,//质保金退回时间
	        	completeAmount:null,//已施工数量
	        	totalQuantity:null,
	        	paid:null,
	        	totalPrice:null,
	        	preSignDate:null,//合同预计签约时间
	        	signDate:null,//签约时间
	        	deposit:null,//质保金总额
	        	areaCategoryModel:null,//地区
	        	regionCategoryModel:null,//片区
	        	invoiceCategoryModel:null,//发票
	        	note:null,
	        	comment:null,//备注
	        	postcontractform:{},//向后台传输数据的自定义对象
	        	paymentList:null,//第一个表单
	        	contractProductList:null,//第二个表单
	        	
	        	
	        	Alreadypaid:null//已付款
	        	
			}
		},
		props: ['childMsg'],//子组件接收父组件传来的参
		methods:{
			addfirst(){//添加第一个表格
		      	this.arrList.push({//点击添加，往数组里面添加一个对象。
		    			paid:null,
		        		payTime:null,
		    		})
	      	},
	      	delatetr(index){//删除第一个表格
		    		this.arrList.splice(index,1)//点击哪一个，就从哪一个开始删除1个数组元素。
	      	},
	      	addProduct(){//添加第二个表格
		      	this.arrList2.push({
		      		amount:null,
		        	productCategory:null,
		        	summation:null,
		        	unit:null,
		        	unitPrice:null
		      	})
		    },
	      	deletetrProduct(index){//删除第二个表格
    			this.arrList2.splice(index,1)//点击哪一个，就从哪一个开始删除1个数组元素。
	      	},
			close(){//关闭按钮
		      	this.$emit('contractedit2',false)//子组件传给父组件的参数
		    },
		    tijiao(){//提交
		    	var that = this;
		    	that.postcontractform.contractCode        = that.contractCode
				that.postcontractform.contractCompany     = that.contractCompany
				that.postcontractform.projectName         = that.projectName
				that.postcontractform.depositBackTime     = that.depositBackTime
				that.postcontractform.depositBackTime     =  Date.parse(new Date(that.postcontractform.depositBackTime)).toString()//时间最终转为字符戳
				that.postcontractform.completeAmount      = that.completeAmount
				that.postcontractform.totalQuantity       = that.totalQuantity
				that.postcontractform.paid                = that.paid
				that.postcontractform.totalPrice          = that.totalPrice
				that.postcontractform.preSignDate         = that.preSignDate
				that.postcontractform.preSignDate         = Date.parse(new Date(that.postcontractform.preSignDate)).toString()//时间最终转为字符戳
				that.postcontractform.signDate            = that.signDate
				that.postcontractform.signDate            = Date.parse(new Date(that.postcontractform.signDate)).toString()//时间最终转为字符戳
				that.postcontractform.deposit             = that.deposit
				that.postcontractform.area    		      = that.areaCategoryModel
				that.postcontractform.region              = that.regionCategoryModel
				that.postcontractform.taxCategory         = that.invoiceCategoryModel
				that.postcontractform.note                = that.note
				that.postcontractform.comment             = that.comment
				that.postcontractform.paymentList         = that.paymentList
				that.postcontractform.contractProductList = that.contractProductList
				that.postcontractform.id                  = that.childMsg;//引入uuid唯一标识
				that.postcontractform.createDate          = that.createDate//把数组加入对象传值
    			
    			//遍历数组更改时间格式
	      		for(var i = 0; i < that.arrList.length; i++){
	      				that.arrList[i].payTime = Date.parse(new Date(that.arrList[i].payTime))//时间最终转为字符戳
	      		}
		       	//第二个数组
		       	for(var i = 0; i < that.contractProductList.length; i++){
	      				that.postcontractform.amount = that.contractProductList[i].amount
	      				that.postcontractform.summation = that.contractProductList[i].summation
	      		}
		       	
		       	that.postcontractform.paid=that.Alreadypaidearly //重新赋值已经付款
		       	that.postcontractform.totalQuantity=that.totalAmount //重新赋值施工总量
		       	that.postcontractform.totalPrice=that.totalPrix //重新赋值合同总价
		       	
		       	
		       	//表单验证
		       	
		       	this.$validator.validateAll().then(function(res){//固定用法格式
		    		if(res){
		    			console.log(res)
		    			that.$http.ContractUpdateUrl(that.postcontractform).then(function(data){
				        	console.log(data)
				       		 //点击保存跳转到列表——成功时跳转
				       		  window.location.reload()//重新加载页面
				        }) .catch(function (error) {
						    console.log(error);
						});
		    		}
		    	})
		       	

		       	
		    }
		},
		computed:{
			Alreadypaidearly(){ // 已付款
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
		created(){
				var that = this;
				var id = this.childMsg;
				console.log(this.childMsg)
				
				this.$http.ContractdetailUrl(id).then(function(data){//页面刷新时展示的数据
					console.log(data)
					that.contractCode = data.data.contractCode
					that.contractCompany = data.data.contractCompany
					that.projectName = data.data.projectName
					that.depositBackTime = data.data.depositBackTime
					that.depositBackTime = that.NumConvertUtil.formatDate2(that.depositBackTime)//时间格式转变
					that.completeAmount = data.data.completeAmount
					that.totalQuantity = data.data.totalQuantity
					that.paid = data.data.paid
					that.totalPrice = data.data.totalPrice
					that.preSignDate = data.data.preSignDate
					that.preSignDate = that.NumConvertUtil.formatDate2(that.preSignDate)//时间格式转变
					that.signDate = data.data.signDate
					that.signDate = that.NumConvertUtil.formatDate2(that.signDate)//时间格式转变
					that.deposit = data.data.deposit
					that.areaCategoryModel = data.data.areaCategoryModel.id
					that.regionCategoryModel = data.data.regionCategoryModel.id
					that.invoiceCategoryModel = data.data.invoiceCategoryModel.id
					that.note = data.data.note
					that.comment = data.data.comment
					
					that.paymentList  = data.data.paymentList//第一个表单
					that.contractProductList  = data.data.contractProductList//第二个表单
					
					that.paymentList.payTime  = data.data.paymentList.payTime
					
					that.arrList = that.paymentList//自定义数组接收第一个表单
					that.arrList2 = that.contractProductList//自定义数组接收第2个表单
					
					
					
					
					
					//自定义接收paytime这个时间循环遍历来更改时间格式				
					var paymentList = that.paymentList
					for(var i=0;i <paymentList.length;i++){
						paymentList[i].payTime = that.NumConvertUtil.formatDate2(paymentList[i].payTime)//时间格式转变
						console.log(paymentList[i].payTime)
					}
				})

				
	    		this.$http.allCategory().then(function(data){//向后台拿取下拉列表数据
	//	    		console.log(data)
		    		that.areaCategoryList = data.data.areaCategoryList
		    		that.regionCategoryList = data.data.regionCategoryList
		    		that.bidAuditCategoryList = data.data.bidAuditCategoryList//投or不投
		    		that.productCategoryList = data.data.productCategoryList
		    		that.priceUnitCategoryList = data.data.priceUnitCategoryList
		    		that.invoiceCategoryList = data.data.invoiceCategoryList
				})
	    }
	}
</script>

<style>
	/*遮罩层*/
	#contracteditzhezhaoceng{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0);
		position: fixed;
		top: 0;
	}
	#contractedit{
		width: 50%;
		position: absolute;
		top: 120px;
		border: 1px solid #333333;
		background: #E9EEF3;
		height: 500px;
		padding: 10px;
		overflow: auto;
	}
	/*下面的表单*/
	#addcontractformedit{
		width: 680px;
		margin: auto;
		margin-top:30px;
	}
	
	#contractedit #insidedataedit{
		width: 100%;
		margin: auto;
		margin-bottom: 10px;
		border: 1px solid rgb(139, 167, 227);
		font-size: 14px;
   		color: #606266;
   		background:#f5fafe ;
	}
	#contractedit #insidedataedit .inpu{
		height: 17px;
	}
	#contractedit #insidedataedit .del{
		width: 120px;
		height: 23px;
		background: #01a8a1;
		border: none;
		color: #FFFFFF;
		border: 1px solid ##409EFF;
		font-size: 12px;
		cursor: pointer;
	}
	#contractedit #insidedataedit2{
		width: 100%;
		margin: auto;
		margin-bottom: 10px;
		border: 1px solid rgb(139, 167, 227);
		font-size: 14px;
   		color: #606266;
   		background:#f5fafe ;
	}
	#contractedit #insidedataedit2 .inpu{
		width: 120px;
	}
	#contractedit #insidedataedit2 .del{
		background: #01a8a1;
		border: none;
		color: #FFFFFF;
		border: 1px solid ##409EFF;
		font-size: 12px;
		cursor: pointer;
	}
	
	/*提示*/
	
	#contractfirst .tipsbiaozhun{
		position: relative;
	}
	
	#contractedit .tipsinfo{
		font-size: 10px;
		color: red;
		position: absolute;
		top: 9px;
		left: 24px;
	}
	#insidedataedit2{
		position: relative;
	}
	#insidedataedit2 .tipsinfos{
		font-size: 10px;
		color: red;
		position: absolute;
		top: 78px;
		left: 8px;
	}
</style>