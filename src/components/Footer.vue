<template>
    <div>
        <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="light-blue darken-4 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        IP address tracker provides businesses (especially B2B marketers) some exciting kind of data. Businesses then use this data to improve their analysis and enhance their performance accordingly. These trackers also help businesses to locate the connected devices.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Trackthat</strong>
      </v-card-text>
    </v-card>
  </v-footer>

    </div>
</template>

<script>
    export default {
        name: 'FooterComponent',
        data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    }
</script>

<style scoped>

</style>