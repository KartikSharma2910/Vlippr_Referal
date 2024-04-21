const styles = {
  wrapper: {
    height: "min-content",
    backgroundColor: "#211629",
  },

  container: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },

  text: {
    textAlign: "center",
    fontSize: "14px",
    opacity: 0.7,
    width: {
      xs: "80%",
      md: "48%",
    },
  },

  cardsWrapper: {
    display: "flex",
    rowGap: 10,
    flexWrap: "wrap",
    width: "80%",
    marginTop: "4rem",
    justifyContent: "space-evenly",
    transition: "all 0.4s",
  },

  card: {
    position: "relative",
    display: "flex",
    cursor: "pointer",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    minHeight: "200px",
    gap: "10px",
    borderRadius: "12px",
    transition: "all 0.4s",
    "&:hover": {
      transform: "scale(1.1)",
    },
    background:
      "radial-gradient(circle, rgba(166, 100, 218, 0.75), rgba(88, 53, 116, 0.75))",
  },

  image: {
    position: "absolute",
    top: -60,
    width: "150px",
    objectFit: "cover",
  },

  dataContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
  },

  profession: {
    fontSize: "10px",
    color: "rgba(191, 112, 249, 1)",
  },
};

export default styles;
