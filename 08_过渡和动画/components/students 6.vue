<template>
    <div class="demo">
        <p>学生名称: {{ name }}</p>
        <span>学生年龄:</span>
        <p>学生住址: {{ address  }}</p>
        <p>身份证号: {{ id }}</p>
        <button @click="handlerClick">我是点击事件</button>
    </div>
</template>
<script>

   export default{
   
    data() {
        return{
            name: "张三",
            age: 18,
            address: "河南洛阳",
            id: 14236888
        }
    },
    methods: {
      
    }
   }

</script>
<style lang="scss" scoped>
    .demo {
        background-color: skyblue;
    }
</style>