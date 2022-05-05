<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <v-app-bar-title @click.native="goHome">Posts App</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-slide-x-transition>
          <router-view />
        </v-slide-x-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    goHome () {
      if (this.$route.name !== 'home')
        this.$router.push({name: 'home'})
    }
  }
};
</script>
