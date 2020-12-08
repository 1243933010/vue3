import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';



router.beforeEach((to: any,from,next)=>{
    console.log(to)
    console.log(from)
    if(!router.hasRoute(to.name)){
      router.push('/*')
    }
    next()
})

console.log(App)
function vueTest(){
  console.log('111')
}
const app =  createApp(App);
app.config.globalProperties.vueTest = vueTest;
app.use(vueTest).use(ElementPlus).use(store).use(router).mount('#app')
