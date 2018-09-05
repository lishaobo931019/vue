<template>
	<div>
		<div id="echartsBiddinginfo">
	    <!--创建一个echarts的容器-->
	   		<div id="biddingNum" style="width:500px; height:500px"></div>
	   		<div id="biddingMoney" style="width:500px; height:500px"></div>
	   		<div id="tenderWeight" style="width:500px; height:500px"></div>
	   		<div id="bidWinTotalWeight" style="width:500px; height:500px"></div>
	   		<div id="bidWinWeight" style="width:900px; height:900px"></div>
	   		<!--<div id="biddingProportion" style="width:500px; height:500px"></div>-->
	   	</div> 
	</div>
</template>

<script>
//	var echarts = require('echarts');//引入echarts
	export default{
		name:'marketInformation',
		mounted() {
			//strat
			var biddingNum = this.echarts.init(document.getElementById('biddingNum'));//中标数量情况
			var biddingMoney = this.echarts.init(document.getElementById('biddingMoney'));//中标金额情况
			var tenderWeight = this.echarts.init(document.getElementById('tenderWeight'));//参与投标的中标占比
			var bidWinTotalWeight = this.echarts.init(document.getElementById('bidWinTotalWeight'));//市场总额的中标占比情况
			var bidWinWeight = this.echarts.init(document.getElementById('bidWinWeight'));//各公司中标占比
			
			let that = this;
			
			/*中标数量情况*/
			biddingNum.setOption({
                title: {
                    show:true,
                    x:'center',
                    text: '中标的数量情况'
                },
                tooltip: {},//此属性鼠标移动上面会显示数据。很好。
                legend: {
                    y:'bottom',
					data:['中标的数量','参与投标的数量','招标文件总数'],
                },
                xAxis: {
                    data: [],
                },
                yAxis: {

                    type : 'value',
                    axisLabel:{formatter:'{value} '}

                },

                series: [
                    {
                        barGap:'0%',
                        name: '中标的数量',
                        type: 'bar',
                        data: [],
                        itemStyle:{
                            normal:{
                                label:{
                                    show:true,
                                    position:'top',
                                    textStyle:{
                                        fontSize : '15',
                                        fontFamily : '微软雅黑',
                                    }
                                }
                            }
                        },
                    },
                    {
                        barGap:'0%',
                        name: '参与投标的数量',
                        type: 'bar',
                        data: [],
                        itemStyle:{
                            normal:{
                                label:{
                                    show:true,
                                    position:'top',
                                    textStyle:{
                                        fontSize : '15',
                                        fontFamily : '微软雅黑',
                                    }
                                }
                            }
                        },
                    },
                    {
                        name: '招标文件总数',
                        type: 'bar',
                        data: [],
                        itemStyle:{
                            normal:{
                                label:{
                                    show:true,
                                    position:'top',
                                    textStyle:{
                                        fontSize : '15',
                                        fontFamily : '微软雅黑',
                                    }
                                }
                            }
                        },
                    }

                ]

            });

            biddingNum.showLoading();
            this.$http.biddingNum().then(function(res){
            	console.log(res)
                biddingNum.hideLoading();
                biddingNum.setOption({
                    xAxis: {
                        data: res.data.title,
                    },
                    series: [
                        {
                            name: '中标的数量',
                            data: res.data.p1,
                        },
                        {
                            name: '参与投标的数量',
                            data: res.data.p2,
                        },
                        {
                            name: '招标文件总数',
                            data: res.data.p3,
                        }
                    ]
                });
            });
			
			
			
			
			//中标的金额情况
			 biddingMoney.setOption({
                title: {
                    show:true,
                    x:'center',
                    text: '中标的金额情况'
                },
                tooltip: {},//此属性鼠标移动上面会显示数据。很好。
                legend: {
                    y:'bottom',
                    data:['中标的金额','参与投标项目的总金额','市场总金额'],

                },
                xAxis: {
                    data: [],
                },
                yAxis: {

                    type : 'value',
                    axisLabel:{formatter:'{value} '}

                },

                series: [
                    {
                        barGap:'0%',
                        name: '中标的金额',
                        type: 'bar',
                        data: [],
                        itemStyle:{
                            normal:{
                                label:{
                                    show:true,
                                    position:'top',
                                    textStyle:{
                                        fontSize : '15',
                                        fontFamily : '微软雅黑',
                                    }
                                }
                            }
                        },
                    },
                    {
                        name: '招标文件的总金额',
                        type: 'bar',
                        data: [],
                        itemStyle:{
                            normal:{
                                label:{
                                    show:true,
                                    position:'top',
                                    textStyle:{
                                        fontSize : '15',
                                        fontFamily : '微软雅黑',
                                    }
                                }
                            }
                        },
                    },
                    {
                        name: '市场总金额',
                        type: 'bar',
                        data: [],
                        itemStyle:{
                            normal:{
                                label:{
                                    show:true,
                                    position:'top',
                                    textStyle:{
                                        fontSize : '15',
                                        fontFamily : '微软雅黑',
                                    }
                                }
                            }
                        },
                    }

                ]

            });

            biddingMoney.showLoading();
            this.$http.biddingMoney().then(function(res){
                biddingMoney.hideLoading();
                biddingMoney.setOption({
                    xAxis: {
                        data: res.data.title,
                    },
                    series: [
                        {
                            name: '中标的金额',
                            data: res.data.p1,
                        },
                        {
                            name: '招标文件的总金额',
                            data: res.data.p2,
                        },
                        {
                            name: '市场总金额',
                            data: res.data.p3,
                        }
                    ]
                });
            });
			
			
			//参与投标的中标占比
			
            tenderWeight.setOption({
                title: {
                    show:true,
                    x:'center',
                    text: '参与投标的中标占比情况'
                },
                tooltip: {},//此属性鼠标移动上面会显示数据。很好。
                legend: {
                    y:'bottom',
                    data:[],

                },

                series: [
                    {
                        name:'中标占比',
                        type:'pie',
                        radius: ['30%', '40%'],
                        legendHoverLink: false, //关闭点击时的高亮
                        hoverAnimation:false,//关闭放大动画
                        label: {
                            show:true,
                            position:'outside',

                        },
                        labelLine: {
                            show:true,
                            length:50,

                        },
                        data:[],
                        itemStyle:{
                            normal:{
                                label:{
                                    show: true,
                                    formatter:function(data){
                                    	return that.NumConvertUtil.getNumConvertMoney(data.value)+"("+(data.percent)+"%)";
//                                      return data.name+":" +NumConvertUtil.getShortMoney(data.value) +"("+(data.percent)+"%)";
                                    }
                                },
                                labelLine :{show:true}
                            }
                        }
                    }

                ]

            });


            tenderWeight.showLoading();
            this.$http.bidCharTenderWeight().then(function(res){
                tenderWeight.hideLoading();

                tenderWeight.setOption({
                    legend: {
                        data: res.data.category
                    },
                    series: [
                        {
                            name: '中标占比',
                            data: res.data.pie,
                        }
                    ]
                });
            });
			//
			//
			
			
			
			
			//市场总额的中标占比
            bidWinTotalWeight.setOption({
                title: {
                    show:true,
                    x:'center',
                    text: '市场总额的中标占比情况'
                },
                tooltip: {},//此属性鼠标移动上面会显示数据。很好。
                legend: {
                    y:'bottom',
                    data:[],

                },

                series: [
                    {
                        name:'中标占比',
                        type:'pie',
                        radius: ['30%', '40%'],
                        legendHoverLink: false, //关闭点击时的高亮
                        hoverAnimation:false,//关闭放大动画
                        label: {
                            show:true,
                            position:'outside',

                        },
                        labelLine: {
                            show:true,
                            length:50,

                        },
                        data:[],
                        itemStyle:{
                            normal:{
                                label:{
                                    show: true,
                                    formatter:function(data){
                                        return that.NumConvertUtil.getNumConvertMoney(data.value) +"("+(data.percent)+"%)";
                                    }
                                },
                                labelLine :{show:true}
                            }
                        }
                    }

                ]

            });


            bidWinTotalWeight.showLoading();
            this.$http.bidChartWinTotalWeight().then(function(res){
                bidWinTotalWeight.hideLoading();

                bidWinTotalWeight.setOption({
                    legend: {
                        data: res.data.category
                    },
                    series: [
                        {
                            name: '中标占比',
                            data: res.data.pie,
                        }
                    ]
                });
            });
			
			
			
			
			//各公司中标占比 
			

            bidWinWeight.setOption({
                title: {
                    show:true,
                    x:'center',
                    text: '各公司中标占比明细'
                },
                legend: {
                    y:'bottom',
                    data:[],

                },
				tooltip: {},//此属性鼠标移动上面会显示数据。很好。
                series: [
                    {
                        name:'中标占比',
                        type:'pie',
                        radius: ['30%', '40%'],
                        legendHoverLink: false, //关闭点击时的高亮
                        hoverAnimation:false,//关闭放大动画
                        label: {
                            show:true,
                            position:'outside',

                        },
                        labelLine: {
                            show:true,
                            length:50,

                        },
                        data:[],
                        itemStyle:{
                            normal:{
                                label:{
                                    show: true,
                                    formatter:function(data){
//                                  	 return that.NumConvertUtil.getNumConvertMoney(data.value) +"("+(data.percent)+"%)";
                                        return data.name+":" + that.NumConvertUtil.getShortMoney(data.value) +"("+(data.percent)+"%)";
                                    }
                                },
                                labelLine :{show:true}
                            }
                        }
                    }

                ]

            });


            bidWinWeight.showLoading();
            this.$http.bidChartWinWeight().then(function(res){
                bidWinWeight.hideLoading();
				console.log(res)
                bidWinWeight.setOption({
                    legend: {
                        data: res.data.category
                    },
                    series: [
                        {
                            name: '中标占比',
                            data: res.data.pie,
                        }
                    ]
                });
            });

			
			//end
		}
	}
</script>

<style>
#echartsBiddinginfo{
		max-width:1100px ;
		height: 100%;
		margin: auto;
		/*border:1px solid #3762BC*/
	}
	#biddingNum,#biddingMoney,#biddingProportion,#tenderWeight,#bidWinTotalWeight,#bidWinWeight{
		margin: 20px;
		display: inline-block;
		/*float: left;*/
/*		border:1px solid red;*/
	}
</style>