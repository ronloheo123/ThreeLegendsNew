import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Roboto } from "next/font/google";

const Head = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url('/Tin/logo.png')`, // Thay đổi đường dẫn đến hình ảnh mới
          width: "186px",
          height: "54px", // Đặt chiều cao của hình ảnh mới
          position: "absolute",
          top: 0,
          left: 40,
          zIndex: 3,
        }}
      />
    </Box>
  );
};

export default Head;
