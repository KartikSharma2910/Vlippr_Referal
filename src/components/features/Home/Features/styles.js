const styles = {
  wrapper: {
    height: "100%",
    color: "white",
    backgroundColor: "#24182b",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    alignItems: "center",
    justifyContent: "center",
  },

  heading: {
    width: {
      xs: "100%",
      sm: "80%",
      md: "40%",
    },
    fontSize: "12px",
    opacity: 0.7,
    textAlign: "center",
  },

  featureContainer: {
    width: {
      xs: "100%",
      md: "80%",
    },
    display: "flex",
    flexDirection: "column",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  featureCard: {
    display: "flex",
    justifyContent: "space-evenly",
    gap: 2,
    border: {
      xs: "1px solid #FDFDFD1B",
      sm: "none",
    },
    alignItems: "center",
  },

  featureImageWraper: {
    width: {
      xs: "100%",
      sm: "45%",
    },
  },

  featureImage: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },

  featureDataWrapper: {
    width: {
      xs: "80%",
      sm: "35%",
    },
    padding: {
      xs: "10px",
      sm: 0,
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: {
      xs: "center",
      sm: "flex-start",
    },
    gap: {
      xs: "0.5rem",
      sm: "1rem",
      md: "2rem",
    },
  },

  featureDescription: {
    fontSize: "12px",
    textAlign: {
      xs: "center",
      sm: "left",
    },
    opacity: 0.7,
  },
};

export default styles;
