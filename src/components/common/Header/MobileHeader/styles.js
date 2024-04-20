const styles = {
  drawer: {
    "& .MuiDrawer-paper": {
      top: 65,
      position: "fixed",
      zIndex: 100,
      width: {
        xs: "250px",
        sm: "270px",
      },
      maxWidth: {
        xs: "300px",
        sm: "340px",
      },
      borderRadius: 0,
      borderTop: "none",
      borderBottom: "none",
      padding: "20px",
      backgroundColor: "white",
      height: `calc(100% - 65px)`,
    },
  },

  drawerContent: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },

  drawerHeading: {
    color: "#8C8C8C",
    fontSize: "14px",
    userSelect: "none",
  },

  iconWrapper: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },

  icon: { fontSize: "30px", cursor: "pointer", color: "#8C8C8C" },

  drawerItemWrapper: {
    display: "flex",
    flexDirection: "column",
  },

  drawerItem: {
    color: "#8C8C8C",
    padding: "20px 0px 20px 30px",
    fontSize: {
      xs: "14px",
      sm: "16px",
    },
    fontWeight: 500,
    borderBottom: "1px solid #8C8C8C",
    transition: "all 400ms",

    "&:hover": {
      textDecoration: "underline",
    },
  },
};

export default styles;
