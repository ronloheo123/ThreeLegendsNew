import React from "react";
import Box from "@mui/material/Box";
import { Input } from "@mui/base/Input";

interface NoiDung {
  NoiDungChinh: string;
  NoiDungPhu: string;
}

const noidung1: NoiDung = {
  NoiDungChinh: "At your fingertips",
  NoiDungPhu: "Lightning fast prototyping",
};
const noidung2: NoiDung = {
  NoiDungChinh: "Subscribe to our Newsletter",
  NoiDungPhu: "Available exclusivery on Figmaland",
};

const MyComponent1 = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#f0f0f0" }}>
        <Box sx={{ marginLeft: "632.5px", paddingTop: "80px" }}>
          {noidung1.NoiDungChinh}
        </Box>
        <Box
          sx={{ marginLeft: "454.5px", fontSize: "46px", marginTop: "7px " }}
        >
          {noidung1.NoiDungPhu}
        </Box>
        <Box sx={{ marginLeft: "580.5px", marginTop: "69px" }}>
          {noidung2.NoiDungChinh}
        </Box>
        <Box sx={{ marginLeft: "577px", marginTop: "10px" }}>
          {noidung2.NoiDungPhu}
        </Box>
       <Box></Box>
      </Box>
    </>
  );
};

export { MyComponent1 };
