    import axios from 'axios'
    
    
    //axios配置
    axios.defaults.baseURL = 'http://39.106.209.182:8080';
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    
    
    
//  var contextPath = "http://39.106.209.182:8080";//测试
    
    
    
	export default{
		MonthVisit(){
			return axios.get('/market/chart/month.json')//月度出访次数
		}
	}
