<template>
  <div>
    <div class="card" v-if="userData">
      <div class="info">
        <h2>Id</h2>
        <h3>{{userData.id}}</h3>
      </div>
      <div class="info">
        <h2>Nome</h2>
        <h3>{{userData.firstName}} {{userData.lastName}}</h3>
      </div>
      <div class="info">
        <h2>Email</h2>
        <h3>{{userData.email}}</h3>
      </div>
      <div class="info">
        <h2>Telefone</h2>
        <h3>{{userData.phone}}</h3>
      </div>
      <div class="info">
        <h2>Endereço</h2>
        <div class="address" v-if="userData.address">
          <div>
            <h2>Cep:</h2>
            <h4>{{userData.address.zipCode}}</h4>
            <h2>Endereço:</h2>
            <h4>{{userData.address.streetAddress}}</h4>
          </div>
          <div>
            <h2>País:</h2>
            <h4>{{userData.address.country}}</h4>
            <h2>Estado:</h2>
            <h4>{{userData.address.state}}</h4>
            <h2>Cidade:</h2>
            <h4>{{userData.address.city}}</h4>
          </div>
          <div>
            <h2>Latitude:</h2>
            <h4>{{userData.address.geo.latitude}}</h4>
            <h2>Longitude:</h2>
            <h4>{{userData.address.geo.longitude}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetalhes",
  props: {
    userData: {},
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  justify-content: center;
  color: #ffffff;
  width: 50vw;
  border-radius: 15px;
  padding: 10px;
  .info {
    background-color: #261f86;
    margin: 1px;
    border-radius: 15px;
  }
  h2 {
    padding-top: 10px;
    text-decoration: underline;
  }
  h3 {
    padding-bottom: 10px;
  }
}
.address {
  display: flex;
  padding-bottom: 10px;
  justify-content: center;
  div {
    padding: 0px;
    width: 25%;
    margin: 10px;
    border-radius: 15px;
    background-color: #181749;
    h2 {
      text-decoration: none;
    }
    h4 {
      font-style: italic;
    }
  }
}
</style>