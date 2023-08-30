import api from "@/services/api";
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
      api.Exec("SetZoom", this.zoomInput, this.zoomValue);
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
      api.Exec("PTZZoomIn", this.zoomInput, this.speedZoom);
      setTimeout(() => {
        this.zoomStop();
      }, this.speedStopPropagation);
    },
    ZoomOut() {
      api.Exec("SetZoom", this.zoomInput, this.zoomValue);
      setTimeout(() => {
        this.zoomStop();
      }, this.speedStopPropagation);
    },
    zoomStop() {
      api.Exec("PTZZoomStop", this.zoomInput);
    },
    moveStop() {
      api.Exec("PTZMoveStop", this.zoomInput);
    },
    MoveUpLeft() {
      api.Exec("PTZMoveUpLeft", this.zoomInput, this.speedZoom);
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    MoveUp() {
      api.Exec("PTZMoveUp", this.zoomInput, this.speedZoom);
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    MoveUpRight() {
      api.Exec("PTZMoveUpRight", this.zoomInput, this.speedZoom);
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    MoveLeft() {
      api.Exec("PTZMoveLeft", this.zoomInput, this.speedZoom);
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    MoveRight() {
      api.Exec("PTZMoveRight", this.zoomInput, this.speedZoom);
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    MoveDownLeft() {
      api.Exec("PTZMoveDownLeft", this.zoomInput, this.speedZoom);
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    MoveDown() {
      api.Exec("PTZMoveDown", this.zoomInput, this.speedZoom);
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    MoveDownRight() {
      api.Exec("PTZMoveDownRight", this.zoomInput, this.speedZoom);
      setTimeout(() => {
        this.moveStop();
      }, this.speedStopPropagation);
    },
    PTZHome() {
      api.Exec("PTZHome", this.zoomInput);
    },
    async ReplayXCameraY(X, Y) {
      let ok = false;
      await api
        .Exec("Replay" + X + "Camera" + Y)
        .then(function (response) {
          if (response != undefined) {
            ok = true;
          }
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
      await api
        .Exec("ReplayFastBackward", "", this.replaySpeed)
        .then(function (response) {
          if (response != undefined) {
            ok = true;
          }
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
      await api
        .Exec("ReplayPause")
        .then(function (response) {
          if (response != undefined) {
            ok = true;
          }
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
