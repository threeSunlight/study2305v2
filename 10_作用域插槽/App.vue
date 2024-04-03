<template>
   <div>
    <School  ref="school">
      <!-- 埋土 -->
       <h1>两岸猿声啼不住,轻舟已过万重山</h1>
       <h1 slot="wudi">前端很好,大家加油</h1>
       <h1 slot="later">ddddddd</h1>
     
    </School>
    <button @click="handlerGetParent">控制父组件的显示与隐藏</button>
    <Student ref="students" :schollName="111" ages="158">
        <template slot-scope="{games}" slot="before">
          {{ games }}
			    	<h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
			  </template>
    </Student>
  </div>
</template>
<script>
 import School from '@/components/school.vue'
 import Student from '@/components/students.vue'
   export default {
    components:{
      School,
      Student
    },
      data() {
        return{
          isShow: false,
           schollName: "积云教育",
           schollAddress: "上庄校区"
        }
      },
      methods: {
          handlerGetParent() {
            this.isShow=!this.isShow
            //  diff算法 异步
            // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
            this.$nextTick(() => {
              this.$refs.school.getParent('xuexiao')
              console.log(this.$refs.school, '学校');
            })
           
            console.log(this.$refs.students, '学生');
          }
      }
   }

</script>
<style lang="scss">
</style>
