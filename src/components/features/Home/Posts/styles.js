const styles = {
  wrapper: {
    width: "100%",
    height: "min-content",
    backgroundColor: "#211629",
  },

  container: {
    width: "100%",
    height: {
      xs: "100%",
      md: "400px",
    },
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    color: "white",
  },

  leftContainer: {
    display: "flex",
    height: {
      xs: "200px",
      md: "100%",
    },
    width: {
      xs: "100%",
      md: "50%",
    },
  },

  rightContainer: {
    width: {
      xs: "100%",
      md: "50%",
    },
  },

  imageWrapper: {
    width: "50%",
  },

  miniImage: {
    display: "flex",
    height: "200px",
  },

  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
};

export default styles;
