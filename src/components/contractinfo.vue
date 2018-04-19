<template>
	<div>
		<div id="echartContract">
		    <!--创建一个echarts的容器-->
		    <div id="Contractincome" style="width:500px; height:500px"></div>
		   	<div id="Contractpayment" style="width:500px; height:500px"></div>
		   	<div id="workprogress" style="width:500px; height:500px"></div>
		   	<div id="Productincome" style="width:500px; height:500px"></div>
		   	<div id="diquincome" style="width:500px; height:500px"></div>
		   	<div id="fenquincome" style="width:500px; height:500px"></div>
		   	<div id="yearWarrantygold" style="width:500px; height:500px"></div>
		   	<div id="Warrantygoldreturn" style="width:500px; height:500px"></div>
		</div>
	</div>
</template>

<script>
	var echarts = require('echarts');//引入echarts
	export default{
		data(){
			return{
			}
		},
		mounted() {
			var Contractincome     = echarts.init(document.getElementById('Contractincome'));//合同收入情况
			var Contractpayment    = echarts.init(document.getElementById('Contractpayment'));//合同付款情况
			var workprogress       = echarts.init(document.getElementById('workprogress'));//各地工作进度
			var Productincome      = echarts.init(document.getElementById('Productincome'));//各产品收入
			var diquincome         = echarts.init(document.getElementById('diquincome'));//地区收入比例
			var fenquincome        = echarts.init(document.getElementById('fenquincome'));//分区收入比例
			var yearWarrantygold   = echarts.init(document.getElementById('yearWarrantygold'));//年度质保金情况
			var Warrantygoldreturn = echarts.init(document.getElementById('Warrantygoldreturn'));//质保金回款情况
			
			
			
			
			
			
				//合同收入情况
				 Contractincome.setOption({
				 	title: {
                    show:true,
                    x:'center',
                    text: '合同签订的收入情况'
	                },
	                grid:{
                    left:80
                	},
	                color: ['#003366', '#006699', '#4cabce', '#4cacaa'],//柱形图的背景颜色
	                tooltip: {},//此属性鼠标移动上面会显示数据。很好。
	                legend: {
	                    y:'bottom',
	                    data:['第一季度','第二季度','第三季度','第四季度'],
	
	                },
	                xAxis: {
	                    data: []
	                },
	                yAxis: {
	                    type : 'value',
						axisLabel:{formatter:'{value}'}
	                },
	                series: [
	                    {
	                        barGap:'2%',
	                        name: '第一季度',
	                        type: 'bar',
	                        data: [],
	                        itemStyle:{
	                            normal:{
	                                label:{
	                                    show:true,
	                                    position:'top',
	                                    textStyle:{
	                                        fontFamily : '微软雅黑',
	                                    }
	                                }
	                            }
	                        },
	                    },
	                    {
	                        name: '第二季度',
	                        type: 'bar',
	                        data: [],
	                        itemStyle:{
	                            normal:{
	                                label:{
	                                    show:true,
	                                    position:'top',
	                                    textStyle:{
	                                        fontFamily : '微软雅黑',
	                                    }
	                                }
	                            }
	                        },
	                    },
	                    {
	                        name: '第三季度',
	                        type: 'bar',
	                        data: [],
	                        itemStyle:{
	                            normal:{
	                                label:{
	                                    show:true,
	                                    position:'top',
	                                    textStyle:{
	                                        fontFamily : '微软雅黑',
	                                    }
	                                }
	                            }
	                        },
	                    },
	                    {
	                        name: '第四季度',
	                        type: 'bar',
	                        data: [],
	                        itemStyle:{
	                            normal:{
	                                label:{
	                                    show:true,
	                                    position:'top',
	                                    textStyle:{
	                                        fontFamily : '微软雅黑',
	                                    }
	                                }
	                            }
	                        },
	                    }
	
	                ]

			    });
			
			//后台加载数据
			this.$http.Contractincome().then(function(res){
//				console.log(res)
				Contractincome.setOption({
			        xAxis: {
			            data:res.data.years
			        },
			        series: [
                        {
                            name: '第一季度',
                            data: res.data.q1
                        },
                        {
                            name: '第二季度',
                            data: res.data.q2
                        },
                        {
                            name: '第三季度',
                            data: res.data.q3
                        },
                        {
                            name: '第四季度',
                            data: res.data.q4
                        },
                    ]
			    });
			})
				
			//*/*/*/*/*/*/*/**/*/*/*/*/*/*/*/
			//合同付款情况
				Contractpayment.setOption({
	                title: {
	                    show: true,
	                    x: 'center',
	                    text: '合同的收入情况'
	                },
	                tooltip: {},//此属性鼠标移动上面会显示数据。很好。
	                legend: {
	                    y: 'bottom',
	                    data: ['已付款','合同已经签订收入', '合同承揽收入'],
	
	                },
	                grid:{
	                    left:80
	                },
	                xAxis: {
	                    data: [],
	                },
	                yAxis: {
	                    type: 'value',
	                    axisLabel: {formatter: '{value}'}
	                },
	                series: [
	                    {
	                        barGap: '2%',
	                        name: '已付款',
	                        type: 'bar',
	                        data: [],
	                        itemStyle: {
	                            normal: {
	                                label: {
	                                    show: true,
	                                    position: 'top',
	                                    textStyle: {
	                                        fontSize: '15',
	                                        fontFamily: '微软雅黑',
	                                    },
	                                }
	                            }
	                        },
	                    },
	                    {
	                        name: '合同已经签订收入',
	                        type: 'bar',
	                        data: [],
	                        itemStyle: {
	                            normal: {
	                                label: {
	                                    show: true,
	                                    position: 'top',
	                                    textStyle: {
	                                        fontSize: '15',
	                                        fontFamily: '微软雅黑',
	                                    },
	                                }
	                            }
	                        },
	
	                    },
	                    {
	                        name: '合同承揽收入',
	                        type: 'bar',
	                        data: [],
	                        itemStyle: {
	                            normal: {
	                                label: {
	                                    show: true,
	                                    position: 'top',
	                                    textStyle: {
	                                        fontSize: '15',
	                                        fontFamily: '微软雅黑',
	                                    },
	                                }
	                            }
	                        },
	                    }
	                ]
	            });
	
	            Contractpayment.showLoading();
	          	this.$http.Contractpayment().then(function(res){
	                Contractpayment.hideLoading();
	                Contractpayment.setOption({
	                    xAxis: {
	                        data: res.data.title,
	                    },
	                    series: [
	                        {
	                            name: '已付款',
	                            data: res.data.p1,
	                        },
	                        {
	                            name: '合同已经签订收入',
	                            data: res.data.p2,
	                        }
	                        ,
	                        {
	                            name: '合同承揽收入',
	                            data: res.data.p3,
	                        }
	                    ]
	                });
	            });
			
			/**/
			//
			//
			//
		}
	}
</script>

<style>
	#echartContract{
		max-width:1100px ;
		height: 100%;
		margin: auto;
		/*border:1px solid #3762BC*/
	}
	#Contractincome,#Contractpayment,#workprogress,#Productincome,#diquincome,#fenquincome,#yearWarrantygold,#Warrantygoldreturn{
		margin: 20px;
		display: inline-block;
		border:1px solid red;
	}
</style>