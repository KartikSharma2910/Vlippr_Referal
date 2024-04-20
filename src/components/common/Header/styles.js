const styles = {
  container: {
    height: "65px",
    position: "sticky",
    top: 0,
    width: "100%",
    zIndex: 1000,
    display: "flex",
    backgroundColor: "black",
    color: "white",
    padding: {
      xs: "0 2em",
      md: "0 4em",
    },
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 0.4s",
  },

  wrapper: {
    position: "relative",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  linkWrapper: {
    display: "flex",
    gap: "2rem",
    fontSize: "14px",
  },

  link: {
    fontWeight: 200,
    color: "white",
  },

  image: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "60px",
    filter: "brightness(0) invert(1)",
  },

  mobileImage: {
    width: "60px",
    filter: "brightness(0) invert(1)",
    display: {
      xs: "block",
      md: "none",
    },
  },

  button: {
    minWidth: "80px",
    fontSize: "14px",
    borderRadius: "5px",
    height: "36px",
  },
};

export default styles;
