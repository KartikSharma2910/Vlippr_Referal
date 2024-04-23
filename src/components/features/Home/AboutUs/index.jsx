import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Box, Modal } from "@mui/material";
import { Button, DropDown, Input, Section } from "components/common";
import { giftCards } from "constants/aboutUs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles";
import "./styles.css";

const AboutUs = () => {
  const {
    control,
    formState: { errors },
    clearErrors,
    trigger,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      number: "",
      role: "",
    },
    mode: "onBlur",
    criteriaMode: "all",
  });

  const [completed, setIsCompleted] = useState(false);
  const [userType, setUserType] = useState("creator");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    reset();
    setOpen(true);
  };

  const handleClose = () => {
    setIsCompleted(false);
    setOpen(false);
  };

  return (
    <Section
      id="about"
      heading="About US"
      description="Unleash Your Earnings Potential!"
      customStyles={styles.wrapper}
    >
      <div className="confetti">
        {[...Array(13)].map((_, index) => (
          <div key={index} className="confetti-piece"></div>
        ))}
      </div>
      <Box sx={styles.content}>
        <Box
          sx={{
            ...styles.leftImageWrapper,
            height: userType === "creator" ? "280px" : "200px",
            width: userType === "creator" ? "280px" : "200px",
          }}
        >
          <Box component="img" src="/smartphoneKid.jpeg" sx={styles.image} />
          <Box
            sx={{
              ...styles.leftOverlay,
              height: userType === "creator" ? "200px" : "140px",
              width: userType === "creator" ? "200px" : "140px",
            }}
          />
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
          <Box sx={styles.dataHeading}>
            {userType === "creator" ? "Content Creators" : "Subscribers"}
          </Box>
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
        <Box
          sx={{
            ...styles.rightImageWrapper,
            height: userType === "subscriber" ? "280px" : "200px",
            width: userType === "subscriber" ? "280px" : "200px",
          }}
        >
          <Box component="img" src="/headphoneKid.jpeg" sx={styles.image} />
          <Box
            sx={{
              ...styles.rightOverlay,
              height: userType === "subscriber" ? "200px" : "140px",
              width: userType === "subscriber" ? "200px" : "140px",
            }}
          />
        </Box>
        <Box sx={styles.giftCards}>
          {giftCards.map(({ image, price }, index) => (
            <Box
              key={index}
              sx={{
                ...styles.giftCardWrapper,
                "&:hover img": { className: "shake" },
              }}
            >
              <Box
                component="img"
                src={image}
                alt="gift"
                sx={styles.giftCardImage}
              />
              <Box sx={styles.price}>{price}</Box>
              <Box
                sx={styles.claimButton}
                onClick={() => {
                  clearErrors();
                  handleOpen();
                }}
              >
                Claim Now
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        sx={styles.mainModal}
        disableAutoFocus
        disableEnforceFocus
        disableRestoreFocus
      >
        <Box sx={styles.modal}>
          <Box sx={styles.modalHeader}>
            <Box component="img" src="/modalImage.png" sx={styles.modalImage} />
            {completed ? (
              <Box
                sx={{
                  ...styles.modalUpperContainer,
                  fontSize: "20px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Hooray! You're Vlippr Wishlist Royalty!
              </Box>
            ) : (
              <Box sx={styles.modalUpperContainer}>
                <Box sx={styles.modalHeading}>Join the Wishlist</Box>
                <Box sx={styles.modalDescription}>
                  Join our growing waitlist of 515,131 people and get early
                  access when its out.
                </Box>
              </Box>
            )}
          </Box>
          {!completed && (
            <Box sx={styles.modalContainer}>
              <Input
                name="name"
                label="Name"
                startIcon={<Person2OutlinedIcon sx={styles.modalIcon} />}
                placeholder="Enter your name"
                rules={{ required: "This is a required field" }}
                errors={errors}
                control={control}
              />
              <Input
                name="number"
                label="Number"
                startIcon={<LocalPhoneOutlinedIcon sx={styles.modalIcon} />}
                errors={errors}
                rules={{ required: "This is a required field" }}
                placeholder="Enter your number"
                control={control}
              />
              <Input
                name="email"
                label="Email"
                startIcon={<EmailOutlinedIcon sx={styles.modalIcon} />}
                errors={errors}
                rules={{ required: "This is a required field" }}
                placeholder="Enter your email"
                control={control}
              />
              <DropDown
                name="rolw"
                label="Role"
                startIcon={<EmailOutlinedIcon sx={styles.modalIcon} />}
                errors={errors}
                rules={{ required: "This is a required field" }}
                placeholder="What best describses you"
                options={[
                  {
                    label: "Subscriber",
                    value: "subscriber",
                  },
                  {
                    label: "Content Creator",
                    value: "creator",
                  },
                ]}
                control={control}
              />
              <Button
                label="JOIN THE WAITLIST"
                onClick={() =>
                  trigger().then((res) => res && setIsCompleted(true))
                }
                customStyles={styles.modalButton}
              />
            </Box>
          )}
        </Box>
      </Modal>
    </Section>
  );
};

export default AboutUs;
