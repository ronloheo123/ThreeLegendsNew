import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Roboto } from "next/font/google";
import Background from "./background";
import Head from "./head";
import Logo from "./logo";
import Bigphoto from "./bigphoto";
import Feature from "./feature";
import Infor from "./infor";
import Feature2 from "./feature2";
import Computer from "./computer";

const All = () => {
  return (
    <Box>
      <Box>
        <Background></Background>
        <Head></Head>
        <Logo></Logo>
        <Bigphoto></Bigphoto>
        <Feature></Feature>
        <Infor></Infor>
        <Feature2></Feature2>
        <Computer></Computer>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default All;
