<template>
  <div>
    <form>
      <label for="fname">Nome</label>
      <br />
      <input type="text" v-model="newUser.firstName" />
      <br />
      <h6 v-if="problems.firstName">Nome inválido</h6>
      <br />

      <label for="lname">Sobrenome</label>
      <br />
      <input type="text" v-model="newUser.lastName" />
      <br />
      <h6 v-if="problems.lastName">Sobrenome inválido</h6>
      <br />

      <label for="lname">Email</label>
      <br />
      <input type="text" v-model="newUser.email" />
      <br />
      <h6 v-if="problems.email">Email inválido</h6>
      <br />
      <label for="fname">Telefone</label>
      <br />
      <input type="text" v-model="newUser.phone" />
      <br />
      <h6 v-if="problems.phone">Telefone inválido</h6>
      <br />
      <br />
      <div class="box">
        <label for="fname">Cep</label>
        <br />
        <input type="text" v-model="newUser.address.zipCode" />
        <br />
        <h6 v-if="problems.zipCode">Cep inválido</h6>
        <br />

        <label for="fname">Cidade</label>
        <br />
        <input type="text" v-model="newUser.address.city" />
        <br />
        <h6 v-if="problems.city">Cidade inválida</h6>
        <br />

        <label for="fname">Endereço</label>
        <br />
        <input type="text" v-model="newUser.address.streetAddress" />
        <br />
        <h6 v-if="problems.streetAddress">Endereço inválido</h6>
        <br />

        <label for="fname">País</label>
        <br />
        <input type="text" v-model="newUser.address.country" />
        <br />
        <h6 v-if="problems.country">País inválido</h6>
        <br />

        <label for="fname">Estado</label>
        <br />
        <input type="text" v-model="newUser.address.state" />
        <br />
        <h6 v-if="problems.state">Estado inválido</h6>
        <br />

        <label for="fname">Latitude</label>
        <br />
        <input type="text" v-model="newUser.address.geo.latitude" />
        <br />
        <h6 v-if="problems.latitude">Latitude inválida</h6>
        <br />

        <label for="fname">Longitude</label>
        <br />
        <input type="text" v-model="newUser.address.geo.longitude" />
        <br />
        <h6 v-if="problems.longitude">Longitude inválida</h6>
        <br />
      </div>
      <br />
    </form>
    <button @click="confirmar()">Confirmar</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserCadastro",
  data() {
    return {
      newUser: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: {
          zipCode: "",
          city: "",
          streetAddress: "",
          country: "",
          state: "",
          geo: {
            latitude: "",
            longitude: "",
          },
        },
      },
      problems: {
        id: false,
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        zipCode: false,
        city: false,
        streetAddress: false,
        country: false,
        state: false,
        latitude: false,
        longitude: false,
      },
    };
  },
  methods: {
    async confirmar() {
      if (this.check()) {
        this.$store.dispatch("refreshData");
        this.$store.dispatch("sortDataId");
        this.newUser.id =
          this.$store.getters.getData[this.$store.getters.getData.length - 1]
            .id + 1;
        this.newUser.firstName = this.capital(this.newUser.firstName);
        this.newUser.lastName = this.capital(this.newUser.lastName);
        this.newUser.address.city = this.capital(this.newUser.address.city);
        this.newUser.address.state = this.capital(this.newUser.address.state);
        this.newUser.address.country = this.capital(this.newUser.address.country);
        await axios.post("http://localhost:3000/users", this.newUser);
        this.$router.push("/");
      }
    },
    check() {
      let valid = true;
      this.problems.firstName =
        this.newUser.firstName == "" ||
        !/^[a-zA-Z ]*$/.test(this.newUser.firstName);
      this.problems.lastName =
        this.newUser.lastName == "" ||
        !/^[a-zA-Z  ]*$/.test(this.newUser.lastName);
      this.problems.email =
        this.newUser.email == "" || !/.+@.+\../.test(this.newUser.email);
      this.problems.phone =
        this.newUser.phone == "" || /[a-zA-Z]/.test(this.newUser.phone);
      this.problems.zipCode =
        this.newUser.address.zipCode == "" ||
        /[a-zA-Z]/.test(this.newUser.address.zipCode);
      this.problems.city =
        this.newUser.address.city == "" ||
        /[0-9]/.test(this.newUser.address.city);
      this.problems.streetAddress = this.newUser.address.streetAddress == "";
      this.problems.country =
        this.newUser.address.country == "" ||
        /[0-9]/.test(this.newUser.address.country);
      this.problems.state =
        this.newUser.address.state == "" ||
        /[0-9]/.test(this.newUser.address.state);
      this.problems.latitude =
        this.newUser.address.geo.latitude == "" ||
        /[a-zA-Z]/.test(this.newUser.address.geo.latitude);
      this.problems.longitude =
        this.newUser.address.geo.longitude == "" ||
        /[a-zA-Z]/.test(this.newUser.address.geo.longitude);

      Object.entries(this.problems).forEach((x) => {
        valid = valid && !x[1];
      });
      return valid;
    },
    capital(str) {
      str = str.toLowerCase();
      str = str.split(" ");

      for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
      }

      return str.join(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 50%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}

div {
  h6 {
    color: crimson;
    display: block;
    margin: 0px;
    font-size: 15px;
  }
  color: #fff;
  label {
    text-decoration: underline;
  }
  border-radius: 5px;
  background-color: #202f83;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 50vw;
  margin-bottom: 100px;
  .box {
    border-radius: 0px;
    width: 100%;
    background-color: #3a175a;
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 0px;
  }
}
</style>