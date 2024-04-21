const styles = {
  wrapper: {
    position: "relative",
    height: "100%",
    background: "radial-gradient(circle, #351F52 0%, #25143D 100%)",
  },

  content: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
  },

  tabsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: "6px 8px",
    width: "400px",
    borderRadius: "24px",
    transition: "all 0.4s",
  },

  tab: {
    width: "185px",
    fontWeight: 400,
    textAlign: "center",
    cursor: "pointer",
    padding: "6px 15px",
    borderRadius: "24px",
    fontSize: "14px",
  },

  dataContainer: {
    width: {
      xs: "100%",
      md: "60%",
    },
    display: "flex",
    gap: "25px",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  dataHeading: {
    fontSize: "18px",
  },

  dataDescription: {
    width: {
      xs: "80%",
      md: "55%",
    },
    textAlign: "center",
    lineHeight: "25px",
    fontSize: "14px",
    opacity: 0.7,
  },

  description: {
    fontSize: "14px",
    marginTop: "-16px",
    opacity: 0.7,
  },

  leftImageWrapper: {
    position: "absolute",
    display: {
      xs: "none",
      md: "block",
    },
    height: "280px",
    width: "280px",
    borderRadius: "50%",
    zIndex: 100,
    left: 0,
    top: 20,
  },

  rightImageWrapper: {
    position: "absolute",
    height: "280px",
    display: {
      xs: "none",
      md: "block",
    },
    zIndex: 100,
    width: "280px",
    borderRadius: "50%",
    right: 0,
    top: 0,
  },

  leftOverlay: {
    position: "absolute",
    top: "40%",
    left: "55%",
    height: "200px",
    borderRadius: "50%",
    width: "200px",
    zIndex: -1,
    backgroundColor: "#8F32B2",
    opacity: 0.4,
  },

  rightOverlay: {
    position: "absolute",
    top: "50%",
    left: "30%",
    height: "200px",
    borderRadius: "50%",
    width: "200px",
    zIndex: -1,
    backgroundColor: "#4b489f",
    opacity: 0.4,
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },

  giftCards: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1.5rem",
    width: "100%",
  },

  giftCardWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "15px",
    alignItems: "center",
    gap: "10px",
    flexDirection: "column",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "transparent",
    background:
      "linear-gradient(rgba(73, 44, 255, 0.06),rgba(224, 34, 255, 0.25),rgba(0, 0, 0, 0.05))",
    border: "1px solid #FDFDFD1B",
    transition: "all 0.4s",
    // "&:hover": {
    //   transform: "scale(1.1)",
    //   animation: "shake 0.5s",
    //   animationIterationCount: "infinite",
    // },
  },

  giftCardImage: {
    width: "150px",
    backgroundColor: "transparent",
    background: "transparent",
    "&:hover": {
      animation: "shake 0.5s",
      animationIterationCount: "infinite",
    },
  },

  price: {
    color: "white",
    fontSize: "18px",
  },

  claimButton: {
    fontSize: "12px",
    borderRadius: "12px",
    cursor: "pointer",
    padding: "5px 20px",
    backgroundColor: "white",
  },

  "@keyframes shake": {
    "0%": { transform: "translateX(0)" },
    "25%": { transform: "translateX(-5px)" },
    "50%": { transform: "translateX(5px)" },
    "75%": { transform: "translateX(-3px)" },
    "100%": { transform: "translateX(0)" },
  },
};

export default styles;
