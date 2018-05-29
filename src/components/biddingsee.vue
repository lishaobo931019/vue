<template>
	<div id="">
		<div id="biddingsee">
			<input ref="fileCategory" type="hidden" value="market">   <!--ref标识表示市场页面-->
			<h5>
				添加招投标管理信息
				<span id="cancel" @click="cancel">关闭</span>
			</h5>
			<table cellSpacing="1" cellPadding="5" width="680" align="center" bgColor="#eeeeee" style="border:1px solid #8ba7e3" border="0">
	        	<tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">招标单位:</td>
		            <td class="ta_01" bgColor="#ffffff">{{bidCompany}}</td>
		            <td align="center" bgColor="#f5fafe" class="ta_01">招标项目名称:</td>
		            <td class="ta_01" bgColor="#ffffff">{{bidProject}}</td>
	       		</tr>
	       		<tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">招标数量:</td>
		            <td class="ta_01" bgColor="#ffffff">{{bidAmount}}</td>
		            <td align="center" bgColor="#f5fafe" class="ta_01">中标单位:</td>
		            <td class="ta_01" bgColor="#ffffff">{{bider}}</td>
	       		</tr>
	       		<tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">投标时间:</td>
		            <td class="ta_01" bgColor="#ffffff">{{bidTime}}</td>
		            <td align="center" bgColor="#f5fafe" class="ta_01">审核状态:</td>
		            <td class="ta_01" bgColor="#ffffff">{{bidAuditCategory}}</td>
	       		</tr>
	       		<tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">地区:</td>
		            <td class="ta_01" bgColor="#ffffff">{{areaCategory}}</td>
		            <td align="center" bgColor="#f5fafe" class="ta_01">片区:</td>
		            <td class="ta_01" bgColor="#ffffff">{{regionCategory}}</td>
	       		</tr>
	       		<tr>
		            <td class="ta_01" align="center" bgColor="#f5fafe">备注:</td>
		            <td class="ta_01" bgColor="#ffffff" colSpan="3">
		                <div style="height: 100px"  id="workContent">{{comment}}</div>
		            </td>
		        </tr>
		        <tr>
		            <td class="ta_01" align="center" bgColor="#f5fafe">招标总结:</td>
		            <td class="ta_01" bgColor="#ffffff" colSpan="3">
		                <div style="height: 100px" id="feedback">{{bidSummary}}</div>
		            </td>
		        </tr>
		        
				<tr>
        			<td  colspan="5" style="width: 100%" align="center" bgColor="#f5fafe">
        				<table  id="insidedata">
        					<tr >
        						<th class="firsttr" align="center" width="16.66%" height=20>包号</th>
		                        <th class="firsttr" align="center" width="16.66%" height=20>产品类型</th>
		                        <th class="firsttr" align="center" width="16.66%" height=20>数量</th>
		                        <th class="firsttr" align="center" width="16.66%" height=20>单位</th>
		                        <th class="firsttr" align="center" width="16.66%" height=20>中标单位</th>
		                        <th class="firsttr" align="center" width="16.66%" height=20>中标价格</th>
        					</tr>
        					<tr v-for="item in bidPkgList">
        						<td class="secondtr" align="center" width="16.66%" height=20>{{item.pkgNum}}</td>
        						<td class="secondtr" align="center" width="16.66%" height=20>{{item.productCategoryModel.category}}</td>
        						<td class="secondtr" align="center" width="16.66%" height=20>{{item.amount}}</td>
        						<td class="secondtr" align="center" width="16.66%" height=20>{{item.priceUnitCategoryModel.category}}</td>
        						<td class="secondtr" align="center" width="16.66%" height=20>{{item.bidder}}</td>
        						<td class="secondtr" align="center" width="16.66%" height=20>{{item.tenderPrice}}</td>
        					</tr>
        				
        				</table>
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
				bidCompany:'',
				bidProject:'',
				bidAmount:'',
				bider:'',
				bidTime:'',
				bidAuditCategory:'',
				comment:'',
				bidSummary:'',
				areaCategory:'',
				regionCategory:'',
				bidPkgList:{}
			}
		},
		methods:{
			 cancel(){//关闭按钮
		      	this.$emit('bidding',false)//子组件传给父组件的参数
		     }
		},
		created(){
			console.log(this.childMsg)
			var id = this.childMsg;
			var that = this
			this.$http.bidDetail(id).then(function(data){
				console.log(data)
				that.bidCompany = data.data.bidCompany
				that.bidProject = data.data.bidProject
				that.bidAmount = data.data.bidAmount
				that.bider = data.data.bider
				that.bidTime = data.data.bidTime
				that.bidTime = that.NumConvertUtil.formatDate2(that.bidTime)//时间格式转变
				that.bidAuditCategory = data.data.bidAuditCategory.category
				that.comment = data.data.comment
				that.bidSummary = data.data.bidSummary
				that.areaCategory = data.data.areaCategory.category
				that.regionCategory = data.data.regionCategory.category
				that.bidPkgList = data.data.bidPkgList
				
			})
		},
		props: ['childMsg'],//子组件接收父组件传来的参
	}
</script>

<style>
	#biddingsee{
		width: 50%;
		position: absolute;
		top: 120px;
		border: 1px solid #333333;
		background: #E9EEF3;
		height: 500px;
		padding: 10px;
		overflow: auto;
	}
	#biddingsee h5{
		position: relative;
		width: 680px;
		height: 10px;
		text-align: center;
		line-height: 5px;
		/*border-bottom: 1px solid #000000;*/
	}
	#biddingsee table .ta_01{
		height: 10px;
		width: 100px;
		text-align: left;
	}
	#biddingsee #cancel{
		position: absolute;
		top: 0;
		right: 10px;
		color: red;
		cursor: pointer;
		font-size: 20px;
	}
	#biddingsee #insidedata{
		width: 100%;
		border-collapse:collapse;
		border: 1px solid #B3C0D1;

		
	}
	#biddingsee #insidedata .firsttr{
		background: #D3DCE6;
	}
	#biddingsee #insidedata td{
		border: 1px solid #D3DCE6;
	}
</style>