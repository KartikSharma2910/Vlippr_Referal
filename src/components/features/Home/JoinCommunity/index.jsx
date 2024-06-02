import { Box, InputBase } from "@mui/material";
import axios from "axios";
import { Button } from "components/common";
import { useEffect, useState } from "react";
import styles from "./styles";

const JoinCommunity = () => {
  const [email, setEmail] = useState("");
  const [subscriberCount, setSubscriberCount] = useState(0);

  useEffect(() => {
    const fetchSubscriberCount = async () => {
      try {
        const response = await axios.get(
          "https://vlippr.com/pankaj/api.php?v=1.0&platform=desktop&type=get_referrer_count",
          {
            headers: {
              "Content-Type": "application/json",
              api_key: "80d436738cde977b773cd74dd6ae4130",
              Cookie:
                "PHPSESSID=10ae41995ube6hkj819rk6balk; _uads=a%3A2%3A%7Bs%3A4%3A%26quot%3Bdate%26quot%3B%3Bi%3A1716114807%3Bs%3A5%3A%26quot%3Buaid_%26quot%3B%3Ba%3A0%3A%7B%7D%7D; mode=night",
            },
          }
        );

        if (response.data.api_status === "200") {
          setSubscriberCount(response.data.data);
        } else {
          console.error("API returned an error status");
        }
      } catch (error) {
        console.error("Error fetching subscriber count:", error);
      }
    };

    fetchSubscriberCount();
  }, []);

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
          <Box sx={styles.count}>{subscriberCount.toLocaleString()}</Box>
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
