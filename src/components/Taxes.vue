<template>
    <div>
    <h3>
      ==================================欠稅的蜜糖老爹們==================================
    </h3>
        <el-table :data="Taxes" stripe="true" style="width: 100%" height="500" v-loading="isloading">
      <el-table-column
        prop="稅目"
        label="稅目"
      >
      </el-table-column>
      <el-table-column
        prop="編號"
        label="編號"
      >
      </el-table-column>
      <el-table-column
        prop="地址"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="納稅義務人"
        label="納稅義務人">
      </el-table-column>
    </el-table>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'taxes',
        data() {
            return {
                isloading: false,
                Taxes: [],
            }
        },
        created(){
            this.getTaxes()
        },
        mounted() {
            console.log(this)
        },
        methods:{
            getTaxes(){
              this.isloading = true
                axios({
                    method: 'get',
                    url: 'https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=0fbd5f16-a4c7-4ec1-a81c-1a153639cfba'
                }).then(Taxes =>{
                    console.log('Taxes', Taxes.data)
                    this.Taxes = Taxes.data.result.results
                }).finally(() => {
                  this.isloading = false
                })
            }
        }
    
    }
</script>

<style lang="scss" scoped>

</style>