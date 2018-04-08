<template>
		<el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
				  	<el-form-item label="拜访对象" >
				  	<el-input></el-input>
				  </el-form-item>
				  <el-form-item label="责任人">
				  	<el-input></el-input>
				  </el-form-item>
			  <el-form-item label="任务类型">
			    <el-select v-model="sizeForm.region" placeholder="无">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			   <el-form-item label="返回类型">
			    <el-select v-model="sizeForm.region" placeholder="无">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			   <el-form-item label="所在地区">
			    <el-select v-model="sizeForm.region" placeholder="无">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			   <el-form-item label="所在片区">
			    <el-select v-model="sizeForm.region" placeholder="无">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="调查时间">
			    <el-col :span="11">
			      <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
			    </el-col>
			    <el-col class="line" :span="2">-</el-col>
			    <el-col :span="11">
			      <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date2" style="width: 100%;"></el-date-picker>
			    </el-col>
			  </el-form-item>
			  <el-form-item size="large">
			    <el-button type="primary" @click="onSubmit">查询</el-button>
			  </el-form-item>
	</el-form>
</template>

<script>
	export default {
    data() {
      return {
        sizeForm: {
          name: '拜访对象',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  };
	
</script>

<style>
	/*选择框左对齐*/
	.el-form-item__content .el-select--mini{
		float: left;
	}
	.el-button--large{
		float: left;
	}
</style>