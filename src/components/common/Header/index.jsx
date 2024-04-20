import { Box } from "@mui/material";
import { header } from "constants/header";
import { useResponsive } from "hooks/useResponsive";
import { useEffect, useState } from "react";
import SimpleButton from "../Button";
import MobileHeader from "./MobileHeader";
import styles from "./styles";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { screenType } = useResponsive();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={styles.container}>
      <Box component="img" src="/logo.png" alt="logo" sx={styles.mobileImage} />
      {screenType === "TABLET" || screenType === "MOBILE" ? (
        <MobileHeader isScrolled={isScrolled} />
      ) : (
        <Box sx={styles.wrapper}>
          <Box sx={styles.linkWrapper}>
            {header.map(({ label, link }, index) => (
              <Box key={index} component="a" href={link} sx={styles.link}>
                {label}
              </Box>
            ))}
          </Box>
          <Box component="img" src="/logo.png" alt="logo" sx={styles.image} />
          <SimpleButton label="Sign In" customStyles={styles.button} />
        </Box>
      )}
    </Box>
  );
};

export default Header;
