export default {
  data() {
    return {
      zoomCamIsToggled: {
        1: false,
        2: false,
        3: false,
        4: false,
      },
      zoomCamIsIsError: {
        1: false,
        2: false,
        3: false,
        4: false,
      },
      scriptStartIsToggle: false,
      replayPauseIsToggle: false,
      settings: [],
      btnZoomSize: 100,
      zoomValue: 1,
      zoomInput: 3,
      speedZoom: 0.8,
      speedStopPropagation: 200,
      replaySpeed: 0.75,
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
    async ReplayXCameraY(X, Y) {
      let ok = false;
      await this.$axios
        .get("http://localhost:8088/api/?Function=Replay" + X + "Camera" + Y)
        .then(function (response) {
          console.log(response);
          ok = true;
        })
        .catch(function (error) {
          console.log(error);
        });

      this.zoomCamIsToggled = {
        1: false,
        2: false,
        3: false,
        4: false,
      };

      if (ok) {
        this.zoomCamIsToggled[Y] = !this.zoomCamIsToggled[Y];
      } else {
        this.zoomCamIsIsError[Y] = true;
        setTimeout(() => {
          this.zoomCamIsIsError[Y] = false;
        }, 2000);
      }
    },
    async ScriptStart() {
      let ok = false;
      this.scriptStartIsToggle = true;
      this.replayPauseIsToggle = false;
      await this.$axios
        .get(
          "http://localhost:8088/api/?Function=ReplayFastBackward&Value=" +
            this.replaySpeed
        )
        .then(function (response) {
          ok = true;
        })
        .catch(function (error) {
          console.log(error);
        });

      this.scriptStartIsToggle = ok;
    },
    async ReplayPause() {
      let ok = false;
      this.replayPauseIsToggle = true;
      this.scriptStartIsToggle = false;
      await this.$axios
        .get("http://localhost:8088/api/?Function=ReplayPause")
        .then(function (response) {
          ok = true;
        })
        .catch(function (error) {
          console.log(error);
        });

      this.replayPauseIsToggle = ok;
      setTimeout(() => {
        this.replayPauseIsToggle = false;
      }, 2000);
    },
  },
};
