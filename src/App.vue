<template>
  <div>
    <router-view/>

  </div>
</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";
body{
  line-height: 1.5;
}
a{
  text-decoration: none;
  color: inherit;
}
#app {
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #333;
  line-height: 1.5;
}

</style>
