const styles = {
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "3rem 2rem",
  },

  headerWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "25px",
  },

  heading: {
    fontSize: "16px",
    fontWeight: 600,
    background:
      "linear-gradient(to right, #B91BD3 0%, #CB1DF6 50%, #A900A2 100%)",
    color: "transparent",
    backgroundClip: "text",
    "-webkit-background-clip": "text",
  },

  description: {
    fontSize: {
      xs: "16px",
      sm: "20px",
      md: "24px",
    },
    color: "white",
    fontWeight: 400,
  },
};

export default styles;
