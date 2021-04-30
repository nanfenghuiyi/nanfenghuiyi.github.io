import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import 'jquery'
import store from "./store/index";
import "amfe-flexible";
import touch from 'vue-directive-touch'; // 滑动事件

import {
  Popup,
  Toast,
  RadioGroup,
  Radio,
  PullRefresh,
  List,
  Cell,
  CellGroup,
  Icon,
  Popover,
  Overlay,
  Loading,
  NavBar
} from 'vant';

Vue.use(Popup);
Vue.use(Toast);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(PullRefresh);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Popover);
Vue.use(Overlay);
Vue.use(Loading);
Vue.use(NavBar);

// Object.keys(filters).forEach((key) => {
//   Vue.filter(key, filters[key]);
// });

Vue.config.productionTip = false;


Vue.use(touch);

new Vue({
  // 在此处生成Vue实例，是为了避免在IOS端第一次请求拿不到token
  // mode: 'hash', // 打包测试需要
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");