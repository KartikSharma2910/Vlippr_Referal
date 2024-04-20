import { Box } from "@mui/material";
import React from "react";

const Section = ({ heading, description, children, customStyles }) => {
  return (
    <Box component="section">
      <Box>
        <Box>{heading}</Box>
        <Box>{description}</Box>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Section;
