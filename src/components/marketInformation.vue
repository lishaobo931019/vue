<template>
	<div id="">
	    <!--创建一个echarts的容器-->
	   	 <div id="echartContainer" style="width:500px; height:500px"></div>
	</div>
</template>

<script>
	var echarts = require('echarts');//引入echarts
	export default{
		name:'marketInformation',
		created(){
			this.$http.lalala().then(function(res){//调用接口
//				console.log(res)
			})
		},
		mounted() {
			//在mounted()钩子方法中初始化echarts并绘制图表
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('echartContainer'));
			// 绘制图表
	            var option = {
	            title: {
	                text: '月度出访次数'
	            },
	            tooltip: {},
	            legend: {
	                data:['出访次数']
	            },
	            xAxis: {
	                data:[]
	            },
	            yAxis: {},
	            series: [{
	                name: '出访次数',
	                type: 'bar',
	                data: []
	            }]
	        };
	        
	        //异步加载数据
	        this.$http.lalala().then(function(res){//调用接口
	        	console.log(res)
		        myChart.setOption({
					xAxis:{
						data:res.data.month
					},
					series:{
						data:res.data.data
					}
				})
	        })
		}
	}
</script>

<style>
</style>