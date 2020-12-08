<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div @click="getChildrenMsg">获取子组件的信息</div>
    <aboutComponent :msg="msg" ref="aboutRef" />
    <div>**********************</div>
    <input type="text" v-model="name" />
    <span>{{ nameLen }}</span>
    <div @click="addRoute">添加一个路由</div>
    <div>{{ vuexA }}</div>
    <div @click="setVuex">修改vuex的内容</div>
    <div @click="timeSetVuex(name)">异步修改vuex的内容</div>
    <div>------------------------------------------</div>
    <input type="text" placeholder="输入username" v-model="username" />
    <input type="text" placeholder="输入age" v-model="age" />
    <el-button type="success" @click="add">确定添加</el-button>
    <div>------------------------------------------</div>
    <div>列表</div>
    <div v-for="(item, index) in arr" :key="index">
      <p>{{ item.username }}</p>
      <p>{{ item.age }}</p>
    </div>
    <!-- <div>{{name}}</div> -->
  </div>
</template>


<script lang="ts">
import aboutComponent from "@/components/AboutComponent.vue";
import { onMounted, ref, provide, computed, reactive } from "vue";
import router from "../router/index";
import store from "../store/index";
import { mapState } from "vuex";
import { addRoute, timeSetVuex, setVuex } from "../fnc/about.js";
export default {
  components: {
    aboutComponent,
  },
  setup(props, content) {
    const msg = ref<string>("prop msg1");
    const name = ref<string>("yue");
    const nameLen = computed(() => name.value.length);

    const arr = reactive([]);
    const username = ref("yue");
    const age = ref("24");
    function add() {
      const obj = { username: username.value, age: age.value };
      arr.push(obj);
    }
    provide("provideData", "123456");
    onMounted(() => {
      console.log("onMounted");
      console.log(addRoute);
    });

    return {
      msg,
      name,
      nameLen,
      arr,
      username,
      age,
      add,
      addRoute,
      setVuex,
      timeSetVuex,
    };
  },
  computed: mapState(["vuexA"]),
  methods: {
    getChildrenMsg() {
      console.log(this.$refs.aboutRef);
    }, //获取子组件信息
    //addrouter
  },
};
</script>