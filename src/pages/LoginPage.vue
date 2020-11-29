<template>
  <div id="login">
    <Toast />
    <div class="card p-fluid">
      <div class="p-field">
        <label for="name1">Usuario.:</label>
        <span class="p-input-icon-left">
          <i class="pi pi-user" />
          <InputText
            type="text"
            placeholder="Usuario"
            v-model="usuario.email"
            class="p-invalid"
          />
        </span>
      </div>
      <div class="p-field">
        <label for="email1">Senha.:</label>
        <span class="p-input-icon-left">
          <i class="pi pi-lock" />
          <InputText
            type="password"
            placeholder="Senha"
            v-model="usuario.senha"
          />
        </span>
      </div>
      <hr />
      <div class="p-d-flex">
        <Button label="Login" class="p-mr-2 p-mb-2" @click="login()"></Button>
        <Button
          label="Disabled"
          class="p-mr-2 p-mb-2"
          :disabled="true"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      usuario: {
        email: null,
        senha: null,
      },
    };
  },
  methods: {
    login() {
       this.$router.push("/app");
      
    },
  },
};
</script>

<style scoped>
#login {
  width: 500px;

  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
