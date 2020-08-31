<template>
  <div id="app">
    <div id="nav">
      <button class="listagem" @click="$router.push('/')">Lista de Usuários</button>
    </div>
    <router-view />
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
  padding: 30px;
}

.listagem {
  font-size: 25px;
  font-weight: bold;
  text-decoration: underline;
  width: 20%;
  background-color: rgb(255, 255, 255);
  color: #0d103d;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<script>
import axios from "axios";

export default {
  async mounted() {
    this.$store.dispatch("refreshData");
  },
};
</script>