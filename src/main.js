// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $http from './urlPath.js'
import echarts from 'echarts'
import 'babel-polyfill'//兼容IE
import $validate from './validate.js'//引入表单验证文件
import NumConvertUtil from './NumConvertUtil'//过滤器
import uuid from './uuid'//uuid
import ElementUI from 'element-ui';//引入element-ui组件
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
//全局加载urlPath
Object.defineProperty(Vue.prototype, '$http', {value: $http})

//全局加载echarts
Object.defineProperty(Vue.prototype, 'echarts', {value: echarts})

//全局加载NumConvertUtil
Object.defineProperty(Vue.prototype, 'NumConvertUtil', {value: NumConvertUtil})

//全局加载uuid
Object.defineProperty(Vue.prototype, 'uuid', {value: uuid})

//全局加载uuid
Object.defineProperty(Vue.prototype, '$', {value: $})

//全局加载ui组件
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
