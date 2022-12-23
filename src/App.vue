<template>
  <v-app >
    <v-app-bar
      app
      color="light-blue darken-3"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo not found"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <h3 class="text--dark">Trackthat</h3>
        </div>
      <v-spacer></v-spacer>

      <v-btn
        outlined
        size="small"
      >
        <span class="mr-2">Sign Up</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <IpInput />
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import IpInput from './components/IpInput.vue';
import FooterComponent from './components/Footer.vue';
export default {
  name: 'App',

  components: {
    IpInput,
    FooterComponent
  },

  
  data: () => ({
    //
  }),
};
</script>
