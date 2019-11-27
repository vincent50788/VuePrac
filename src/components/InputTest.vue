<template>
<div>
    <h1>字串反轉</h1>
    <p>{{ message }}</p>
    <input v-model="message" placeholder="輸入字串">
    <button v-on:click="reverseMessage">Reverse Message</button>
</div>
</template>

<script>
    export default {
    data: function() {
        return {
                message: ""
            };
    },
    methods: {
        reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
    }
  }
    }
</script>

<style lang="scss" scoped>

</style>