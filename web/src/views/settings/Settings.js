export default {
  data() {
    return {
      ipv4: "",
      ipv4Port: 8088,
      snackbar: false,
    };
  },
  created: function () {
    let ipv4Info = localStorage.getItem("serverIpv4Address");
    if (ipv4Info) {
      this.ipv4 = ipv4Info;
    }
    let ipv4PortInfo = localStorage.getItem("serverIpv4Port");
    if (ipv4PortInfo) {
      this.ipv4Port = ipv4PortInfo;
    }
  },
  methods: {
    saveServerIpv4Address() {
      if (this.ipv4) {
        localStorage.setItem("serverIpv4Address", this.ipv4);
        localStorage.setItem("serverIpv4Port", this.ipv4Port);
        this.snackbar = true;
      } else {
        alert("IPv4 address is empty. Please enter a valid address.");
      }
    },
  },
  computed: {
    ipv4Validation() {
      return (value) => {
        if (!value) return true; // Allow empty field
        const pattern =
          /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return pattern.test(value) || "Invalid IPv4 address";
      };
    },
  },
};
