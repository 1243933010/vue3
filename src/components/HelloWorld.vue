<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{provideData}}provideData</div>
    <slot>slot</slot>
     <el-button @click="helloBtn">默认按钮</el-button>
  </div>
</template>

<script lang="ts">
// import { emit } from 'process';
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  },
  inject:['provideData'],
  mounted(){
    console.log('****')
    console.log(this)
  }
})
export default class HelloWorld extends Vue {
  msg!: string
  helloBtn(){
    // console.log(this.$emit)
    this.$emit('listen-hello',{a:11})
  }
  helloTest(){
    console.log('test')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
