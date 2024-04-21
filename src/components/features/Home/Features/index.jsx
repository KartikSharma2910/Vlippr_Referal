import { Box } from "@mui/material";
import { Section } from "components/common";
import { featureData } from "constants/features";
import styles from "./styles";

const Features = () => {
  return (
    <Section
      id="features"
      heading="Features"
      description="Elevate Your Content Creation Experience"
      customStyles={styles.wrapper}
    >
      <Box sx={styles.container}>
        <Box sx={styles.heading}>
          Discover a World Where Creativity Flourishes and Earnings Soar.
          Explore Vlippr's Cutting-Edge Tools and Resources Designed to Empower
          Every Creator's Journey.
        </Box>

        <Box sx={styles.featureContainer}>
          {featureData.map(
            ({ imageUrl, heading, description, subDescription }, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    ...styles.featureCard,
                    flexDirection: {
                      xs: "column",
                      sm: index % 2 !== 0 ? "row-reverse" : "row",
                    },
                  }}
                >
                  <Box sx={styles.featureImageWraper}>
                    <Box
                      component="img"
                      src={imageUrl}
                      sx={styles.featureImage}
                    />
                  </Box>
                  <Box sx={styles.featureDataWrapper}>
                    <Box>{heading}</Box>
                    <Box sx={styles.featureDescription}>{description}</Box>
                    <Box sx={styles.featureDescription}>{subDescription}</Box>
                  </Box>
                </Box>
              );
            }
          )}
        </Box>
      </Box>
    </Section>
  );
};

export default Features;
