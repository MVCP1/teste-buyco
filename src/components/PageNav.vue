<template>
  <div>
    <div class="container">
      <button class="darker" @click="$store.dispatch('changePage', 1)">❮❮</button>
      <button @click="$store.dispatch('changePage', $store.getters.getPage - 1)">❮</button>
      <h2>Página {{$store.getters.getPage}}</h2>
      <button @click="$store.dispatch('changePage', $store.getters.getPage + 1)">❯</button>
      <button class="darker" @click="$store.dispatch('changePage',-1)">❯❯</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNav",

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 40px;
  * {
    display: inline;
  }
  background-color: #312fb3;
  color: #ffffff;
  h2 {
    margin-left: 10px;
    margin-right: 10px;
  }
  button {
    width: 50px;
    height: 50px;
    background-color: #2f1f8d;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 20px;
  }
  button:hover {
    background-color: #191846;
  }
  .darker {
    background-color: #291c72;
  }
}
</style>