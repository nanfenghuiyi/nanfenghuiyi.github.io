import Vue from "vue"
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "笔记",
    component: resolve => require(["@/views/note"], resolve)
  },
  {
    path: "/note/noteDetail",
    name: "笔记详情",
    components: {
      "subPage": resolve => require(["@/views/noteDetail"], resolve)
    }
  },
]
export default new Router({
  // base: "/vue-wechat/",
  routes,
})