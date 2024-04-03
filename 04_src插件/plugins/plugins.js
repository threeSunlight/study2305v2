// 导出
// input 框 v-module:value
export default {
    // 初始化函数
    install(Vue) {
        //定义全局指令
        Vue.directive('fbind',{
            //指令与元素成功绑定时（一上来）
            bind(element,binding){
                console.log(element);
                console.log(binding);
                element.innerText ='学生年龄:'+ binding.value * 10
            },
            //指令所在元素被插入页面时
            inserted(element,binding){
                element.focus()
            },
            //指令所在的模板被重新解析时
            update(element,binding){
                element.innerText = binding.value* 10
            }
        })

    }
}