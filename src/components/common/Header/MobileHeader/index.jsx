import DragHandleSharpIcon from "@mui/icons-material/DragHandleSharp";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Drawer, IconButton } from "@mui/material";
import { header } from "constants/header";
import { useState } from "react";
import styles from "./styles";

const MobileHeader = ({ isScrolled }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const handleDrawerClose = () => setIsDrawerOpen(false);

  return (
    <Box>
      <IconButton onClick={toggleDrawer}>
        <DragHandleSharpIcon sx={{ color: isScrolled ? "#8C8C8C" : "white" }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        elevation={5}
        PaperProps={{ variant: "outlined" }}
        transitionDuration={{ enter: 300, exit: 300 }}
        sx={styles.drawer}
      >
        <Box sx={styles.drawerContent}>
          <Box sx={styles.drawerHeading}>Menu</Box>
          <Box sx={styles.drawerItemWrapper} onClick={handleDrawerClose}>
            {header.map(({ label, link }, index) => (
              <Box key={index} component="a" href={link} sx={styles.drawerItem}>
                {label}
              </Box>
            ))}
          </Box>
          <Box sx={styles.drawerHeading}>Social</Box>
          <Box sx={styles.iconWrapper}>
            <FacebookSharpIcon sx={styles.icon} />
            <LinkedInIcon sx={styles.icon} />
            <TwitterIcon sx={styles.icon} />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileHeader;
