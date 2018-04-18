    import axios from 'axios'
    
    
    //axios配置
    axios.defaults.baseURL = 'http://47.94.131.160:8080';
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    
    
    
//  var contextPath = "http://39.106.209.182:8080";//测试
//  var contextPath = "http://47.94.131.160:8080";//正式
    
    
    
	export default{
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
		}
	}
