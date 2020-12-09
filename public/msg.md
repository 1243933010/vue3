提供/注入可以实现爷孙之间的数据传递，vue-class-component下不能使用次方法，也没有setup函数

事件传递形参this可以使用this下的方法否则报错，在setup里面接受形参this也没有自带方法,调用子组件的方法等操作由于setup内部没有this，接受this形参也没有方法，只能在method里的方法才能调用

动态添加路由不是添加数组，只能循环添加对象路由，没有通配符了，可以在beforeEach里面使用hasRoute方法判断将跳转是否有路由(router4.0有另外一种方法，写个不清晰的路由name，如果没找到将要跳转的路由就会跳转到这个不清晰的路由上)

setup又两个参数(props,context),props当传入新的 prop 时，它将被更新,因为 props 是响应式的，你不能使用 ES6 解构，因为它会消除 prop 的响应性,如果需要解构 prop，可以通过使用 setup 函数中的 toRefs 来安全地完成此操作,内部的方法可以抽离到其他js文件里面，引入进来在setup再return出去，子组件如果想在setup里面emit父组件信息，直接调用context.emit传递

ref只是reactive的语法糖，const a = ref('0') 本质是声明了  const a = reactive({value:'0'})，所以函数改变a需要写a.value=xx才能动态改变
reactive 相当于 Vue 2.x 中的 Vue.observable() API ，为避免与 RxJS 中的 observables 混淆因此对其重命名

绑定全局函数方式变了，app.config.globalProperties.vueTest = vueTest,由于setup内部this是undefined，全局函数只能在method里面使用

setup内部使用computed, const nameLen = computed(() => name.value.length),抛出nameLen,可以在外部的computed专门引入vuex数据，setup内部的computed处理各种当前页面数据
watchEffect和watch都是侦听器：watch{
    懒执行副作用；
    更具体地说明什么状态应该触发侦听器重新运行；
    访问侦听状态变化前后的值
}
watchEffect写法：
watchEffect(()=>{
      console.log(name.value,'-----')
      console.log(address.value,'-----')

})
watch在setup的写法(2.0写法依然生效):
watch(name,(newValue,oldValue)=>{
      console.log(newValue,oldValue)
})
3删除过滤器，推荐使用computed替换





(不建议使用此方法写单页面)
Vue-class-component是在3.0之前就出来的一个插件，如果使用Vue-class-component插件写页面,
目前是解构出{Options,Vue}
在@Option方法里面可以写watch监听、注册组件、页面路由等操作

抛出格式export default class Home extends Vue
定义data在class内部写a=11就行
周期函数照旧
使用computed需要在函数前加个get 就能使用computed的getter方法
class内部不需要写methods对象，普通方法和周期函数等同级