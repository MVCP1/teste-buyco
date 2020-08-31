<template>
  <div>
    <div>
      <button class="editar" @click="$router.push('/editar/'+userData.id)">Editar</button>
      <button class="apagar" @click="ab(true)">Apagar</button>
    </div>
    <div class="alert" v-if="confirm">
      <span class="closebtn" @click="ab(false)">&times;</span>
      <strong>Atenção!</strong> Uma vez apagado, não há como recuperar os dados!
      <br />
      <br />
      <button class="apagar" @click="eraseUser(userData.id)">Confirmar</button>
    </div>
    <div class="center">
      <UserDetalhes v-if="userData" :userData="userData" />
    </div>
  </div>
</template>

<script>
import UserDetalhes from "@/components/UserDetalhes.vue";
import axios from "axios";

export default {
  name: "Detalhes",
  components: {
    UserDetalhes,
  },
  data() {
    return {
      userId: "",
      userData: {},
      confirm: false,
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
    async eraseUser(id) {
      await axios.delete("http://localhost:3000/users/" + this.userId);
      this.$store.dispatch("changePage", 1);
      this.$router.push("/");
    },
    ab(value) {
      console.log("sdghfdhjf");
      this.confirm = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
}

.editar {
  background-color: #e6a926;
}
.apagar {
  background-color: #db2316;
}
button {
  width: 10%;
  color: white;
  padding: 14px 20px;
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #691515;
}

.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
  margin: 10px;
  button {
    margin: 0;
  }
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>