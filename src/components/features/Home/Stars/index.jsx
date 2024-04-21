import { Box } from "@mui/material";
import { Section } from "components/common";
import { starsCard } from "constants/stars";
import styles from "./styles";

const Stars = () => {
  return (
    <Section
      heading="STARS"
      description="Meet Our Vlippr Stars"
      customStyles={styles.wrapper}
    >
      <Box sx={styles.container}>
        <Box sx={styles.text}>
          At Vlippr, we pride ourselves on nurturing and showcasing top talent
          from around the globe. Our selected content creators represent the
          epitome of creativity, innovation, and passion. Explore their
          captivating content and join us in celebrating their success stories.
        </Box>
        <Box sx={styles.cardsWrapper}>
          {starsCard.map(({ image, name, profession }, index) => {
            return (
              <Box key={index} sx={styles.card}>
                <Box component="img" src={image} alt="user" sx={styles.image} />
                <Box sx={styles.dataContainer}>
                  <Box>{name}</Box>
                  <Box sx={styles.profession}>{profession}</Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Section>
  );
};

export default Stars;
