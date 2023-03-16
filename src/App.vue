<template>
  <div id="app">
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet">
      </head>
      <header-component></header-component>
    <router-view></router-view>
  </div>
</template>


<script>
import headerComponent from "../src/components/common/header.vue"
export default {
  name: 'app',
  components: {
    'header-component' : headerComponent,
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss">



#app {
  font-family: 'Roboto', sans-serif;
}
h1 {
  font-weight: 300;
}

</style>
