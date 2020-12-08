<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div @click="getChildrenMsg">获取子组件的信息</div>
    <aboutComponent :msg="msg" ref="aboutRef" />
    <div>**********************</div>
    <input type="text" v-model="name" />
    <div @click="addRoute">添加一个路由</div>
    <div>{{vuexA}}</div>
    <div @click="setVuex">修改vuex的内容</div>
    <div @click="timeSetVuex">异步修改vuex的内容</div>
    <div>------------------------------------------</div>
      <input type="text" placeholder="输入username" v-model="username">
      <input type="text" placeholder="输入age" v-model="age">
      <el-button type="success" @click="add">确定添加</el-button>
    <div>------------------------------------------</div>
    <div>列表</div>
    <div v-for="(item,index) in arr" :key="index">
      <p>{{item.username}}</p>
      <p>{{item.age}}</p>

    </div>
    <!-- <div>{{name}}</div> -->
  </div>
</template>


<script lang="ts">
//  function add(arr,username,age){
//       const obj = {username,age};
//       arr.push(obj);
//   }

import aboutComponent from "@/components/AboutComponent.vue";
import { onMounted ,ref,provide} from "vue";
import router from "../router/index";
import store from "../store/index";
import { mapState } from 'vuex';
import { reactive } from 'vue';
export default {
  components: {
    aboutComponent,
  },
  setup(props, content) {
    const msg = ref("prop msg1");
    const name = ref("yue");

console.log(content)
    const arr = reactive([]);
    const username = ref('yue');
    const age = ref('24');
    function add(){
      const obj = {username:username.value,age:age.value};
      arr.push(obj);
    }
  
    provide("provideData", "123456");
    onMounted(() => {
      console.log("onMounted");
      // console.log(vuexDate.vuexA);
    });
    return { msg, name ,arr,username,age,add};
  },
  computed: mapState(['vuexA']),
 
  methods: {
    
    getChildrenMsg() {
      console.log(this.$refs.aboutRef);
    }, //获取子组件信息
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
        },
      ];
      arr.forEach((val) => {
        router.addRoute(val);
      });
    }, //addrouter
    setVuex() {
      const $store: any = store;
      $store.commit('setVuexA','被修改后的内容');
      console.log($store)
    },
    timeSetVuex(){
      const $store: any = store;
      $store.dispatch('timeOut','异步修改后的值')
    }
  },
};
</script>