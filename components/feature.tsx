import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Roboto } from "next/font/google";
import { Typography } from "@mui/material";

const Feature = () => {
  return (
    <Box
      style={{
        paddingTop: "170px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
        At your fingertips
      </Typography>
      <Typography sx={{ fontSize: 40 }} color="black" gutterBottom>
        Features
      </Typography>
      <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
        Most calendars are designed for teams.
      </Typography>
      <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
        Slate is designed for freelancers
      </Typography>
    </Box>
  );
};

export default Feature;
