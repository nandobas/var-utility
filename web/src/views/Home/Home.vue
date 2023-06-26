<template>
  <v-app oncontextmenu="return false;">
    <!--v-app-bar app color="primary">
      <div class="d-flex align-center" @click.ctrl.exact="showDeveloper">
      </div>

      <v-row class="home" justify="center">
        <v-bottom-navigation>
          <v-col cols="5">
          </v-col>
        </v-bottom-navigation>
      </v-row>

      <v-spacer></v-spacer>
      <div style="width:100%;" class="home">
        <v-btn href="https://github.com/nandobas" target="_blank" text>
          <span>GitHub Repository</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </div>
    </v-app-bar-->

    <v-container class="fill-height">
      <v-carousel v-model="model">
        <v-carousel-item
          v-for="(toPray, i) in praySteps"
          :key="i"
        >
          <v-sheet
            :color="toPray.color"
            height="100%"
            tile
          >
            <v-row
              align="center"
              style="max-height: 450px"
              class="overflow-y-auto"
            >
              <div class="text-h2">
                <v-card class="sm-12 mx-12 my-12">
                  <v-card-title>{{toPray.title}}</v-card-title>
                  <v-card-text>
                    <v-row
                      justify="center"
                      style="height: 1000px;"
                      class="mx-0 text-justify"
                      v-html="toPray.pray"
                    >
                    </v-row>
                  </v-card-text>

                </v-card>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Rezar
        </v-card-title>

        <v-card-text>
        Sistema desenvolvido por Fernando Basilio <br />
        O intuito da ferramenta é facilitar a oração do terço católico.<br />
        contato:
        <a href="mailto:fernando.basilio@gmail.com"
          >fernando.basilio@gmail.com</a
        >
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions color="primary">
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script src="./Home.js"></script>
<style lang="scss">
@import "./Home.scss";
</style>
