
<template>
    <div>
     <ul class="types">
      <li :class="type ==='-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type ==='+' && 'selected'" @click="selectType('+')">收入</li> 

    </ul>
</div>
</template>

<script lang="ts">
  import Vue from 'vue';
import { Component,Prop } from 'vue-property-decorator';

//1自动提示更智能
//2你不能随便写.tostring()
//3严谨，编译错误不能转化js!
  @Component 
   export default class Types extends Vue{
       type = '-';
       @Prop(Number) xxx: number |undefined;
       //Prop告诉Vue.xxx不是data是prop
       //Number告诉Vue.xxx运行时是个Number
       //xxx属性名
       //number|undefined就是xxx的编译时类型


     selectType(type: string){//type只能是'-'和'+'其中一个
        if (type !== '-' && type !== '+') {
          throw new Error('type is unknown')
        }
        this.type = type
      }

      mounted(){
          if(this.xxx===undefined){
              console.log('没有xxx')
          }else{
              console.log(this.xxx.toString())
          }
      }
   }
 
 
   
</script>


<style lang="scss" scoped>
     .types {
         background: #c4c4c4;
         display: flex;
         text-align: center;
         font-size: 24px;
         > li {
             width: 50%;
             height: 64px;
             display: flex;
             justify-content: center;
             align-items: center;
             position: relative;
             &.selected::after{
                 content: '';
                 position: absolute;
                 bottom: 0;
                 left: 0;
                 width: 100%;
                 height: 4px;
                 background: #333;
             }
         }
     }
</style>
