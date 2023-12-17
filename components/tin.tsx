import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Roboto } from "next/font/google";

const HeaderTin = () => {
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
    </Box>
  );
};

export default HeaderTin;
