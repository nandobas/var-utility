export default {
  data() {
    return {
      ipv4: "localhost",
      ipv4Port: "8088",
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
  created: function () {
    let ipv4Info = localStorage.getItem("serverIpv4Address");
    let ipv4Port = localStorage.getItem("serverIpv4Port");
    if (ipv4Info) {
      this.ipv4 = ipv4Info;
      this.ipv4Port = ipv4Port;
    }
  },
  methods: {
    ipv4Address() {
      return "http://" + this.ipv4 + ":" + this.ipv4Port + "/api";
    },
    setZoom(zoomInput) {
      this.$axios.get(
        this.ipv4Address() +
          "/?Function=SetZoom&Input=" +
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
        this.ipv4Address() +
          "/?Function=PTZZoomIn&Input=" +
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
        this.ipv4Address() +
          "/?Function=PTZZoomOut&Input=" +
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
        this.ipv4Address() + "/?Function=PTZZoomStop&Input=" + this.zoomInput
      );
    },
    moveStop() {
      this.$axios.get(
        this.ipv4Address() + "/?Function=PTZMoveStop&Input=" + this.zoomInput
      );
    },
    MoveUpLeft() {
      this.$axios.get(
        this.ipv4Address() +
          "/?Function=PTZMoveUpLeft&Input=" +
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
        this.ipv4Address() +
          "/?Function=PTZMoveUp&Input=" +
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
        this.ipv4Address() +
          "/?Function=PTZMoveUpRight&Input=" +
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
        this.ipv4Address() +
          "/?Function=PTZMoveLeft&Input=" +
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
        this.ipv4Address() +
          "/?Function=PTZMoveRight&Input=" +
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
        this.ipv4Address() +
          "/?Function=PTZMoveDownLeft&Input=" +
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
        this.ipv4Address() +
          "/?Function=PTZMoveDown&Input=" +
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
        this.ipv4Address() +
          "/?Function=PTZMoveDownRight&Input=" +
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
        this.ipv4Address() + "/?Function=PTZHome&Input=" + this.zoomInput
      );
    },
    async ReplayXCameraY(X, Y) {
      let ok = false;
      await this.$axios
        .get(this.ipv4Address() + "/?Function=Replay" + X + "Camera" + Y)
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
          this.ipv4Address() +
            "/?Function=ReplayFastBackward&Value=" +
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
        .get(this.ipv4Address() + "/?Function=ReplayPause")
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
