const styles = {
  wrapper: {
    background: "linear-gradient(to right, #DB00FF 0%, #FFC700 100%)",
    borderRadius: "16px",
    fontSize: "15px",
    minWidth: {
      xs: "174px",
      sm: "185px",
    },
    height: "50px",
    textTransform: "capitalize",
    "&:hover": {
      boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.25)",
      background: "linear-gradient(to right, #DB00FF 0%, #FFC700 100%)",
    },
    "&:active": {
      boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.25)",
      background: "linear-gradient(to right, #DB00FF 0%, #FFC700 100%)",
      color: "#fff",
    },
  },
};

export default styles;
