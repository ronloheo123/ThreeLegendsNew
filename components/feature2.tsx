import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Roboto } from "next/font/google";
import { Typography } from "@mui/material";

const Feature2 = () => {
  return (
    <Box
      style={{
        paddingTop: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: 40 }} color="black" gutterBottom>
        Lightning fast
      </Typography>
      <Typography sx={{ fontSize: 40 }} color="black" gutterBottom>
        prototyping
      </Typography>
      <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
        Most calendars are designed for teams.
      </Typography>
      <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
        Slate is designed for freelancers
      </Typography>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{
          backgroundColor: "#38A3F1",
          color: "white",
          borderRadius: "30px",
          padding: "19px 39px",
          marginTop: "70px",
        }}
      >
        Try For Free
      </Button>
    </Box>
  );
};

export default Feature2;
