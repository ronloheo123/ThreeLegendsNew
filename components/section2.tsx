import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import ListItem from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles"; // Thay đổi đường dẫn tùy thuộc vào cấu trúc thư mục của bạn
import Image from "next/image";
import { title } from "process";

const myimage: String[] = ["logo3", "logo2", "logo5"];
const myimage1: String[] = ["logo5", "logo1", "logo4"];
interface HinhAnh {
  src: string;
  alt: string;
}
interface noiDung {
  noidungchinh: String;
  hinhAnh: HinhAnh;
  noidungphu1: String;
  noidungphu2: String;
}
const noiDung1: noiDung = {
  noidungchinh: "Partners",
  hinhAnh: {
    src: "logo1.svg",
    alt: "Alt Text",
  },
  noidungphu1: "Most calendars are designed for teams.",
  noidungphu2: "Slate is designed for freelancers",
};
interface proDuct {
  head: String;
  content: String;
}
const proDuct1: proDuct = {
  head: "Client Name",
  content:
    " Slate helps you see how many more days you need to work to reach your financial goal for month and year.",
};

function ShowImages(props: { item: String[] }) {
  return (
    <>
      <Stack direction="row" justifyContent="center" spacing={"52px"}>
        {props.item.map((item, index) => (
          <Box key={index}>
            <Box>
              {proDuct1.head}
            </Box>
            <Box marginTop={"20px"}>
              <Image
                key={index}
                src={`/Truong/${item}.svg`}
                alt=""
                width={122}
                height={123}
              />
            </Box>
            <Box width={"193px"} textAlign={"center"}>{proDuct1.content}</Box>
          </Box>
        ))}
      </Stack>
    </>
  );
}
const Middle = () => {
  return (
    <>
      <Container>
        <Box>
          <Box textAlign={"center"} fontSize={"46px"} marginTop={"130px"}>
            {noiDung1.noidungchinh}
          </Box>
          <Box textAlign={"center"} marginTop={"27px"}>
            {noiDung1.noidungphu1}
          </Box>
          <Box textAlign={"center"}>{noiDung1.noidungphu2}</Box>
          <Box marginTop={"80px"} textAlign={"center"}>
            {<ShowImages item={myimage} />}
          </Box>
          <Box marginTop={"70px"} textAlign={"center"}>
            {<ShowImages item={myimage1}/>}
          </Box>
        </Box>
      </Container>
    </>
  );
};
export { Middle };
