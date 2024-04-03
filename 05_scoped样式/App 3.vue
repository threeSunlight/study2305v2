<template>
   <div>
    <School/>
    <Student ref="students" :schollName="111" ages="158"/>
  
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
           schollName: "积云教育",
           schollAddress: "上庄校区"
        }
      },
      methods: {
      }
   }

</script>
<style lang="scss">
</style>
