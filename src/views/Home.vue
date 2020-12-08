<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld @listenHello="listenHello" ref="hello" msg="Welcome to Your Vue.js + TypeScript App" />
    <div>{{ a }}</div>
    <div>{{ b }}</div>
    <div>{{ c }}</div>
    <input type="text" ref="input">
    <div @click="setA">修改a</div>
    <div @click="addRoute">添加一个路由</div>
    <div @click="getHello">获取hello组件信息</div>
    <div @click="goTest">跳转到test</div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import router from '../router/index';
@Options({
  watch: {
    a() {
      console.log(this.a);
    },
  },
  components: {
    HelloWorld,
  },
  // provide:{
  //   provideData:'123'
  // },//提供/注入
  beforeRouteLeave(){
    console.log('beforeRouteLeave')
  },
  beforeRouteEnter(){//能模拟onshow
    console.log('beforeRouteEnter')
    
  },
  beforeRouteUpdate(){
    console.log('beforeRouteUpdate')
  },
  
})
export default class Home extends Vue {
  a = "11";
  b = "22";
  
  mounted() {
    console.dir('mounted2'); 
  }
  
  get c() {
    return this.a + this.b;
  }//computed
  setA() {
    this.a = "33";
  }//set data
  listenHello(e: any){
    console.log(e)
  }//emit
  getHello(){
    const helloComponent: any =this.$refs.hello;
    helloComponent.helloTest();
  }//ref
  goTest(){
    this.$router.push('test')
  }//go to router
  addRoute() {
    const arr = [
      {
        path: "/test",
        name: "Test",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Test.vue"),
      },
       {
        path: "/test2",
        name: "Test2",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Test2.vue"),
      }
    ];
    arr.forEach(val=>{
      router.addRoute(val);
    })
  }//addrouter
}


// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// import { onMounted } from "vue";
// import { ref } from "vue";

// export default {
//   components: {
//     HelloWorld
//   },
//   setup() {
//   const a = ref(0);
//   const b = ref(0);
//   function setA(){
//     a.value+=1;
//   }
//     onMounted(() => {
//       console.log("onMounted");
//     });
//     return {setA, a,b };
//   },
//   mounted(){
//       console.log("mounted");
//   }
// };
</script>
