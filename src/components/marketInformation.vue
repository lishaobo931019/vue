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
		data(){
			return{
			}
		},
		mounted() {
			var myChart = echarts.init(document.getElementById('echartContainer'));
			myChart.setOption({
			    title: {
			        text: '月度出访次数'
			    },
			    tooltip: {},
			    legend: {
			        data:['出访次数']
			    },
			    xAxis: {
			        data: []
			    },
			    yAxis: {},
			    series: [{
			        name: '出访次数',
			        type: 'bar',
			        data: []
			    }]
			});
			
			// 异步加载数据
			this.$http.MonthVisit().then(function(res){//调用接口
				console.log(res)
				 myChart.setOption({
			        xAxis: {
			            data:res.data.month
			        },
			        series: [{
			            // 根据名字对应到相应的系列
			            name:'出访次数',
			            data:res.data.data
			        }]
			    });
			})
		}
	}
</script>

<style>
</style>