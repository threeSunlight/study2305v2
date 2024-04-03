<template>
    <div>
        <p>学生名称: {{ name }}</p>
        <span v-fbind="age">学生年龄:</span>
        <p>学生住址: {{ address  }}</p>
        <p>身份证号: {{ id }}</p>
        <button @click="handlerClick">我是点击事件</button>
    </div>
</template>
<script>

   export default{
    // 简写
    // props: ['schollName', 'ages'],
    // 注册

    // 复杂----完整写法
    // props: {
    //     schollName: {
    //         // 传递参数的类型
    //         type: String,
    //         // 不传参显示默认值
    //         default: '北京大学'
    //     },
    //     ages: {
    //         type: Number,
    //         // 必传参数
    //         required: true
    //     }
    // },
    // 接受参数 对类型进行校验
    // props: {
    //     schollName: [String,Number],
    //     ages: Number
    // },  
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
        },
        handlerClick() {
            alert('我是组件')
        }
    },
    created() {
        console.log("我是组件的生命周期")
    },
    mounted() {
        console.log("我是组件的---mounted")
    },
   }

</script>