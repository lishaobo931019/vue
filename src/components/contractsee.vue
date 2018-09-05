<template>
	<div id="contractseezhezhaoceng">
		<div id="contractsee">
			<input ref="fileCategory" type="hidden" value="contract">   <!--ref标识表示市场页面-->
			<h5>
			</h5>
			<table cellSpacing="1" cellPadding="5" width="680" align="center" bgColor="#eeeeee" style="border:1px solid #8ba7e3" border="0">
		
		        <tr>
		            <td align="center" colSpan="4">
		                <font face="宋体" size="2"><strong>添加合同</strong></font>
		            </td>
		        </tr>
		        <tr>
		            <td align="center" bgColor="#f5fafe">合同编号:</td>
		            <td bgColor="#ffffff">{{contractCode}}</td>
		            <td width="18%" align="center" bgColor="#f5fafe" class="ta_01">合同单位：</td>
		            <td bgColor="#ffffff">{{contractCompany}}</td>
		        </tr>
		        <tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">工程名称：</td>
		            <td  bgColor="#ffffff">{{projectName}}</td>
		            <td align="center" bgColor="#f5fafe" class="ta_01">质保金退回时间:</td>
		            <td bgColor="#ffffff">{{depositBackTime}}</td>
		        </tr>
		
		        <tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">已施工数量：</td>
		            <td  bgColor="#ffffff">{{completeAmount}}</td>
		            <td align="center" bgColor="#f5fafe" class="ta_01">应该施工总量：</td>
		            <td bgColor="#ffffff">{{totalQuantity}}</td>
		        </tr>
		
		        <tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">已付款：</td>
		            <td  bgColor="#ffffff">{{paid}}</td>
		            <td align="center" bgColor="#f5fafe" class="ta_01">合同总价：</td>
		            <td bgColor="#ffffff">{{totalPrice}}</td>
		        </tr>
		
		        <tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">质保金总额：</td>
		            <td  bgColor="#ffffff">{{deposit}}</td>
		            <td align="center" bgColor="#f5fafe" class="ta_01">合同签订时间：</td>
		            <td bgColor="#ffffff">{{signDate}}</td>
		        </tr>
		
		
		        <tr>
		            <td align="center" bgColor="#f5fafe">地区:</td>
		            <td  bgColor="#ffffff">{{areaCategoryModel}}</td>
		
		            <td align="center" bgColor="#f5fafe">片区:</td>
		            <td bgColor="#ffffff">{{regionCategoryModel}}</td>
		
		        </tr>
		
		        <tr>
		            <td align="center" bgColor="#f5fafe">发票类型:</td>
		            <td  bgColor="#ffffff">{{invoiceCategoryModel}}</td>
		
		            <td align="center" bgColor="#f5fafe"></td>
		            <td bgColor="#ffffff">
		                <!--<p id="productCategory"></p>-->
		            </td>
		
		        </tr>
		
		        <tr>
		            <td align="center" bgColor="#f5fafe">开票备注：</td>
		            <td bgColor="#ffffff" colSpan="3">
		                <div style="height: 100px" id="note">
		                	{{note}}
		                </div>
		            </td>
		        </tr>
		
		
		        <tr>
		            <td align="center" bgColor="#f5fafe">备注：</td>
		            <td bgColor="#ffffff" colSpan="3">
		                <div style="height: 100px" id="comment">
		                	{{comment}}
		                </div>
		            </td>
		        </tr>
		
		        <tr>
		        	<td align="center" bgColor="#f5fafe"></td>
		            <td  colSpan="4"   align="left" bgColor="#f5fafe">
		                <div v-for="item in files">
			                <span>{{item}}</span>
			                <a href="javascript:void(0)" @click="download(item)">下载</a>
			                <a href="javascript:void(0)" @click="yulan(item)">预览</a>
		                </div>
		            </td>
		        </tr>
				
				<!---->
				<tr>
        			<td  colspan="4" style="width: 100%" align="center" bgColor="#f5fafe">
        				<table  id="insidedata">
        					<tr >
        						<th class="firsttr" align="center" width="20%" height=20>序号</th>
		                        <th class="firsttr" align="center" width="20%" height=20>已付款金额</th>
		                        <th class="firsttr" align="center" width="20%" height=20>付款日期</th>
        					</tr>
        					<tr v-for="(item,index) in paymentList">
        						<td class="secondtr" align="center" width="20%" height=20>{{index}}</td>
        						<td class="secondtr" align="center" width="20%" height=20>{{item.paid}}</td>
        						<td class="secondtr" align="center" width="20%" height=20>{{item.payTime}}</td>
        					</tr>
        				
        				</table>
        			</td>
        		</tr>
				
				
				
				
				
				<!---->
				<tr>
            		<td align="center" bgColor="#f5fafe">产品明细：</td>
          		 	<td colSpan="3"   align="left" bgColor="#f5fafe">
           			</td>
        		</tr>
        		
        		<tr>
        			<td  colspan="4" style="width: 100%" align="center" bgColor="#f5fafe">
        				<table  id="insidedata">
        					<tr >
        						<th class="firsttr" align="center" width="20%" height=20>产品类型</th>
		                        <th class="firsttr" align="center" width="20%" height=20>产品单价</th>
		                        <th class="firsttr" align="center" width="20%" height=20>单位</th>
		                        <th class="firsttr" align="center" width="20%" height=20>数量</th>
		                        <th class="firsttr" align="center" width="20%" height=20>总价</th>
        					</tr>
        					<tr v-for="item in contractProductList">
        						<td class="secondtr" align="center" width="20%" height=20>{{item.productCategoryModel.category}}</td>
        						<td class="secondtr" align="center" width="20%" height=20>{{item.unitPrice}}</td>
        						<td class="secondtr" align="center" width="20%" height=20>{{item.priceUnitCategoryModel.category}}</td>
        						<td class="secondtr" align="center" width="20%" height=20>{{item.amount}}</td>
        						<td class="secondtr" align="center" width="20%" height=20>{{item.summation}}</td>
        					</tr>
        				
        				</table>
        			</td>
        		</tr>
        		<tr>
			        	<td lclass="ta_01" bgColor="#f5fafe" colSpan="4">
			        		<el-row >
  								<el-button type="primary" @click="close">关闭</el-button>
							</el-row>
			        	</td>
			    </tr>
        		
		    </table>
		   
		    			
		    
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				id:'',
				contractCode: '',
	          	contractCompany: '',
	          	projectName: '',
	          	depositBackTime:'',
	          	completeAmount:'',
	          	totalQuantity:'',
	          	paid:'',
	          	totalPrice:'',
	          	deposit:'',
	          	signDate:'',
	          	areaCategoryModel:'',
	          	regionCategoryModel:'',
	          	invoiceCategoryModel:'',
	          	note:'',
	          	comment:'',
	          	files:'',
	          	trProductTable:[],
	          	contractProductList:{},
	          	paymentList:{}
			}
		},
		created(){
			console.log(this.childMsg)
			var id = this.childMsg;
			var that = this
			this.$http.ContractdetailUrl(id).then(function(data){//读取后台数据 显示，一对一赋值
				console.log(data)
				that.id= data.data.id
				that.contractCode = data.data.contractCode
				that.contractCompany = data.data.contractCompany
				that.projectName = data.data.projectName
				that.depositBackTime = data.data.depositBackTime
				that.depositBackTime = that.NumConvertUtil.formatDate2(that.depositBackTime)//时间格式转变
				that.completeAmount = data.data.completeAmount
				that.totalQuantity = data.data.totalQuantity
				that.paid = data.data.paid
				that.totalPrice = data.data.totalPrice
				that.deposit = data.data.deposit
				that.signDate = data.data.signDate
				that.signDate = that.NumConvertUtil.formatDate2(that.signDate)//时间格式转变
				that.areaCategoryModel = data.data.areaCategoryModel.category
				that.regionCategoryModel = data.data.regionCategoryModel.category
				that.invoiceCategoryModel = data.data.invoiceCategoryModel.category
				that.note = data.data.note
				that.comment = data.data.comment
				that.files = data.data.files
				that.contractProductList  = data.data.contractProductList
				that.paymentList  = data.data.paymentList
				that.paymentList.payTime  = data.data.paymentList.payTime
				
				//自定义接收paytime这个时间循环遍历来更改时间格式				
				var paymentList = that.paymentList
				for(var i=0;i <paymentList.length;i++){
					paymentList[i].payTime = that.NumConvertUtil.formatDate2(paymentList[i].payTime)//时间格式转变
					console.log(paymentList[i].payTime)
				}
				
//				that.paymentList.payTime  = that.NumConvertUtil.formatDate2(that.paymentList.payTime)//时间格式转变
				
			})
		},
		props: ['childMsg'],//子组件接收父组件传来的参
		methods:{
			 close(){//关闭按钮
		      	this.$emit('contractsee2',false)//子组件传给父组件的参数
		     },
		     yulan(item){
		     	console.log(this.id)
		     	
		     	var url = null;
		     	var category = this.$refs.fileCategory.value//获取dom节点——ref的用法
//	                url = this.$http.imageFileUrl + category +"/" +this.id +"/" +item;
	                url = this.$http.previewFileUrl + category +"/" +this.id +"/" +item;
		     	
		     	
            	
            	window.open (url,"newWindow","height=500, width=800, toolbar =no, menubar=no, scrollbars=yes, resizable=yes, location=no, status=no");
		     },
		     download(item){
		      	var category = this.$refs.fileCategory.value//获取dom节点——ref的用法
            	var url = null;
		      	url = this.$http.downloadWebFile + category +"/" +this.id +"/" +item;
            	window.location.href = url;
		      }
		}
	}
</script>

<style>
	/*遮罩层*/
	#contractseezhezhaoceng{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0);
		position: fixed;
		top: 0;
	}
	#contractsee{
		width: 50%;
		position: absolute;
		top: 120px;
		border: 1px solid #333333;
		background: #E9EEF3;
		height: 500px;
		padding: 10px;
		overflow: auto;
	}
	#contractsee #insidedata{
		width: 100%;
		border-collapse:collapse;
		border: 1px solid #B3C0D1;

		
	}
	#contractsee #insidedata .firsttr{
		background: #D3DCE6;
	}
	#contractsee #insidedata td{
		border: 1px solid #D3DCE6;
	}
	#contractsee h5{
		position: relative;
		width: 680px;
		height: 10px;
		text-align: center;
		line-height: 5px;
		border-bottom:0;
	}
	#contractsee #note,#contractsee #comment{
		text-align: left;
	}
</style>