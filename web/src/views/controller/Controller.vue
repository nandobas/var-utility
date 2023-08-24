<template>
  <v-container class="grey lighten-1" style="width: 100%; max-width: 1899px">
    <v-row>
      <v-col cols="3" class="grey">
        <v-row no-gutters style="width: 650px">
          <v-col class="text-center" md="2">
            <v-btn
              class="float-left"
              key="zoom-top-left"
              elevation="1"
              outlined
              color="primary"
              :height="btnZoomSize"
              :width="btnZoomSize"
              @click="MoveUpLeft()"
            >
              <v-icon>mdi-arrow-top-left</v-icon>
            </v-btn>
          </v-col>

          <v-col class="text-center ml-n1" md="2">
            <v-btn
              class="float-left"
              key="zoom-top-mid"
              elevation="2"
              outlined
              color="primary"
              :height="btnZoomSize"
              :width="btnZoomSize"
              @click="MoveUp()"
            >
              <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
          </v-col>

          <v-col class="text-center" md="2">
            <v-btn
              class="float-left ml-n1"
              key="zoom-top-right"
              elevation="2"
              outlined
              color="primary"
              :height="btnZoomSize"
              :width="btnZoomSize"
              @click="MoveUpRight()"
            >
              <v-icon>mdi-arrow-top-right</v-icon>
            </v-btn>
          </v-col>
          <v-col class="text-center" md="2">
            <v-btn
              class="float-left ml-3"
              key="zoom-in"
              elevation="2"
              outlined
              color="primary"
              :height="btnZoomSize"
              :width="btnZoomSize"
              @click="ZoomIn()"
            >
              <span>ZOOM IN</span>
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters style="width: 650px">
          <v-col class="text-center mt-1" md="2">
            <v-btn
              class="float-left"
              key="zoom-left"
              elevation="2"
              outlined
              color="primary"
              :height="btnZoomSize"
              :width="btnZoomSize"
              @click="MoveLeft()"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </v-col>
          <v-col class="text-center mt-1 ml-n1" md="2">
            <v-btn
              class="float-left"
              key="zoom-center"
              elevation="3"
              outlined
              color="primary"
              :height="btnZoomSize"
              :width="btnZoomSize"
              @click="PTZHome()"
            >
              <v-icon>mdi-circle-outline</v-icon>
            </v-btn>
          </v-col>
          <v-col class="text-center mt-1 ml-n1" md="2">
            <v-btn
              class="float-left"
              key="zoom-right"
              elevation="3"
              outlined
              color="primary"
              :height="btnZoomSize"
              :width="btnZoomSize"
              @click="MoveRight()"
            >
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
          <v-col class="text-center mt-1 ml-1" md="2">
            <v-btn
              class="float-left ml-3"
              key="zoom-out"
              elevation="3"
              outlined
              color="primary"
              :height="btnZoomSize"
              :width="btnZoomSize"
              @click="ZoomOut()"
            >
              <span>ZOOM OUT</span>
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters style="width: 650px">
          <v-col class="text-center" md="2">
            <v-btn
              class="float-left mt-1"
              key="zoom-bottom-left"
              elevation="3"
              outlined
              color="primary"
              :height="btnZoomSize"
              :width="btnZoomSize"
              @click="MoveDownLeft"
            >
              <v-icon>mdi-arrow-bottom-left</v-icon>
            </v-btn>
          </v-col>
          <v-col class="text-center" md="2">
            <v-btn
              class="float-left mt-1 ml-n1"
              key="zoom-down"
              elevation="5"
              outlined
              color="primary"
              :height="btnZoomSize"
              :width="btnZoomSize"
              @click="MoveDown"
            >
              <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
          </v-col>
          <v-col class="text-center" md="2">
            <v-btn
              class="float-left mt-1 ml-n2"
              key="zoom-bottom-right"
              elevation="5"
              outlined
              color="primary"
              :height="btnZoomSize"
              :width="btnZoomSize"
              @click="MoveDownRight"
            >
              <v-icon>mdi-arrow-bottom-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-btn
              key="zoom-cam-1"
              elevation="2"
              outlined
              color="white"
              :class="[
                'toggle-button',
                { toggled: zoomCamIsToggled[1], error: zoomCamIsIsError[1] },
              ]"
              @click="ReplayXCameraY('B', 1)"
            >
              <span>CAM 1</span>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              key="zoom-cam-2"
              elevation="2"
              outlined
              color="white"
              :class="[
                'toggle-button',
                { toggled: zoomCamIsToggled[2], error: zoomCamIsIsError[2] },
              ]"
              @click="ReplayXCameraY('B', 2)"
            >
              <span>CAM 2</span>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              key="zoom-cam-3"
              elevation="2"
              outlined
              color="white"
              :class="[
                'toggle-button',
                { toggled: zoomCamIsToggled[3], error: zoomCamIsIsError[3] },
              ]"
              @click="ReplayXCameraY('B', 3)"
            >
              <span>CAM 3</span>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              key="zoom-cam-4"
              elevation="2"
              outlined
              color="white"
              :class="[
                'toggle-button',
                { toggled: zoomCamIsToggled[4], error: zoomCamIsIsError[4] },
              ]"
              @click="ReplayXCameraY('B', 4)"
            >
              <span>CAM 4</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="3" class="blue">
        <v-row style="height: 57%">
          <v-col></v-col>
        </v-row>
        <v-row>
          <v-col></v-col>
          <v-col>
            <v-btn key="tela-dupla" elevation="2" outlined color="yellow">
              <span>TELA DUPLA</span>
            </v-btn>
          </v-col>
          <v-col></v-col>
        </v-row>

        <v-row>
          <v-col></v-col>
          <v-col>
            <v-btn
              class="float-left"
              key="pip-e"
              elevation="2"
              outlined
              color="yellow"
            >
              <span>PIP E</span>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              class="float-left"
              key="pip-d"
              elevation="2"
              outlined
              color="yellow"
            >
              <span>PIP D</span>
            </v-btn>
          </v-col>
          <v-col></v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-btn key="pip-cam-1" elevation="2" outlined color="white">
              <span>CAM 1</span>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn key="pip-cam-2" elevation="2" outlined color="white">
              <span>CAM 2</span>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn key="pip-cam-3" elevation="2" outlined color="white">
              <span>CAM 3</span>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn key="pip-cam-4" elevation="2" outlined color="white">
              <span>CAM 4</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="4" class="yelow float-right"> </v-col>

      <v-col cols="2" class="green float-right"> </v-col>
    </v-row>
    <v-row>
      <v-col cols="3" class="grey">
        <v-row style="height: 150px">
          <v-col md="2"> </v-col>
        </v-row>
        <v-row no-gutters style="width: 650px">
          <v-col class="text-center" md="3">
            <v-btn
              :class="[
                'float-left',
                'toggle-button',
                { toggled: scriptStartIsToggle },
              ]"
              key="script-start"
              elevation="1"
              outlined
              color="primary"
              :height="150"
              :width="150"
              @click="ScriptStart()"
            >
              <v-icon x-large>mdi-play-circle-outline</v-icon>
            </v-btn>
          </v-col>

          <v-col class="text-center">
            <v-btn
              :class="[
                'float-left ml-3',
                'toggle-button',
                { toggled: replayPauseIsToggle },
              ]"
              key="replay-pause"
              elevation="2"
              outlined
              color="primary"
              :height="150"
              :width="150"
              @click="ReplayPause()"
            >
              <v-icon x-large>mdi-pause-circle-outline</v-icon>
            </v-btn>
          </v-col>

          <v-col class="text-center" md="2"> </v-col>
        </v-row>
      </v-col>

      <v-col cols="3" class="blue">
        <v-row style="height: 57%">
          <v-col></v-col>
        </v-row>
      </v-col>

      <v-col cols="4" class="yelow float-right"> </v-col>

      <v-col cols="2" class="green float-right"> </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
@import "./Controller.scss";
</style>
<script src="./Controller.js"></script>
