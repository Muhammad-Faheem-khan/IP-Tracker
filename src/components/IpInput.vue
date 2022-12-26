<template>
  <div class="d-flex flex-column align-center ">
    <v-icon size="150" class="mt-7" color="light-blue darken-3">mdi-map-marker-check</v-icon>
    <h2 class="text-h4 text-center mt-8">Let's Get that IP tracked...!!!</h2>
    <div class="input-area d-flex">
      <v-text-field
        v-model.lazy="ip"
        label="Enter IP Here."
        single-line
        @keypress.enter="trackIP"
        outlined
      ></v-text-field>
      <v-btn
        @click="trackIP"
        
        :loading="loading"
        depressed
        class="py-7 ml-n1 white--text"
        color="light-blue darken-3"
        dark
      >
        Track IP
      </v-btn>
    </div>

    <div class="input-area" v-show="ipInfo">
      <v-simple-table class="table-box">
        <template v-slot:default>
          <thead>
            <tr>
              <th colspan="2" class="text-center text-h5">Tracked IP's Info</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key, index) in ipData[0]" :key="index">
              <td class="text-center">{{ key.toUpperCase()}}</td>
              <td colspan="2" class="text-center text-capitalize">{{ value }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div class="d-flex flex-column align-center">
        <h3 class="text-h5 text-center mt-8 mb-4">Live Location</h3>
        <iframe  :src="`https://maps.google.com/maps?q=${ipData ? ipData[0].lat : ''},${ipData ? ipData[0].lon : ''}&hl=es&z=14&amp;output=embed`" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <DesignComponet />
  </div>
</template>

<script>
import { store } from "@/store";
import DesignComponet from './DesignComponet.vue'

export default {
  name: "IpInput",
  components: {
    DesignComponet,
  },
  computed: {
    ipData() {
      return store.getters.getIpData;
    },
  },
  watch: {
    ipData() {
      if (this.ipData) {
        this.loading = false;
        this.ipInfo = true
      }
    },
  },
  data() {
    return {
      loading: false,
      ip: "",
      ipInfo: false,
    };
  },
  methods: {
    trackIP() {
      this.loading = true;
      store.dispatch("getIpData", [this.ip]);
      this.ip = ''
    },
  },
};
</script>

<style scoped>
.input-area {
  width: 40%;
  margin: 1.5rem auto;
}
.table-box{
    border: 1px solid lightgray;
    border-radius: 0.5rem;
}
</style>