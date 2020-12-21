<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    >
      <v-list>
        <v-list-item v-for="([icon, text], i) in navItems" :key="i" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      absolute
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      dark
      shrink-on-scroll
      prominent
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Navbar_heading</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view to="/login"></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    drawer: false,
    navItems: [
      ['mdi-email', '1'],
      ['mdi-account-supervisor-circle', '2'],
      ['mdi-clock-start', '3'],
    ],
  }),
};
</script>
