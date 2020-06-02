import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); //把store绑到vue。prototype.$store =store;
                //main.ts传一个store过来
const store = new Vuex.Store({
  state:{ //data
    count:0 
  },
  mutations: {  //methods
   increment(state,n: number) {
     state.count +=n;
   }
  }
});

export default store;
