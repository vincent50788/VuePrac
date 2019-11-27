<template >
  <div id="app" > 
  <el-menu
    router="true" 
    mode="horizontal" 
    background-color="#0FB6D5" 
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="/speedlimits">
        北市測速
    </el-menu-item>
    <el-menu-item index="/weather">
        今日氣象資訊
    </el-menu-item>
    <el-menu-item index="/Taxes">
        欠稅的蜜糖老爹們
    </el-menu-item>
    </el-menu>
     <router-view></router-view>
  <HelloWorld msg = "HelloWorld"/>
  <el-divider></el-divider>
  <InputTest/>
  <el-divider></el-divider>
    <Adder />
  <el-divider></el-divider>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Adder from './components/Adder.vue'
  import InputTest from './components/InputTest'

  export default {
    name: 'app',
    components: {
      HelloWorld,
      Adder,
      InputTest,
    },  
  }
  
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>