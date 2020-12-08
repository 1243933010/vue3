
import router from '@/router/index'
import store from '@/store/index'


export function timeSetVuex(str:string) {
  store.dispatch('timeOut', str)
}

export function setVuex() {
  store.commit('setVuexA', '被修改后的内容');
}


export function addRoute() {
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
}