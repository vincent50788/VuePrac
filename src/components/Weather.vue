<template>
  <div> 
    <h3>
      ==================================今日氣象資訊==================================
    </h3>
    <el-table :data="weather" stripe="true" style="width: 100%" height="500" v-loading="isLoading">
      <el-table-column
        prop="_id"
        label="編號"
      >
      </el-table-column>
      <el-table-column
        prop="dataTime"
        label="時間"
      >
      </el-table-column>
      <el-table-column
        prop="locationName"
        label="位置">
      </el-table-column>
      <el-table-column
        prop="value"
        label="溫度(°C)">
      </el-table-column>
    </el-table>
  </div>
</template>


<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import axios from 'axios';
export default {
  name: 'weather',
  props: {
  },
  data(){
     return {
         weather: [],
         isLoading: false,
         }
  },
  created() {
      this.getWeather()
    },
    mounted() {
      console.log(this)
    },
  methods:{
      getWeather(){
        this.isLoading = true
          axios({
              method: 'get',
              url: 'https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=1f1aaba5-616a-4a33-867d-878142cac5c4'
          }).then(weather =>{
              console.log('weather', weather.data.result.results)
              this.weather = weather.data.result.results
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
