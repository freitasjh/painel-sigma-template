<template>
  <div class="layout-profile">
    <div>
      <img src="assets/layout/images/profile.png" alt="" />
    </div>
    <button class="p-link layout-profile-link" @click="onClick">
      <span class="username">Usuario Teste</span>
      <i class="pi pi-fw pi-cog"></i>
    </button>
    <transition name="layout-submenu-wrapper">
      <ul v-show="expanded">
        <li>
          <button class="p-link">
            <i class="pi pi-fw pi-user"></i><span>Account</span>
          </button>
        </li>
        <!-- <li>
          <button class="p-link">
            <i class="pi pi-fw pi-inbox"></i><span>Notifications</span
            ><span class="menuitem-badge">0</span>
          </button>
        </li> -->
        <li>
          <button class="p-link" @click="logout()">
            <i class="pi pi-fw pi-power-off"></i><span>Logout</span>
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
      usuario: Object,
    };
  },
  created() {
    this.usuario = this.$session.get("usuario");
  },
  methods: {
    onClick(event) {
      this.expanded = !this.expanded;
      event.preventDefault();
    },
    logout() {
      this.$session.set("usuario", null);
      this.$session.set("logado", false);
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped></style>
