import { Box } from "@mui/material";
import { Section } from "components/common";
import styles from "./styles";

const Posts = () => {
  return (
    <Section heading="Posts" customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.leftContainer}>
          <Box sx={styles.imageWrapper}>
            <Box component="img" src="/sand.jpeg" sx={styles.image} />
          </Box>
          <Box sx={styles.imageWrapper}>
            <Box component="img" src="/painting.jpeg" sx={styles.image} />
          </Box>
        </Box>
        <Box sx={styles.rightContainer}>
          <Box sx={styles.miniImage}>
            <Box sx={styles.imageWrapper}>
              <Box component="img" src="/tradeFair.jpeg" sx={styles.image} />
            </Box>
            <Box sx={styles.imageWrapper}>
              <Box component="img" src="/girl.jpeg" sx={styles.image} />
            </Box>
          </Box>
          <Box sx={styles.miniImage}>
            <Box sx={styles.imageWrapper}>
              <Box component="img" src="/mango.jpeg" sx={styles.image} />
            </Box>
            <Box sx={styles.imageWrapper}>
              <Box component="img" src="/car.jpeg" sx={styles.image} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Posts;
