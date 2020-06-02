import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); //把store绑到vue。prototype.$store =store;
                //main.ts传一个store过来
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
