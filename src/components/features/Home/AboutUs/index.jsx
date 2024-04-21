import { Box } from "@mui/material";
import { Section } from "components/common";
import { giftCards } from "constants/aboutUs";
import { useState } from "react";
import styles from "./styles";

const AboutUs = () => {
  const [userType, setUserType] = useState("creator");

  return (
    <Section
      id="about"
      heading="About US"
      description="Unleash Your Earnings Potential!"
      customStyles={styles.wrapper}
    >
      <Box sx={styles.content}>
        <Box sx={styles.leftImageWrapper}>
          <Box component="img" src="/smartphoneKid.jpeg" sx={styles.image} />
          <Box sx={styles.leftOverlay} />
        </Box>
        <Box sx={styles.tabsWrapper}>
          <Box
            sx={{
              ...styles.tab,
              color: userType === "creator" ? "white" : "#AF52DE",
              backgroundColor:
                userType === "creator" ? "#7F0482" : "transparent",
            }}
            onClick={() => setUserType("creator")}
          >
            CONTENT CREATORS
          </Box>
          <Box
            sx={{
              ...styles.tab,
              color: userType === "subscriber" ? "white" : "#AF52DE",
              backgroundColor:
                userType === "subscriber" ? "#7F0482" : "transparent",
            }}
            onClick={() => setUserType("subscriber")}
          >
            SUBSCRIBERS
          </Box>
        </Box>
        <Box sx={styles.dataContainer}>
          <Box sx={styles.dataHeading}>Content Creators</Box>
          <Box sx={styles.dataDescription}>
            At Vlippr, we believe in rewarding creativity like never before.
            With our generous monthly prize pools, content creators have the
            opportunity to earn big simply by doing what they love – creating
            content
          </Box>
        </Box>
        <Box sx={styles.dataContainer}>
          <Box sx={styles.dataHeading}>Claim your pool size</Box>
          <Box sx={styles.description}>Ensure monthly reward</Box>
        </Box>
        <Box sx={styles.rightImageWrapper}>
          <Box component="img" src="/headphoneKid.jpeg" sx={styles.image} />
          <Box sx={styles.rightOverlay} />
        </Box>
        <Box sx={styles.giftCards}>
          {giftCards.map(({ image, price }, index) => {
            return (
              <Box key={index} sx={styles.giftCardWrapper}>
                <Box
                  component="img"
                  src={image}
                  alt="gift"
                  sx={styles.giftCardImage}
                />
                <Box sx={styles.price}>{price}</Box>
                <Box sx={styles.claimButton}>Claim Now</Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Section>
  );
};

export default AboutUs;
