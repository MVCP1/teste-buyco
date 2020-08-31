<template>
  <div class="parent">
    <table class="userList" v-if="list">
      <tr>
        <th class="sort" @click="$store.dispatch('sortDataId')">Id</th>
        <th class="sort" @click="$store.dispatch('sortDataName')">Nome</th>
        <th>Email</th>
      </tr>
      <tr
        v-for="i in list"
        :key="i"
        @click="$router.push('/detalhes/' + ($store.getters.getData[i].id))"
      >
        <td>{{$store.getters.getData[i].id}}</td>
        <td>{{$store.getters.getData[i].firstName}} {{$store.getters.getData[i].lastName}}</td>
        <td>{{$store.getters.getData[i].email}}</td>
      </tr>
    </table>
    <!-- <div class="card">
            <h2>{{$store.getters.getData[cardId].id}}</h2>
            <h2>{{$store.getters.getData[cardId].firstName}} {{$store.getters.getData[cardId].lastName}}</h2>
            <h2>{{$store.getters.getData[cardId].email}}</h2>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "UserCard",
  data() {
    return {};
  },
  props: {
    cardId: Number,
    list: Array,
  },
};
</script>

<style lang="scss" scoped>
.userList {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80vw;
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  th.sort:hover {
    background-color: #241f64;
  }
  tr {
    .sort {
      cursor: pointer;
    }
    th {
      border: 1px solid #ddd;
      padding: 8px;
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #261f86;
      color: white;
    }
    td {
      border: 1px solid #ddd;
      padding: 8px;
      cursor: pointer;
    }
  }
}
</style>