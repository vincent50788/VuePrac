<template>
    <div style="margin:50px;">
      <h1>加加</h1>
      <h3>{{count}}</h3>
      <el-button type="primary" round v-on:click="add">+1</el-button>
    </div>
</template>

<script>
    export default {
        name:'Adder',
        data:function() {
return {
         count : 0
        };
},
        methods:{
            add(){
                this.count += 1;
            }
        },
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
