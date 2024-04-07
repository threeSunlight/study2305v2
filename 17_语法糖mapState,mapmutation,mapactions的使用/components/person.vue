<template>
    <!-- 
       个人模块: 
                个人姓名:
                个人年龄:
                个人喜好:
                个人素质:无下限,上限及其低
     -->
    <div>
        <h1>个人姓名: {{ name  }}</h1>
        <h1>个人年龄: {{ age }}</h1>
        <h1>个人喜好: {{ habby }}</h1>
        <h1>个人素质: 不详</h1>
        <h3>放大年龄: {{ bigAge }}</h3>
        <button @click="updateAge">修改年龄</button>
        <button @click="updateHabby">修改爱好</button>
    </div>
</template>
<script>
import { mapState, mapActions,mapMutations, mapGetters } from 'vuex';
  export default {
    data() {
        return {
            
        }
    },
    computed:{
      ...mapState('person', ['name','age', 'habby']),
      ...mapGetters(['bigAge'])
    },  
    methods: {
      ...mapActions('person', ['updateAges']),
    
      ...mapMutations('person', ['UPDATE_HABBY']),
      updateAge() {
        // 点击年龄传递参数,进行修改
        this.updateAges(13)
      },
      updateHabby() {
        this.UPDATE_HABBY()
      }
    }
  }
</script>
<style>
</style>