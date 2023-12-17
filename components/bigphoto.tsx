import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Roboto } from "next/font/google";

const Bigphoto = () => {
  return (
    <Box style={{ display: "flex" }}>
      {/* Box chứa hình ảnh */}
      <Box
        sx={{
          backgroundImage: `url('/Tin/hinh3.png')`,
          width: "900px",
          height: "800px",
          zIndex: 3,
          position: "relative", // Cần thêm position để sử dụng thuộc tính top
          top: 150,
        }}
      />

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
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{
            backgroundColor: "white",
            color: "#38A3F1",
            borderRadius: "30px",
            padding: "19px 39px",
          }}
        >
          Try For Free
        </Button>
      </Box>
    </Box>
  );
};

export default Bigphoto;
