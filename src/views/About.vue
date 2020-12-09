<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div @click="getChildrenMsg(this)">获取子组件的信息</div>
    <aboutComponent :msg="msg" ref="aboutRef" @getChildren="getChildren" />
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
    <div>------------------------------------------</div>
    <div><input type="text" v-model="address" /></div>
    <!-- <div>{{name}}</div> -->
  </div>
</template>


<script lang="ts">
interface GetChildrenMsginterface{
  $refs: {
    aboutRef: {
      test: Function;
    };
  };
}
import aboutComponent from "@/components/AboutComponent.vue";
import { onMounted, ref, provide, computed, reactive,watch,watchEffect } from "vue";
import { mapState } from "vuex";
import { addRoute, timeSetVuex, setVuex } from "../fnc/about.js";
export default {
  components: {
    aboutComponent,
  },
  setup(props: any,context: any) {
    const msg = ref<string>("prop msg1");
    const name = ref<string>("yue");
    const address = ref<string>("sdsd");

    const nameLen = computed(() => name.value.length);
    const addressCom = computed(() => address.value);
    console.log(props,context)

    const arr: Array<object> = reactive([]);
    const username = ref<string>("yue");
    const age = ref<string>("24");
    function add() {
      const obj: object = { username: username.value, age: age.value };
      arr.push(obj);
    }
    watchEffect(()=>{
      console.log(name.value,'-----')
      console.log(address.value,'-----')

    })
    watch(address,(newValue,oldValue)=>{
      console.log(newValue,oldValue)
    })
    watch(name,(newValue,oldValue)=>{
      console.log(newValue,oldValue)
    })


    provide("provideData", "123456");
    function getChildren(msg: string) {
      console.log(msg)
    }

    onMounted(() => {
      console.log("onMounted");
      const map = new Map();
      map.set('123','456');
      map.set(123,456);
      // console.log(map.get('123'))
      // console.log(map.get(123))
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
      address,
      addressCom,
      getChildren
    };
  },
  computed: mapState(["vuexA"]),
  methods: {
    getChildrenMsg(this: GetChildrenMsginterface): void {
      console.log(this,'this')
      this.$refs.aboutRef.test();
    }, //获取子组件信息
  }
};

</script>
