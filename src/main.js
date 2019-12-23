import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Button } from "ant-design-vue";
import store from "./store";

import "ant-design-vue/dist/antd.less";

Vue.config.productionTip = false;
Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
