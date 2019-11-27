<template>
  <div> 
    <h3>
      ==================================北市測速==================================
    </h3>
    <el-table :data="SpeedLimits" stripe="true" style="width: 100%" v-loading="isLoading" height="500">
      <el-table-column
        prop="no"
        label="編號">
      </el-table-column>
      <el-table-column
        prop="area"
        label="地區"
        width="180">
      </el-table-column>
      <el-table-column
        prop="location"
        label="地點">
      </el-table-column>
      <el-table-column
        prop="road"
        label="路段">
      </el-table-column>
      <el-table-column
        prop="direction"
        label="方向">
      </el-table-column>
      <el-table-column
        prop="functions"
        label="功能">
      </el-table-column>
      <el-table-column
        prop="speed_limit"
        label="限速(km/h)">
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
  import axios from 'axios'
  export default {
    name: 'speed_limit',
    data() {
      return {
        isLoading: false,
        info: [],
      }
    },
    created() {
      this.getList()
    },
    mounted() {
      console.log(this)
    },
    methods: {
      getList() {
        this.isLoading = true
        axios({
          method: 'get',
          url: 'https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=5012e8ba-5ace-4821-8482-ee07c147fd0a'
        }).then(SpeedLimits => {
          console.log('SpeedLimits',SpeedLimits.data.result.results)
          this.SpeedLimits = SpeedLimits.data.result.results
         }).finally(() => {
           this.isLoading = false
         })
      }
    }
  }
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
