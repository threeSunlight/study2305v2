// /***
// 特点:
//  *  1. minix中声明的data会和组件的data进行重合,如果组件中data属性命名和minix命名重合,以组件为准
//  *  2. methods方法也会重合,定义函数名相同的话,以组件为准
//  *  3. 生命周期执行顺序,执行每个生命周期的时候,先执行minix,在执行组件
 // *  4. 两个minix命名冲突时,以后加载的为准
// 使用方式
// 1. 新建minix文件夹
//    2. 在当前文件夹,新建一个minix.js文件
//    3. 编写内容,并导出
//    4. 在组件引入,并注册
//        import aa from '//'
//        minixs: [aa]
//     5.使用的时候 直接调用
//  */

const schoolInfo = {
    data() {
        return{
           habby: '去天安门看升旗',
           schoolName: "我是天安门的学校名称"
        }
    },
    methods: {
        handlerClick() {
            alert('我是minix')
        }
    },
    created() {
        console.log("我是minix的生命周期")
    },
    mounted() {
        console.log("我是minix的---mounted")
    },
}


export default schoolInfo