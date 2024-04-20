const styles = {
  wrapper: {
    height: "calc(100vh - 65px)",
  },

  container: {
    position: "relative",
    width: "100%",
    height: "100%",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  content: {
    width: {
      xs: "95%",
      md: "50%",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    position: "absolute",
    color: "white",
    top: "55%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },

  tagLine: {
    width: "70%",
    lineHeight: {
      xs: "40px",
      sm: "50px",
      md: "60px",
    },
    textAlign: "center",
    fontSize: {
      xs: "25px",
      sm: "35px",
      md: "45px",
    },
    fontWeight: 600,
    fontFamily: "Syncopate, sans-serif",
  },

  heading: {
    fontSize: {
      xs: "16px",
      sm: "18px",
      md: "20px",
    },
    fontWeight: 400,

    "& .vlippr": {
      color: "#11b7ff",
    },
  },

  description: {
    fontSize: {
      xs: "12px",
      md: "13px",
    },
    width: "70%",
    opacity: 0.8,
    textAlign: "center",
  },

  applyWrapper: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    position: "relative",
    gap: {
      xs: "1rem",
      md: "2rem",
    },
    border: "1px solid white",
    padding: "8px 15px",
    backdropFilter: "blur(10px)",
    alignItems: "center",
  },

  applyText: {
    fontSize: "14px",
  },

  applyButton: {
    borderRadius: 0,
    height: "38px",
    minWidth: "100px",
  },

  applyOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
};

export default styles;
