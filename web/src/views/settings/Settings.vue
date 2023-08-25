<template>
  <v-container class="grey lighten-1" style="width: 100%; max-width: 1899px">
    <v-row>
      <v-col cols="6" style="height: 700px">
        <v-row style="height: 150px">
          <v-col md="3"> <span>IP SERVIDOR:</span></v-col>
          <v-col md="3">
            <v-text-field
              solo
              v-model="ipv4"
              :rules="[ipv4Validation]"
            ></v-text-field
          ></v-col>
          <v-col md="2">
            <v-text-field solo v-model="ipv4Port"></v-text-field
          ></v-col>
          <v-col md="3">
            <v-btn
              color="primary"
              elevation="2"
              @click="saveServerIpv4Address()"
              >Salvar</v-btn
            ></v-col
          >
        </v-row>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" :timeout="3000" color="success">
      IPv4 salvo com sucesso!
    </v-snackbar>
  </v-container>
</template>

<style lang="scss">
@import "./Settings.scss";
</style>
<script src="./Settings.js"></script>
