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
		                <input type="text" name="surveyObject" id="surveyObject" required>
		            </td>
		            <td  align="center" bgColor="#f5fafe" class="ta_01">责任人:</td>
		            <td bgColor="#ffffff">
		                <input type="text" name="responsiblePerson" id="responsiblePerson" required>
		            </td>
		        </tr>
		        <tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">任务类型:</td>
		            <td bgColor="#ffffff">
		
		                <select id="workCategory" name="workCategory" required>
		                    <option value="">无</option>
		                </select>
		
		            </td>
		            <td align="center" bgColor="#f5fafe" class="ta_01" >反馈类型:</td>
		            <td bgColor="#ffffff">
		
		                <select id="feedbackCategory" name="feedbackCategory" required>
		                    <option value="">无</option>
		                </select>
		            </td>
		        </tr>
		
		        <tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">地区:</td>
		            <td  bgColor="#ffffff">
		                <select id="area" name="area" required>
		                    <option value="">无</option>
		                </select>
		            </td>
		
		            <td align="center" bgColor="#f5fafe" class="ta_01">片区:</td>
		            <td bgColor="#ffffff">
		                <select id="region" name="region" required>
		                    <option value="">无</option>
		                </select>
		            </td>
		
		        </tr>
		
		        <tr>
		            <td align="center" bgColor="#f5fafe" class="ta_01">拜访起始时间:</td>
		            <td bgColor="#ffffff">
		                <input type="text" name="surveyStartTime" id="surveyStartTime" onclick="WdatePicker({lang:'zh-cn'})" required>
		            </td>
		
		            <td align="center" bgColor="#f5fafe" class="ta_01">拜访天数:</td>
		            <td  bgColor="#ffffff">
		                <input type="text" name="surveyDays" id="surveyDays" required>
		            </td>
		        </tr>
		
		        <tr>
		            <td  align="center" bgColor="#f5fafe">任务内容:</td>
		            <td  bgColor="#ffffff" colSpan="3">
		                <textarea id="workContent" name="workContent" placeholder="请输入任务内容" cols="80%"  rows="8" required></textarea>
		                <span>0/200</span>
		            </td>
		        </tr>
		        <tr>
		            <td  align="center" bgColor="#f5fafe">反馈情况:</td>
		            <td  bgColor="#ffffff" colSpan="3">
		                <textarea id="feedback" name="feedback" placeholder="请输入反馈情况" cols="80%"  rows="8" required></textarea>
		                <span>0/200</span>
		            </td>
		        </tr>
		
		        <tr>
		            <td  align="center" bgColor="#f5fafe">备注:</td>
		            <td  bgColor="#ffffff" colSpan="3">
		                <textarea id="comment" name="comment" placeholder="请输入备注" cols="80%"  rows="8" required></textarea>
		                <span>0/200</span>
		            </td>
		        </tr>
		
		        <tr>
		            <td  align="center" bgColor="#f5fafe">调查人</td>
		            <td  colSpan="3"  class="ta_01"  align="left" bgColor="#f5fafe">
		                <ul id="investigators" ></ul>
		            </td>
		        </tr>
		
		
		        <tr style="height: 150px">
		            <td  style="WIDTH: 100%" align="center" bgColor="#f5fafe" colSpan="4">
		                <input type="submit" id="BT_Submit" name="" value="保存" style="font-size:12px" height="22"
		                       width="55">
		                &nbsp;&nbsp;&nbsp;
		                <input style="font-size:12px" height="22" width="55" type="button" value="关闭" name=""
		                       onClick="window.close()">
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
			}
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
</style>