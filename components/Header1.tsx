import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import UnstyledInputIntroduction from "./truong1";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";



const useStyles = makeStyles({
  input: {
    borderRadius: "12px",
    border: "1px solid #000", // Đường viền màu đen
    backgroundColor: "#fff", // Màu nền trắng
  },
  backgroundGradient: {
    background: "linear-gradient(40deg, #EF2779 0.79%, #7834BE 79.29%)",
  },
});

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
  NoiDungPhu: "Available exclusively on Figmaland",
};

const Header1 = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(40deg, #EF2779 0.79%, #7834BE 79.29%)",
        }}
      >
        <Box sx={{ textAlign: "center", paddingTop: "80px", color: "white" }}>
          {noidung1.NoiDungChinh}
        </Box>
        <Box
          sx={{
            textAlign: "center",
            fontSize: "46px",
            marginTop: "7px ",
            color: "white",
          }}
        >
          {noidung1.NoiDungPhu}
        </Box>
        <Box sx={{ textAlign: "center", marginTop: "69px", color: "white" }}>
          {noidung2.NoiDungChinh}
        </Box>
        <Box sx={{ textAlign: "center", marginTop: "10px", color: "white" }}>
          {noidung2.NoiDungPhu}
        </Box>
        <Box sx={{ textAlign: "center", marginTop: "30px" }}>
          <UnstyledInputIntroduction></UnstyledInputIntroduction>
        </Box>
        <Box
          sx={{ textAlign: "center", marginTop: "24px", paddingBottom: "97px" }}
        >
          <Button
            sx={{
              borderRadius: "39px",
              width: "305px",
              height: "40px",
              background: "var(--Primary, #EF2779)",
            }}
            variant="contained"
          >
            Subscribe
          </Button>
        </Box>
      </Box>
      <Box></Box>
    </>
  );
};

export { Header1 };
