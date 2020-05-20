<template>
  <div id="app" :class="`${$store.state.theme}-theme`">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <button
      class="btn"
      @click="$store.commit('toggleTheme')"
    >
      切换主题
    </button>
    <p>{{ $store.state.theme }}</p>
  </div>
</template>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.light-theme {
  background: linear-gradient(30deg, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1), rgba(0, 0, 0, 0.3));
}
.dark-theme {
  background: linear-gradient(-30deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 1));
}
.btn {
  outline: none;
  border: none;
  color: #fff;
  background-color: seagreen;
  border-radius: 3px;
  padding: 6px 12px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}
.btn:focus {
  filter: brightness(120%);
}
</style>
