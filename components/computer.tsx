import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

const Computer = () => {
  const imageStyle = {
    paddingTop: "100px",
    paddingBottom: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Box>
      <Box sx={imageStyle}>
        <Image
          src="/Tin/laptop.png" // Đường dẫn đến hình ảnh của bạn
          alt="laptop"
          width={900}
          height={500}
        />
      </Box>
    </Box>
  );
};

export default Computer;
