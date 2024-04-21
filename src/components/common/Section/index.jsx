import { Box } from "@mui/material";
import styles from "./styles";

const Section = ({ id, heading, description, children, customStyles }) => {
  return (
    <Box
      id={id}
      component="section"
      sx={{ ...styles.wrapper, ...customStyles }}
    >
      <Box sx={styles.headerWrapper}>
        <Box sx={styles.heading}>{heading}</Box>
        <Box sx={styles.description}>{description}</Box>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Section;
