import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Roboto } from "next/font/google";

const Head = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "20px", // Điều chỉnh vị trí top của Box chứa nút
        right: "20px", // Điều chỉnh vị trí right của Box chứa nút
        zIndex: 2,
        color: "white",
        // Để nút hiển thị phía trên cùng
      }}
    >
      <Button sx={{ fontSize: "12px", margin: "0 8px" }} color="inherit">
        Home
      </Button>
      <Button sx={{ fontSize: "12px", margin: "0 8px" }} color="inherit">
        Product
      </Button>
      <Button sx={{ fontSize: "12px", margin: "0 8px" }} color="inherit">
        Pricing
      </Button>
      <Button sx={{ fontSize: "12px", margin: "0 8px" }} color="inherit">
        About
      </Button>
      <Button sx={{ fontSize: "12px", margin: "0 8px" }} color="inherit">
        Contact
      </Button>
      <input
        type="email"
        placeholder="Your Email"
        style={{
          marginRight: "12px",
          width: "273px",
          padding: "19px 39px", // Điều chỉnh padding để làm cho ô nhập liệu to ra
          borderRadius: "30px", // Điều chỉnh góc bo tròn
          border: "1px solid #ccc",
          gap: "64px",
        }}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{
          backgroundColor: "white",
          color: "#EF2779",
          padding: "19px 39px",
          borderRadius: "30px",
        }}
      >
        Subscribe
      </Button>
    </Box>
  );
};

export default Head;
