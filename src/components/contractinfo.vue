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
//	var echarts = require('echarts');//单页面引入echarts
	export default{
		data(){
			return{
			}
		},
		mounted() {
			var Contractincome     = this.echarts.init(document.getElementById('Contractincome'));//合同收入情况
			var Contractpayment    = this.echarts.init(document.getElementById('Contractpayment'));//合同付款情况
			var workprogress       = this.echarts.init(document.getElementById('workprogress'));//各地工作进度
			var Productincome      = this.echarts.init(document.getElementById('Productincome'));//各产品收入
			var diquincome         = this.echarts.init(document.getElementById('diquincome'));//地区收入比例
			var fenquincome        = this.echarts.init(document.getElementById('fenquincome'));//分区收入比例
			var yearWarrantygold   = this.echarts.init(document.getElementById('yearWarrantygold'));//年度质保金情况
			var Warrantygoldreturn = this.echarts.init(document.getElementById('Warrantygoldreturn'));//质保金回款情况
			
			
			
			let that = this;
			
			
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
	                tooltip: {
	                	formatter:function(data){
                        	return that.NumConvertUtil.getNumConvertMoney(data.value);
                   		}
	                },//此属性鼠标移动上面会显示数据。很好。
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
	                                    },
	                                    formatter:function(data){
                                        return that.NumConvertUtil.getNumConvertMoney(data.value);
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
	                                    },
	                                    formatter:function(data){
                                        return that.NumConvertUtil.getNumConvertMoney(data.value);
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
	                                    },
	                                     formatter:function(data){
                                        return that.NumConvertUtil.getNumConvertMoney(data.value);
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
	                                    },
	                                    formatter:function(data){
                                        return that.NumConvertUtil.getNumConvertMoney(data.value);
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
	                tooltip: {
	                	formatter:function(data){
                        	return that.NumConvertUtil.getNumConvertMoney(data.value);
                    	}
	                },//此属性鼠标移动上面会显示数据。很好。
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
	                                    formatter:function(data){
                                        return that.NumConvertUtil.getNumConvertMoney(data.value);
                                   		 }
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
	                                    formatter:function(data){
                                        return that.NumConvertUtil.getNumConvertMoney(data.value);
                                   		 }
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
	                                    formatter:function(data){
                                        return that.NumConvertUtil.getNumConvertMoney(data.value);
                                   		 }
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
			
			/*******/
			
			
			
			
			
			
			//
			//各地区的工作进度
			workprogress.setOption({
                title: {
                    show: true,
                    x: 'center',
                    text: '各地区的工作进度'
                },
                tooltip: {
                	formatter:function(data){
                        return that.NumConvertUtil.getNumConvertMoney(data.value);
                    }
                },//此属性鼠标移动上面会显示数据。很好。
                grid:{
	                    left:55
	                },
                legend: {
                    y: 'bottom',
                    data: [
                        '完成的数量', '总的数量',
                    ],
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['---', '---', '---']
                    },
                    {
                        type: 'category',
                        data: ['---', '---', '---']
                    }
                ],
                yAxis: {
                    type: 'value',
                    axisLabel: {formatter: '{value}'}
                },
                series: [
                    {
                        name: '完成的数量',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: 'rgba(0,0,0,1)',
                                label: {
                                	show: true, 
                                	position: 'top',
                                	textStyle: {color: '#000'},
                                	formatter:function(data){
                                        return that.NumConvertUtil.getNumConvertMoney(data.value);
                                   	}
                                }
                            }
                        },
                        data: [0, 0, 0]
                    },
                    {
                        name: '总的数量',
                        type: 'bar',
                        xAxisIndex: 1,
                        itemStyle: {
                        	normal: {
                        		color: 'rgba(0,0,0,0.5)',
                        		label: {show: true,
                        		position: 'top',
                        		textStyle: {color: '#000'},
                        		formatter:function(data){
                                        return that.NumConvertUtil.getNumConvertMoney(data.value);
                                   }
                        		}
                        	}
                        },
                        data: [0, 0, 0]
                    },
                ]
            });
            workprogress.showLoading();
            
            //请求数据
            this.$http.workprogress().then(function(res){	
            	console.log(res)
                workprogress.hideLoading();
                workprogress.setOption(
                        {
                            xAxis: [
                                {
                                    data: res.data.title
                                },
                                {
                                    data: res.data.title
                                }
                            ],

                            series: [
                                {
                                    data: res.data.p1
                                },
                                {
                                    data: res.data.p2
                                }
                            ]
                        }
                );
            });
			/************/
			//
			
			
			
			
			
			//各产品的收入
			   Productincome.setOption({
                title: {
                    show: true,
                    x: 'center',
                    text: '各产品收入'
                },
                legend: {
                	
                    y: 'bottom',
                    data: [],

                },

                series: [
                    {
                        name: '各产品收入',
                        type: 'pie',
                        radius: ['30%', '40%'],
                        legendHoverLink: false, //关闭点击时的高亮
                        hoverAnimation: false,//关闭放大动画
                        label: {
                            show: true,
                            position: 'outside',
                        },
                        labelLine: {
                            show: true,
                            length: 50,
                        },
                        data: [],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
//                                  formatter:function(data){
//                                      return data.name+":" +data.value+"("+(data.percent)+"%)";
//                                  }
                                    formatter:function(data){
                                        return that.NumConvertUtil.getNumConvertMoney(data.value)+"("+(data.percent)+"%)";
                                   }
                                },
                                labelLine: {show: true}
                            }
                        }
                    }

                ]

            });

            Productincome.showLoading();
            this.$http.Productincome().then(function(res){
            	console.log(res)
                Productincome.hideLoading();
                Productincome.setOption({
                    legend: {
                        data: res.data.category
                    },
                    series: [
                        {
                            name: '各产品类型收入',
                            data: res.data.pie,
                        }
                    ]
                });
            });
			/**************/
			
			
			
			
			//地区收入比例
			diquincome.setOption({
		        title: {
		            show: true,
		            x: 'center',
		            text: '本年度地区已签订的合同收入'
		        },
		        tooltip: {
                	formatter:function(data){
                        return data.name+":" +that.NumConvertUtil.getNumConvertMoney(data.value)+"("+(data.percent)+"%)";
                	}
               	},
		        legend: {
		            y: 'bottom',
		            data: [],
		
		        },
		
		        series: [
		            {
		                name: '本年度地区已签订的合同收入',
		                type: 'pie',
		                radius: ['20%', '38%'],
		                legendHoverLink: false, //关闭点击时的高亮
		                hoverAnimation: false,//关闭放大动画
		                label: {
		                    show: true,
		                    position: 'outside',
		
		                },
		                labelLine: {
		                    show: true,
		                    length: 50,
		                },
		                data: [],
		                itemStyle: {
		                    normal: {
		                        label: {
		                            show: true,
		                            formatter:function(data){
		                                return data.name+":" +data.value +"("+(data.percent)+"%)";
		                            }
		                        },
		                        labelLine: {show: true}
		                    }
		                }
		            }
		        ]
		    });
		
		    diquincome.showLoading();
		    this.$http.diquincome().then(function(res){	
		        diquincome.hideLoading();
		        diquincome.setOption({
		            legend: {
		                data: res.data.category
		            },
		            series: [
		                {
		                    name: '本年度地区已签订的合同收入',
		                    data: res.data.pie,
		                }
		            ]
		        });
		    });
			/**********/
			
			
			
			
			
			
			//分区
			fenquincome.setOption({
		        title: {
		            show: true,
		            x: 'center',
		            text: '本年度片区已签订的合同收入'
		        },
		          tooltip: {
                	formatter:function(data){
                        return data.name+":" +that.NumConvertUtil.getNumConvertMoney(data.value)+"("+(data.percent)+"%)";
                    }
                },//此属性鼠标移动上面会显示数据。很好。
		        legend: {
		            y: 'bottom',
		            data: [],
		        },
		        series: [
		            {
		                name: '本年度片区已签订的合同收入',
		                type: 'pie',
		                radius: ['33%', '25%'],
		                legendHoverLink: false, //关闭点击时的高亮
		                hoverAnimation: false,//关闭放大动画
		                label: {
		                    show: true,
		                    position: 'outside',
		                },
		                labelLine: {
		                    show: true,
		                    length: 50,
		                },
		                data: [],
		                itemStyle: {
		                    normal: {
		                        label: {
		                            show: true,
//		                            formatter:function(data){
//		                                return data.name+":" +data.value +"("+(data.percent)+"%)";
//		                            }
		                             formatter:function(data){
                                        return data.name+":"+that.NumConvertUtil.getNumConvertMoney(data.value)+"("+(data.percent)+"%)";
                                   }
		                            
		                        },
		                        labelLine: {show: true}
		                    }
		                }
		            }
		        ]
		    });
		
		    fenquincome.showLoading();
		    this.$http.fenquincome().then(function(res){	
		        fenquincome.hideLoading();
		
		        fenquincome.setOption({
		            legend: {
		                data: res.data.category
		            },
		            series: [
		                {
		                    name: '本年度片区已签订的合同收入',
		                    data: res.data.pie,
		                }
		            ]
		        });
		    });
			/*********/
			
			
			
			
			//质保金情况
			yearWarrantygold.setOption({
	            title: {
	                show: true,
	                x: 'center',
	                text: '年度质保金情况'
	            },
	            legend: {
	                y: 'bottom',
	                data: ['质保金'],
	
	            },
	            xAxis: {
	                data: []
	            },
	            yAxis: {
	
	                type: 'value',
	                axisLabel: {formatter: '{value}'}
	
	            },
	
	            series: [
	                {
	                    barGap: '0%',
	                    name: '质保金',
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
	                                formatter:function(data){
//	                                    return NumConvertUtil.getNumConvertMoney(data.value);
										return data.value
	                                }
	                            }
	                        }
	                    },
	                }
	            ]
	
	        });
	
	
	        yearWarrantygold.showLoading();
	        this.$http.yearWarrantygold().then(function(res){	
	            yearWarrantygold.hideLoading();
	            yearWarrantygold.setOption({
	                xAxis: {
	                    data: res.data.titles
	                },
	                series: [
	                    {
	                        name: '质保金',
	                        data: res.data.pillars
	                    }
	                ]
	            });
	        });
			
			
			
			
			
			
			
			
			
			//质保金应退回金额
			Warrantygoldreturn.setOption({
		            title: {
		                show: true,
		                x: 'center',
		                text: '质保金应退回金额'
		            },
		            legend: {
		                y: 'bottom',
		                data: ['质保金应退回金额'],
		
		            },
		            xAxis: {
		                data: [],
		                axisLabel: {
		                    fontSize: 8
		                }
		            },
		            yAxis: {
		
		                type: 'value',
		                axisLabel: {formatter: '{value}'}
		
		            },
		            series: [
		                {
		                    barGap: '0%',
		                    name: '质保金应退回金额',
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
		                                formatter:function(data){
		                                    return data.value;
		                                }
		                            }
		                        }
		                    },
		                }
		            ]
		        });
		
		        Warrantygoldreturn.showLoading();
		        this.$http.Warrantygoldreturn().then(function(res){
		        	console.log(res)
		            Warrantygoldreturn.hideLoading();
		            Warrantygoldreturn.setOption({
		                xAxis: {
		                    data: res.data.titles
		                },
		                series: [
		                    {
		                        name: '质保金应退回金额',
		                        data: res.data.pillars
		                    },
		
		                ]
		            });
		        });
			
			
			
			
			
			//
		}//method的括号
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
		/*border:1px solid red;*/
	}
</style>