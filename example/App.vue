<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-item" :to="{name: 'Test'}">普通用法</router-link>
      <router-link class="nav-item" :to="{name: 'Slot'}">插槽</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  a {
    margin: 0 10px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
