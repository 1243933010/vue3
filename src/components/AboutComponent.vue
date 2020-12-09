<template>
  <div class="hello">
      <div>about component</div>
      <div>{{msg}}</div>
      <div>{{childData}}childData</div>
      <h1>{{ msg }}</h1>
     <el-button @click="helloBtn">默认按钮</el-button>
     <div>-----------------------------------</div>
     <children />
  </div>
</template>

<script lang='ts'>
import children from '@/components/AboutChildren.vue';
import { inject } from 'vue'
export default {
    props:{
        msg:String
    },
    components:{
        children
    },
    setup(props: object,context: {emit: Function}){
        console.log(props)
        console.log(context.emit)
        const childData = inject('provideData');
        function helloBtn(): void{
            context.emit('get-children','123')
        }
        return {childData,helloBtn}
    }
}
</script>