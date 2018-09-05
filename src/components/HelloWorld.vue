<template>
  <div class="hello">
  	<!--登录框-->
		<!--<div class="login">
		    <h1>航凯电力</h1>
		    <form id="loginFrom" method="get" >
		        <input type="text" id="staffId" v-model="staffId" placeholder="工号" required="required"/>
		        <input type="password" id="pwd" v-model="pwd" placeholder="密码" required="required"/>
		        <button type="button" class="btn btn-primary btn-block btn-large" @click="loginSubmit()">登录</button>
		    </form>
		</div>-->
		<el-form :model="loginForm"  label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="staffId">
      <el-input type="text" v-model="loginForm.staffId" auto-complete="off" placeholder="工号"></el-input>
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input type="password" v-model="loginForm.pwd" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="loginSubmit()" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
		
		
		
		
		
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    	logining: false,
      checked: true,
    	loginForm: {
        	staffId: null,
        	pwd: null
      }
    }
  },
  methods:{
  	loginSubmit(){
  		console.log(1)
  		
  		var that = this;
  		
    	//判断登陆
  		this.$http.LoginUrl({staffId:this.loginForm.staffId,pwd:this.loginForm.pwd}).then(function(data){
  			console.log(data)
  								if (data.data!='') {
  									  var username= that.loginForm.staffId;
            				  var userpwd= that.loginForm.pwd;
  									
  										localStorage.setItem('name',username);
            					localStorage.setItem('pass',userpwd);
  									
	  								that.$router.push({path:'Home'});
                  }else{
                  	alert("账号或者密码不正确，");
                  }
  			
  		})
  		
  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	.login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
	}
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .remember {
    margin: 0px 0px 35px 0px;
  }


</style>
