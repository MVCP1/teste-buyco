<template>
  <div>
    <PageNav />
    <div class="container">
      <UserCard :list="userIdArray" />
    </div>
    <button @click="$router.push('/cadastro')">+ Cadastrar Novo Usuário</button>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard.vue";
import PageNav from "@/components/PageNav.vue";

export default {
  name: "Listagem",
  components: {
    UserCard,
    PageNav,
  },

  data() {
    return {};
  },

  computed: {
    userIdArray() {
      let result = [];
      for (let i = 0; i < 10; i++) {
        if (
          i + (this.$store.getters.getPage - 1) * 10 <
          this.$store.getters.getData.length
        ) {
          result.push(i + (this.$store.getters.getPage - 1) * 10);
        } else {
          break;
        }
      }
      return result;
    },
  },

  async mounted() {
    this.$store.dispatch("refreshData");
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
}
button {
  width: 25%;
  background-color: #2f1f8d;
  color: white;
  padding: 14px 20px;
  margin-top: 50px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #191846;
}
</style>