import Vue from 'vue'
import App from './App.vue'
import './common/init.css' // 初始化 html 的样式

Vue.config.productionTip = true;


new Vue({
    render: h => h(App)
}).$mount("#app");