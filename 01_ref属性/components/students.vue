<template>
    <div>
        <p>学校名称: </p>
        <p>学生名称: {{ name }}</p>
        <p>学生年龄: {{ age }}</p>
        <p>学生住址: {{ address  }}</p>
        <p>身份证号: {{ id }}</p>
       
    </div>
</template>
<script>
   export default{
    props: ['schollNames','age'],
    data() {
        return{
            name: "张三",
            age: 18,
            address: "河南洛阳",
            id: 14236888
        }
    },
    methods: {
        handlerGetParent(value) {
            console.log('--------');
            console.log(value);  
            console.log('--------');

        }
    }
   }

</script>