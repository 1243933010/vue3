<template>
  <div class="hello">
      <div>about children</div>
      <div>{{msg}}</div>
      <div>{{childData}}childData</div>
    <!-- <h1>{{ msg }}</h1>
     <el-button @click="helloBtn">默认按钮</el-button> -->
  </div>
</template>

<script lang='ts'>
import { inject } from 'vue'
export default {
    props:{
        msg:String
    },
    setup(){
        const childData = inject('provideData');
        return {childData}
    }
}
</script>