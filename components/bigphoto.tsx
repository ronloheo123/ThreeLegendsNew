import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Roboto } from "next/font/google";
import Image from "next/image";

const Bigphoto = () => {
  const imageStyle2 = {
    zIndex: 4,
    position: "relative", // Cần thêm position để sử dụng thuộc tính top
    top: 150,
  };

  return (
    <Box style={{ display: "flex" }}>
      {/* Box chứa hình ảnh */}
      <Box sx={imageStyle2}>
        <Image
          src="/Tin/hinh3.png" // Đường dẫn đến hình ảnh của bạn
          alt="laptop"
          width={949.718}
          height={788.702}
        />
      </Box>

      {/* Box chứa text */}
      <Box
        sx={{
          zIndex: 4,
          position: "relative", // Cần thêm position để sử dụng thuộc tính top
          top: 280,
          color: "white",
          paddingRight: "80px",
        }}
      >
        <h1 style={{ fontSize: "55px" }}>We focus on ergonomics </h1>
        <p>Most calendars are designed for teams.</p>
        <p>Slate is designed for freelancers</p>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{
            backgroundColor: "white",
            color: "#38A3F1",
            borderRadius: "30px",
            padding: "9px 29px",
            marginTop: "50px",
            fontWeight: "bold",
          }}
        >
          Try For Free
        </Button>
      </Box>
    </Box>
  );
};

export default Bigphoto;
