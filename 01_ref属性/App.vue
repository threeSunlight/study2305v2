<template>
  <div id="app">
   <!-- 需求: 父组件是学校,
    子组件是学生信息 
      姓名:
      年龄:
      地址:
      身份证号
    -->
   <h1>学校名称: {{ schollName }}</h1>
   <h1>学校地址: {{ schollAddress }}</h1>
   <hr/>
   <h3>学生个人信息</h3>
   <Student ref="students" />
   <button @click="handlerget">获取学生组件的实例</button>
  </div>
</template>
<script>
/***
 * ref的使用方法
 * 1: 获取DOM元素
 *    在组件DOM上添加ref属性,
 *    在js中通过.this.$refs.ref名称 获取实例方式
 * 2. 父子组件传值
 */
 import Student from '@/components/students.vue'
   export default {
    components:{
      Student
    },
      data() {
        return{
           schollName: "积云教育",
           schollName: "上庄校区"
        }
      },
      methods: {
        handlerget(){
          console.log(this.$refs.students);
          this.$refs.students.handlerGetParent("我为子组件传递实例")
          
          
        }
      }
   }

</script>
<style lang="scss">
</style>
