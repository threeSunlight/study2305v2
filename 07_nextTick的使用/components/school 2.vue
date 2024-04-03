<template>
    <div class="demo">
        <h1>学校名称: {{ schollName }}</h1>
        <h1>学校地址: {{ schollAddress }}</h1>
        <hr/>
     </div>
  </template>
  <script>
     export default {
        data() {
          return{
             schollName: "积云教育",
             schollAddress: "上庄校区"
          }
        },
        methods: {
          getParent(value) {
               console.log(value);
          }
        }
     }
  
  </script>
  <style lang="scss" scoped>
    .demo{
        background-color: pink;
    }
  </style>
  