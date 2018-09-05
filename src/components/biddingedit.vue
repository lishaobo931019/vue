<template>
	<div id="biddingeditzhezhaoceng">
		<div id="biddingedit">
				<form id="bidFrom"  method="post">
				
				    <input id="id" type="hidden" name="id" value="">
				    <input id="fileCategory" type="hidden" value="bid">
				
				
				    <br>
				    <table cellSpacing="1" cellPadding="5" width="680" align="center" bgColor="#eeeeee" style="border:1px solid #8ba7e3"
				           border="0">
				
				        <tr>
				            <td align="center" colSpan="4">
				                <font face="宋体" size="2"><strong>添加招投标管理信息</strong></font>
				            </td>
				        </tr>
				
				        <tr>
				            <td align="center" bgColor="#f5fafe" >招标单位:</td>
				            <td bgColor="#ffffff">
				                <input type="text" name="bidCompany" id="bidCompany" v-model="bidCompany">
				            </td>
				            <td width="18%" align="center" bgColor="#f5fafe" >招标项目名称:</td>
				            <td bgColor="#ffffff">
				                <input type="text" name="bidProject" id="bidProject" required v-model="bidProject">
				            </td>
				        </tr>
				        <tr>
				            <td align="center" bgColor="#f5fafe" >招标数量:</td>
				            <td bgColor="#ffffff">
				                <input type="text" name="bidAmount" id="bidAmount" v-model="bidAmount">
				            </td>
				
				            <td align="center" bgColor="#f5fafe" >预估招标总价:</td>
				            <td bgColor="#ffffff">
				                <input type="text" name="bider" id="bider" v-model="bidPrice">
				            </td>
				        </tr>
				
				        <tr>
				
				            <td align="center" bgColor="#f5fafe">投标时间:</td>
				            <td bgColor="#ffffff">
				                <input type="date" name="bidTime" id="bidTime" v-model="bidTime" style="width: 168px;height: 17px;">
				            </td>
				
				
				            <td align="center" bgColor="#f5fafe" >审核状态:</td>
				            <td  bgColor="#ffffff">
				                <select id="status" name="status" style="width: 173px;" v-model="bidAuditCategory">
				                	<option :label="item.category" :value="item.id" v-for="item in bidAuditCategoryList"></option>
				                </select>
				            </td>
				        </tr>
				
						<!--添加片区-->
						<tr>
				            <td align="center" bgColor="#f5fafe">地区:</td>
				            <td  bgColor="#ffffff">
				                <select id="area" name="area" style="width: 173px;" v-model="areaCategory" > 
				                    <option  :label="item.category" :value="item.id" v-for="item in areaCategoryList"></option>
				                </select>
				            </td>
				
				            <td align="center" bgColor="#f5fafe">片区:</td>
				            <td bgColor="#ffffff">
				                <select id="region" name="region" style="width: 173px;" v-model="regionCategory">
				                    <option  :label="item.category" :value="item.id" v-for="item in regionCategoryList"></option>
				                </select>
				            </td>
				
				        </tr>
				
				<!--添加结束-->
				
				        <tr>
				            <td  align="center" bgColor="#f5fafe">备注:</td>
				            <td  bgColor="#ffffff" colSpan="3">
				                <textarea id="comment" name="comment" placeholder="请输入任务内容" cols="80%"  rows="8" v-model="comment"></textarea>
				                <span>0/200</span>
				            </td>
				        </tr>
				
				        <tr>
				            <td  align="center" bgColor="#f5fafe">招标总结:</td>
				            <td  bgColor="#ffffff" colSpan="3">
				                <textarea id="bidSummary" name="bidSummary" placeholder="请输入反馈情况" cols="80%"  rows="8" v-model="bidSummary"></textarea>
				                <span>0/200</span>
				            </td>
				        </tr>
				
				
				       
				    </table>
				    <!---->
				    
				    
				    
				    <el-form ref="form" :model="addbiddingedit" label-width="100px" size="mini" id="addbiddingedit">
						    	<el-form-item label="包号清单" id="addPerson">
				    				<el-button type="primary" style="float: left;"  @click="addlist">添加清单</el-button>
								</el-form-item>
								<!---->
								<!---->
								<table  id="biddinginsidedataedit">
		        					<tr >
		        						<th class="firsttr" align="center" width="14%" height=20>包号</th>
				                        <th class="firsttr" align="center" width="14%" height=20>产品类型</th>
				                        <th class="firsttr" align="center" width="14%" height=20>数量</th>
				                        <th class="firsttr" align="center" width="14%" height=20>单位</th>
				                        <th class="firsttr" align="center" width="14%" height=20>中标单位</th>
				                        <th class="firsttr" align="center" width="14%" height=20>中标价格</th>
				                        <th class="firsttr" align="center" width="14%" height=20>操作</th>
		        					</tr>
		        					<tr v-for="(item,index) in arrList" >
		        						<td class="secondtr" align="center" width="14%" height=20 >
		        							<input type="text" class="inpu" v-model="item.pkgNum" />
		        						</td>
		        						<td class="secondtr" align="center" width="14%" height=20>
		        							<select class="inpu" style="height: 23px;" v-model="item.productCategory">
		        								<option :label="itemm.category" :value="itemm.id" v-for="itemm in productCategoryList"></option>
		        							</select>
		        						</td>
		        						
		        						<td class="secondtr" align="center" width="14%" height=20>
		        							<input type="text"  class="inpu" v-model="item.amount" />
		        						</td>
		        						<td class="secondtr" align="center" width="14%" height=20>
		        							<select class="inpu" style="height: 23px;"  v-model="item.unit">
		        								<option :label="itemm.category" :value="itemm.id" v-for="itemm in priceUnitCategoryList"></option>
		        							</select>
		        						</td>
		        						<td class="secondtr" align="center" width="14%" height=20>
		        							<input type="text"  class="inpu" v-model="item.bidder" />
		        						</td>
		        						<td class="secondtr" align="center" width="14%" height=20>
		        							<input type="text"  class="inpu" v-model="item.tenderPrice"/>
		        						</td>
		        						<td class="secondtr" align="center" width="14%" height=20>
		        							<input type="button" value="删除" class="del" @click="delatetr(index)"/>
		        						</td>
		        					</tr>
		        				</table>
					    </el-form>
				    	
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
				arrList:[],
				addbiddingedit:{},
				bidCompany:'',
				bidProject:'',
				bidAmount:'',
				bidPrice:'',
				bidTime:'',
				bidAuditCategory:'',
				comment:'',
				bidSummary:'',
				areaCategory:'',
				regionCategory:'',
				areaCategoryList:[],//地区
	       	 	regionCategoryList:[],//片区
	        	bidAuditCategoryList:[],//审核状态
	        	productCategoryList:[],//产品类型
	        	priceUnitCategoryList:[],//单位
				bidPkgList:[{
					pkgNum:null,
	        		amount:null,
	        		bidder:'',
	        		productCategory:null,
	        		tenderPrice:null,
	        		unit:null
				}],//自定义订单的数组
				postbidform:{}
			}
		},
		props: ['childMsg'],//子组件接收父组件传来的参
		methods:{
			close(){//关闭按钮
		      	this.$emit('biddingeditt',false)//子组件传给父组件的参数
		    },
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
	    		this.arrList.splice(index,1)//点击哪一个，就从哪一个开始删除1个数组元素。
	    	},
	    	tijiao(){
	    		var that = this;
		    	that.postbidform.bidCompany       = that.bidCompany
				that.postbidform.bidProject       = that.bidProject
				that.postbidform.bidAmount        = that.bidAmount
				that.postbidform.bidTime          = that.bidTime
				that.postbidform.bidTime          =  Date.parse(new Date(that.postbidform.bidTime)).toString()//时间最终转为字符戳
				that.postbidform.status           = that.bidAuditCategory
				that.postbidform.comment          = that.comment
				that.postbidform.bidSummary       = that.bidSummary
				that.postbidform.area    		  = that.areaCategory
				that.postbidform.region           = that.regionCategory
				that.postbidform.bidPkgList       = that.arrList
    			
				that.postbidform.id = that.childMsg;//引入uuid唯一标识
		       


				this.$http.bidUpdateUrl(that.postbidform).then(function(data){
					console.log(data)
					 window.location.reload()//重新加载页面
				})

//  			 this.$validator.validateAll().then(function(res){//固定用法格式
//		    		if(res){
//		    			console.log(res)
//		    			that.$http.updateMarketUrl(that.postform).then(function(data){
//				        	console.log(data)
//				       		 //点击保存跳转到列表——成功时跳转
//				       		  window.location.reload()//重新加载页面
//				        }) .catch(function (error) {
//						    console.log(error);
//						});
//		    		}
//		    	})
	    	}
		},
		created(){
			var that = this;
			var id = this.childMsg;
//			console.log(this.childMsg)
			
			this.$http.bidDetail(id).then(function(data){
				console.log(data)
				that.bidCompany = data.data.bidCompany
				that.bidProject = data.data.bidProject
				that.bidAmount = data.data.bidAmount
				that.bidPrice = data.data.bidPrice
				that.bidTime = data.data.bidTime
				that.bidTime = that.NumConvertUtil.formatDate2(that.bidTime)//时间格式转变
				that.bidAuditCategory = data.data.bidAuditCategory.id//审核状态
				that.comment = data.data.comment
				that.bidSummary = data.data.bidSummary
				that.areaCategory = data.data.areaCategory.id
				that.regionCategory = data.data.regionCategory.id
				that.bidPkgList = data.data.bidPkgList
				that.arrList = that.bidPkgList
				
				for(var i = 0; i < that.bidPkgList.length; i++){
					console.log(that.bidPkgList[i].pkgNum,6666)
					that.arrList[i].pkgNum = that.bidPkgList[i].pkgNum;
					that.arrList[i].amount = that.bidPkgList[i].amount;
					that.arrList[i].bidder = that.bidPkgList[i].bidder;
					that.arrList[i].productCategory = that.bidPkgList[i].productCategory;
					that.arrList[i].unit = that.bidPkgList[i].unit;
					that.arrList[i].tenderPrice = that.bidPkgList[i].tenderPrice;
				}
				console.log(that.bidPkgList,99999)
				
			})
			
			
			//
			//
			this.$http.allCategory().then(function(data){//向后台拿取下拉列表数据
//	    		console.log(data)
	    		that.areaCategoryList = data.data.areaCategoryList//地区
	    		that.regionCategoryList = data.data.regionCategoryList//片区
	    		that.bidAuditCategoryList = data.data.bidAuditCategoryList//审核状态
	    		that.productCategoryList = data.data.productCategoryList//产品类型
	    		that.priceUnitCategoryList = data.data.priceUnitCategoryList//单位
	    	})
			
		}
	}
</script>

<style>
	/*遮罩层*/
	#biddingeditzhezhaoceng{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0);
		position: fixed;
		top: 0;
	}
	#biddingedit{
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
	#addbiddingedit{
		width: 680px;
		margin: auto;
		margin-top:30px;
	}
	#biddinginsidedataedit{
		width: 680px;
		margin: auto;
		margin-top: 10px;
		margin-bottom: 10px;
		border: 1px solid rgb(139, 167, 227);
		font-size: 14px;
   		color: #606266;
   		background:#f5fafe ;
	}
	
	/**/
	/**/
	#biddingedit #addbiddingedit .inpu{
		height: 17px;
		width:95px;
	}
	#biddingedit #addbiddingedit .del{
		width: 60px;
		background: #01a8a1;
		border: none;
		color: #FFFFFF;
		border: 1px solid #01a8a1;
		font-size: 12px;
		cursor: pointer;
	}
</style>