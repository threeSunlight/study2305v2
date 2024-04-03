<template>
   <div class="demo">
      <h1>学校名称: {{ schollName }}</h1>
      <h1>学校地址: {{ schollAddress }}</h1>
      <hr />
      <button v-on:click="show = !show">
         点击实现淡入淡出
      </button>
      <transition name="fade">
         <p v-if="show">hello</p>
      </transition>
      <transition name="slide-fade">
         <p v-if="show">hello</p>
      </transition>
   </div>
</template>
<script>
export default {
   data () {
      return {
         show: true,
         schollName: "积云教育",
         schollAddress: "上庄校区"
      }
   },
   methods: {
      getParent (value) {
         console.log(value);
      }
   }
}

</script>
<style lang="scss" scoped>
.demo {
   background-color: pink;
}

.fade-enter-active,
.fade-leave-active {
   transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
   opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
  