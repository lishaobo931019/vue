    import axios from 'axios'
    
    
    //axios全局配置
    axios.defaults.baseURL = 'http://47.94.131.160:8080';
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    
    
    
//  var contextPath = "http://39.106.209.182:8080";//测试
//  var contextPath = "http://47.94.131.160:8080";//正式
    
    
    
	export default{
		//
		//
		
		LoginUrl(opt){
			return axios.get('/login.json',{//登陆
				params:{
					staffId:opt.staffId,
					pwd:opt.pwd
				}
			})
		},
		
		//**下面是一些echarts的接口**/
		MonthVisit(){
			return axios.get('/market/chart/month.json')//月度出访次数
		},
		seasonVisit(){
			return axios.get('/market/chart/quarter.json')//季度出访次数
		},
		diquVisit(){
			return axios.get('/market/chart/area.json')//地区出访比例
		},
		pianquVisit(){
			return axios.get('/market/chart/region.json')//片区出访比例
		},
		Contractincome(){
			return axios.get('/contract/chart/income.json')//合同收入情况
		},
		Contractpayment(){
			return axios.get('/contract/chart/paid.json')//合同付款情况
		},
		workprogress(){
			return axios.get('/contract/chart/work/region.json')//各地工作进度
		},
		Productincome(){
			return axios.get('/contract/chart/product.json')//各产品收入
		},
		diquincome(){
			return axios.get('/contract/chart/area.json')//地区收入比例
		},
		fenquincome(){
			return axios.get('/contract/chart/region.json')//分区收入比例
		},
		yearWarrantygold(){
			return axios.get('/contract/chart/deposit/year.json')//年度质保金情况
		},
		Warrantygoldreturn(){
			return axios.get('/contract/chart/deposit/back.json')//质保金回款情况
		},
		biddingNum(){
			return axios.get('/bid/chart/file/amount.json')//中标的数量
		},
		biddingMoney(){
			return axios.get('/bid/chart/total/prices.json')//中标的金额
		},
		biddingProportion(){
			return axios.get('bid/chart/win/weight.json')//中标的占比情况
		},		
		bidCharTenderWeight(){
			return axios.get('/bid/chart/tender/weight.json')//参与投标的中标占比
		},
		
		bidChartWinTotalWeight(){
			return axios.get('bid/chart/total/weight.json')//市场总额的中标占比情况
		},
		bidChartWinWeight(){
			return axios.get('bid/chart/category/weight.json')//各公司中标占比
		},
		
		
		/***********/
		
		/***市场***/
		getMarketList(file){
			return axios.post("/market/list.json", file, {//市场信息列表
	            headers: {
	                'Content-Type': 'multiple/form-data'
	            }
	        })
		},
		getMarketTypeinfo(){
			return axios.get("/market/select/category.json")//获取市场类别信息
		},
		getMarketdetail(id){
			return axios.get("/market/detail.json",{//市场详情信息
				params:{
					id:id
				}
			})
		},
		ContactListUrl(file){
			return axios.post("/contacts/list.json",file,{//获取联系人信息列表
				headers:{
				'Content-Type': 'multiple/form-data'
				}
			})
		},
		ContactsdetailUrl(id){
			return axios.get("/contacts/detail.json",{//获取联系人详情信息
				params:{
					id:id
				}
			})
		},
		Investigator(){
			return axios.post("user/market/list.json")//调查人
		},
		SaveMarketUrl(opt){
			return axios.post("/market/save.json",{//添加市场跟踪信息
				surveyObject:opt.surveyObject,//拜访对象
				responsiblePerson:opt.responsiblePerson,//责任人
				workCategory:opt.workCategory,//任务类型
				feedbackCategory:opt.feedbackCategory,//反馈类型
				area:opt.area,//地区
				region:opt.region,//片区
				surveyStartTime:opt.surveyStartTime,//拜访时间
				surveyDays:opt.surveyDays,//拜访天数
				workContent:opt.workContent,//任务内容
				feedback:opt.feedback,//反馈情况
				comment:opt.comment,//备注
				investigators:opt.investigators,//调查人
//				contactsList:opt.contactsList,//添加
				id:opt.id//uuid
			})
		},
		marketDetail(file){
			return axios.post('/market/detail.json',file,{//市场详情
					headers:{
						'Content-Type': 'multiple/form-data'
					}
			})
		},
		updateMarketUrl(opt){
			return axios.post('/market/update.json',{//编辑页面的提交按钮
				surveyObject:opt.surveyObject,//拜访对象
				responsiblePerson:opt.responsiblePerson,//责任人
				workCategory:opt.workCategory,//任务类型
				feedbackCategory:opt.feedbackCategory,//反馈类型
				area:opt.area,//地区
				region:opt.region,//片区
				surveyStartTime:opt.surveyStartTime,//拜访时间
				surveyDays:opt.surveyDays,//拜访天数
				workContent:opt.workContent,//任务内容
				feedback:opt.feedback,//反馈情况
				comment:opt.comment,//备注
				investigators:opt.investigators,//调查人
//				contactsList:opt.contactsList,//添加
				id:opt.id//uuid
			})
		},
		
		
		
		
		
		//合同接口
		Contractlist(file){
			return axios.post('/contract/list.json',file)//合同列表
		},
		ContractTypeinfo(){
			return axios.get("contract/select/category.json")//获取合同类别信息
		},
		ContractdetailUrl(id){
			return axios.get("/contract/detail.json",{//合同详情信息
				params:{
					id:id
				}
			})
		},
		ContractAddUrl(opt){
			return axios.post('/contract/add.json',{//添加合同
				id:opt.id,
				createDate:opt.createDate,//新增时间
				contractCode:opt.contractCode,//项目编号
				contractCompany:opt.contractCompany,//合同单位
				projectName:opt.projectName,//工程名称
				depositBackTime:opt.depositBackTime,//质保金退回时间
				completeAmount:opt.completeAmount,//已施工数量
				totalQuantity:opt.totalQuantity,//应该施工总量
				paid:opt.paid,//已付款
				totalPrice:opt.totalPrice,//合同总价
				preSignDate:opt.preSignDate,//预计签约时间
				signDate:opt.signDate,//签约时间
				deposit:opt.deposit,//质保金总额
				area:opt.area,//地区
				region:opt.region,//片区
				taxCategory:opt.taxCategory,//发票类型
				note:opt.note,//开票备注
				comment:opt.comment,//备注
				paymentList:opt.paymentList,//第1个表格
				contractProductList:opt.contractProductList//第二个表格
			})
		},
		ContractUpdateUrl(opt){
			return axios.post("contract/update.json",{//更新编辑合同
				id:opt.id,
				contractCode:opt.contractCode,//项目编号
				contractCompany:opt.contractCompany,//合同单位
				projectName:opt.projectName,//工程名称
				depositBackTime:opt.depositBackTime,//质保金退回时间
				completeAmount:opt.completeAmount,//已施工数量
				totalQuantity:opt.totalQuantity,//应该施工总量
				paid:opt.paid,//已付款
				totalPrice:opt.totalPrice,//合同总价
				preSignDate:opt.preSignDate,//预计签约时间
				signDate:opt.signDate,//签约时间
				deposit:opt.deposit,//质保金总额
				area:opt.area,//地区
				region:opt.region,//片区
				taxCategory:opt.taxCategory,//发票类型
				note:opt.note,//开票备注
				comment:opt.comment,//备注
				paymentList:opt.paymentList,//第1个表格
				contractProductList:opt.contractProductList,//第二个表格
				amount:opt.amount,
				summation:opt.summation,
				createDate:opt.createDate//新增时间
//				depositPayTime:opt.depositPayTime
			})
		},
		
		
		
		
		
		
		
		//招投标
		bidListUrl(file){
			return axios.post('bid/list.json',file)//招投标列表
		},
		contractSelectCategory(){
			return axios.post('contract/select/category.json')//类别信息
		},
		bidAuditCategory(){
			return axios.post('/category/bid/audit.json')
		},
		bidDetail(id){
			return axios.get("/bid/detail.json",{//招投标详情信息
				params:{
					id:id
				}
			})
		},
		allCategory(){
			return axios.post('/category/all.json')//添加招投标类别信息
		},
		bidAddUrl(opt){
			return axios.post('/bid/add.json',{//添加招投标信息
				area:opt.area,
				bidAmount:opt.bidAmount,
				bidCompany:opt.bidCompany,
				bidProject:opt.bidProject,
				bidSummary:opt.bidSummary,
				bidTime:opt.bidTime,
				comment:opt.comment,
				id:opt.id,
				region:opt.region,
				status:opt.status,
				bidPkgList:opt.bidPkgList
			})
		},
		bidUpdateUrl(opt){
			return axios.post('/bid/update.json',{//修改招投标
				area:opt.area,
				bidAmount:opt.bidAmount,
				bidCompany:opt.bidCompany,
				bidProject:opt.bidProject,
				bidSummary:opt.bidSummary,
				bidTime:opt.bidTime,
				comment:opt.comment,
				id:opt.id,
				region:opt.region,
				status:opt.status,
				bidPkgList:opt.bidPkgList
			})
		},
		
		
		//用户的
		
		UserListUrl(file){
			return axios.get("/user/list.json",file,{//管理用户
				headers:{
				'Content-Type': 'multiple/form-data'
				}
			})
		},
		
		UserDetail(id){
			return axios.get( "/user/detail.json",{//用户详情
				params:{
					id:id
				}
			})
		},
		
		MarketSearchCategory(){
			return axios.post('market/select/category.json')//添加用户中的下拉列表
		},
		
		staffIdGenerateUrl(){
			return axios.post('user/staff/generate.json')//添加用户工号
		},
		
		UserAddUrl(opt){
			return axios.post('user/add.json',{//添加用户接口
				area:opt.area,
				comment:'',//字段必须为空
				isDuty:'',//同上
				mobile:opt.mobile,
				name:opt.name,
				pwd:opt.pwd,
				pwdConfirm:opt.pwdConfirm,
				region:opt.region,
				staffId:opt.staffId
			})
		},
		contactAddUrl(opt){
			return axios.post('contacts/add.json',{//添加联系人接口
				comment:opt.comment,
				company:opt.company,
				email:opt.email,
				id:opt.id,
				importanceLevel:opt.importanceLevel,
				intro:opt.intro,
				job:opt.job,
				mobile:opt.mobile,
				name:opt.name,
				inputUser:opt.inputUser,//录入人
				securityLevel:opt.securityLevel
			})
		},
		contactUpdateUrl(opt){
			return axios.post('/contacts/update.json',{//更新联系人
				comment:opt.comment,
				company:opt.company,
				email:opt.email,
				id:opt.id,
				importanceLevel:opt.importanceLevel,
				intro:opt.intro,
				job:opt.job,
				mobile:opt.mobile,
				name:opt.name,
				inputUser:opt.inputUser,//录入人
				securityLevel:opt.securityLevel
			})
		},
		
		
		
		
		
		/**
		 * file
		 */
		downloadWebFile:"http://47.94.131.160:8080/web/file/download/",//下载
		
		imageFileUrl:"http://hk-energy02.oss-cn-beijing.aliyuncs.com/",
		
		previewFileUrl:"http://ow365.cn/?i=15238&furl=http://hk-energy02.oss-cn-beijing.aliyuncs.com/",//查看
		
		uploadServerFile:"http://47.94.131.160:8080/web/file/upload/",
		
		initFile:"http://47.94.131.160:8080/web/file/init/",
		
		deleteFile:"http://47.94.131.160:8080/web/file/delete/"
	}


//