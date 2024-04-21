import { Box, InputBase } from "@mui/material";
import { Button } from "components/common";
import { useState } from "react";
import styles from "./styles";

const JoinCommunity = () => {
  const [email, setEmail] = useState("");
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.heading}>
          Join the <span className="vlippr">Vlippr</span> Community Today!
        </Box>
        <Box sx={styles.description}>
          Ready to embark on your journey to financial freedom? Apply now to
          become a Vlippr content creator or subscriber and start earning
          rewards today
        </Box>
        <Box sx={styles.subscriberCount}>
          <Box sx={styles.count}>515,131</Box>
          <Box sx={styles.countText}>People are on the reservation list</Box>
        </Box>
        <Box sx={styles.inputWrapper}>
          <InputBase
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            sx={styles.inputColor}
          />
          <Button label="Count me in" customStyles={styles.button} />
        </Box>
      </Box>
    </Box>
  );
};

export default JoinCommunity;
