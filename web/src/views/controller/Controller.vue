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
            <v-btn key="zoom-cam-1" elevation="2" outlined color="white">
              <span>CAM 1</span>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn key="zoom-cam-2" elevation="2" outlined color="white">
              <span>CAM 2</span>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn key="zoom-cam-3" elevation="2" outlined color="white">
              <span>CAM 3</span>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn key="zoom-cam-4" elevation="2" outlined color="white">
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      settings: [],
      btnZoomSize: 100,
      zoomValue: 1,
      zoomInput: 3,
      speedZoom: 0.8,
      speedStopPropagation: 200,
    };
  },
  methods: {
    setZoom(zoomInput) {
      this.$axios.get(
        "http://localhost:8088/api/?Function=SetZoom&Input=" +
          zoomInput +
          "&Value=" +
          this.zoomValue
      );
    },
    ZoomIncrase() {
      let zoomValue = this.zoomValue + 0.5;
      if (zoomValue >= 5) {
        return false;
      }
      this.zoomValue = zoomValue;
      this.setZoom(this.zoomInput);
    },
    ZoomDecrase() {
      let zoomValue = this.zoomValue - 0.5;
      if (zoomValue <= 0.5) {
        return false;
      }
      this.zoomValue = zoomValue;
      this.setZoom(this.zoomInput);
    },
    ZoomIn() {
      this.$axios.get(
        "http://localhost:8088/api/?Function=PTZZoomIn&Input=" +
          this.zoomInput +
          "&Value=" +
          this.speedZoom
      );
      setTimeout(() => {
        this.zoomStop();
      }, this.speedStopPropagation);
    },
    ZoomOut() {
      this.$axios.get(
        "http://localhost:8088/api/?Function=PTZZoomOut&Input=" +
          this.zoomInput +
          "&Value=" +
          this.speedZoom
      );
      setTimeout(() => {
        this.zoomStop();
      }, this.speedStopPropagation);
    },
    zoomStop() {
      this.$axios.get(
        "http://localhost:8088/api/?Function=PTZZoomStop&Input=" +
          this.zoomInput
      );
    },
    moveStop() {
      this.$axios.get(
        "http://localhost:8088/api/?Function=PTZMoveStop&Input=" +
          this.zoomInput
      );
    },
    MoveUpLeft() {
      this.$axios.get(
        "http://localhost:8088/api/?Function=PTZMoveUpLeft&Input=" +
          this.zoomInput +
          "&Value=" +
          this.speedZoom
      );
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    MoveUp() {
      this.$axios.get(
        "http://localhost:8088/api/?Function=PTZMoveUp&Input=" +
          this.zoomInput +
          "&Value=" +
          this.speedZoom
      );
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    MoveUpRight() {
      this.$axios.get(
        "http://localhost:8088/api/?Function=PTZMoveUpRight&Input=" +
          this.zoomInput +
          "&Value=" +
          this.speedZoom
      );
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    MoveLeft() {
      this.$axios.get(
        "http://localhost:8088/api/?Function=PTZMoveLeft&Input=" +
          this.zoomInput +
          "&Value=" +
          this.speedZoom
      );
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    MoveRight() {
      this.$axios.get(
        "http://localhost:8088/api/?Function=PTZMoveRight&Input=" +
          this.zoomInput +
          "&Value=" +
          this.speedZoom
      );
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    MoveDownLeft() {
      this.$axios.get(
        "http://localhost:8088/api/?Function=PTZMoveDownLeft&Input=" +
          this.zoomInput +
          "&Value=" +
          this.speedZoom
      );
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    MoveDown() {
      this.$axios.get(
        "http://localhost:8088/api/?Function=PTZMoveDown&Input=" +
          this.zoomInput +
          "&Value=" +
          this.speedZoom
      );
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    MoveDownRight() {
      this.$axios.get(
        "http://localhost:8088/api/?Function=PTZMoveDownRight&Input=" +
          this.zoomInput +
          "&Value=" +
          this.speedZoom
      );
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    PTZHome() {
      this.$axios.get(
        "http://localhost:8088/api/?Function=PTZHome&Input=" + this.zoomInput
      );
    },
  },
};
</script>
