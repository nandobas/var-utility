<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Var Light </v-list-item-title>
          <v-list-item-subtitle> var-utility </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark prominent src="mountains.jpg">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-title class="title"></v-app-bar-title>

      <v-spacer></v-spacer>

      <span style="margin-top: 5px">Sync</span>
      <v-icon
        style="margin-top: 15px; margin-left: 3px"
        dense
        key="sync"
        :class="[{ syncOn: syncOn }]"
        >mdi-access-point</v-icon
      >

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style lang="scss">
.syncOn {
  background-color: #209b1c;
}
</style>

<script>
import api from "./services/api";
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Controle", icon: "mdi-view-dashboard", to: "/" },
        { title: "Configurar", icon: "mdi mdi-cogs", to: "/settings" },
        { title: "Sobre", icon: "mdi-help-box", to: "about" },
      ],
      syncOn: false,
    };
  },
  methods: {
    async VerifyConnection() {
      let on = true;
      this.syncOn = true;
      await api
        .get("/api/?")
        .then(function (response) {
          on = false;
          if (response != undefined) {
            on = true;
          }
        })
        .catch(function (error) {
          on = false;
        });
      this.syncOn = on;
    },
  },
  mounted: function () {
    this.VerifyConnection();
    const loop = setInterval(() => {
      this.VerifyConnection();
    }, 10000);
  },
};
</script>
