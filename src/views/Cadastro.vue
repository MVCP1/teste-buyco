<template>
  <div>
    <h1>Cadastre um novo usuário</h1>
    <div class="center">
      <UserCadastro />
    </div>
  </div>
</template>

<script>
import UserCadastro from "@/components/UserCadastro.vue";

export default {
  name: "Cadastro",
  components: {
    UserCadastro,
  },
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  margin: 10px;
}
</style>