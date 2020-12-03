<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div>{{ a }}</div>
    <div>{{ b }}</div>
    <div @click="setA">修改a</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  }
})
export default class Home extends Vue {
  a = "11";
  b = "22";
  mounted() {
    console.log('11')
    console.log(this)
    console.log(Options)
  }
  setA() {
    this.a = "33";
  }
}
</script>
