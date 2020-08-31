<template>
  <div>
    <h1>Editar</h1>
    <div class="center">
      <UserEditar v-if="userId" />
    </div>
  </div>
</template>

<script>
import UserEditar from "@/components/UserEditar.vue";
import axios from "axios";

export default {
  name: "Editar",
  components: {
    UserEditar,
  },
  data() {
    return {
      userId: "",
      userData: {},
    };
  },
  async mounted() {
    let timer = setInterval(() => {
      this.userId = this.$route.params.id;
      if (this.userId != "") {
        clearInterval(timer);
        this.testErro();
      }
    }, 100);
  },
  methods: {
    async testErro() {
      try {
        this.userData = (
          await axios.get("http://localhost:3000/users/" + this.userId)
        ).data;
      } catch (error) {
        this.$router.push("/erro");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
}
</style>