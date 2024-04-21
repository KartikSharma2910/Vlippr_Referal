const styles = {
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(135deg, #5c0042, #28002f, #4c0048)",
  },

  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    gap: "40px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white", // Set text color to white
  },

  heading: {
    fontSize: "22px",
    "& .vlippr": {
      color: "#11b7ff",
    },
  },

  description: {
    fontSize: "14px",
    width: "40%",
    textAlign: "center",
  },

  subscriberCount: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
  },

  count: {
    fontSize: "60px",
    fontWeight: 600,
    background:
      "linear-gradient(to right, rgba(143, 0, 255, 1), rgba(255, 199, 0, 1))",
    color: "transparent",
    backgroundClip: "text",
    "-webkit-background-clip": "text",
  },

  countText: {
    fontSize: "12px",
    opacity: 0.8,
  },

  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "30%",
  },

  inputColor: {
    borderColor: "white",
  },

  button: {
    borderRadius: 0,
    height: "40px",
  },
};

export default styles;
