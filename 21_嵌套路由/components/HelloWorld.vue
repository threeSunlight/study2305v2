<template>
    <div>
        你好呀
        <button @click="$router.push({
            path: '/word/postId/news'
        })">跳转到新闻页面</button>
        <router-view></router-view>
    </div>
</template>
<script>
 export default {
    created() {
       console.log(this.$route)
    },
 }


</script>