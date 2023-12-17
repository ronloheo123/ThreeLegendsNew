import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Roboto } from "next/font/google";

const Background = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url('/Tin/hinh1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "950.5px",
          flexShrink: 0,
          position: "absolute", // Định vị tuyệt đối theo header
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          backgroundImage: `url('/Tin/hinh2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          width: "100%",
          height: "805.179px",
          flexShrink: 0,
          position: "absolute", // Định vị tuyệt đối theo header
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Background;
