import { Box } from "@mui/material";
import { Button } from "components/common";
import styles from "./styles";

const Banner = () => {
  return (
    <Box component="section" id="#" sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box
          component="img"
          src="/banner.jpeg"
          alt="banner"
          sx={styles.image}
        />
        <Box sx={styles.overlay} />
        <Box sx={styles.content}>
          <Box sx={styles.tagLine}>Earn While You Enjoy</Box>
          <Box sx={styles.heading}>
            Transform Your Passion into Profits with{" "}
            <span className="vlippr">Vlippr!</span>
          </Box>
          <Box sx={styles.description}>
            Welcome to Vlippr, where creativity meets prosperity. Join us to
            revolutionize content creation and consumption. Be part of a
            community where both creators and viewers reap the rewards.
          </Box>
          <Box sx={styles.applyWrapper}>
            <Box sx={styles.applyText}>
              Enter your email to apply and start earning today!
            </Box>
            <Box sx={styles.applyOverlay} />
            <Button label="Apply Now!" customStyles={styles.applyButton} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
