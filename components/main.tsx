import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Roboto } from "next/font/google";
import Background from "./background";
import Head from "./head";
import Logo from "./logo";
import Bigphoto from "./bigphoto";

const All = () => {
  return (
    <Box>
      <Box>
        <Background></Background>
        <Head></Head>
        <Logo></Logo>
        <Bigphoto></Bigphoto>
      </Box>
    </Box>
  );
};

export default All;
