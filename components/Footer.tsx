import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button";
interface noiDung {
  content: String;
  contentphu: String;
}
const noiDung1: noiDung = {
  content: "Testimonials",
  contentphu: "",
};
const noiDung2: noiDung = {
  content:
    "Most calendars are designed for teams. Slate is designed for freelancers who want a simple",
  contentphu: " way to plan their schedule.",
};
const image1: String = "logofooter";
const image2: String = "nguoi";
const noiDung3: noiDung = {
  content: "Organize across",
  contentphu: "Ui designer",
};
function Footer() {
  return (
    <>
      <Box textAlign={"center"} marginTop={"191px"} fontSize={"46px"}>
        {noiDung1.content}
      </Box>
      <Box textAlign={"center"} marginTop={"90px"}>
        <Image
          src={`/Truong/${image1}.png`}
          width={229}
          height={46}
          alt="logo"
        />
      </Box>
      <Box textAlign={"center"} marginTop={"60px"}>
        <Box>{noiDung2.content}</Box>
        <Box>{noiDung2.contentphu}</Box>
      </Box>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"60px"}
        spacing={1}
      >
        <Box>
          <Image
            src={`/Truong/${image2}.svg`}
            width={50}
            height={50}
            alt="logo"
          />
        </Box>
        <Box>
          <Box>{noiDung3.content}</Box>
          <Box>{noiDung3.contentphu}</Box>
        </Box>
      </Stack>
      <Box textAlign={"center"} marginTop={"80px"}>
        <Button
          sx={{
            borderRadius: "39px",
            width: "236px",
            height: "40px",
            background: "var(--Secondary, #38A3F1)",
          }}
          variant="contained"
        >
          More Testimonials
        </Button>
      </Box>
    </>
  );
}

export { Footer };
