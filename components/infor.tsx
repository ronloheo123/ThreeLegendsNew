import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Roboto } from "next/font/google";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

const Infor = () => {
  return (
    <Grid
      container
      spacing={5}
      style={{
        paddingTop: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={3}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Box
              sx={{
                backgroundImage: `url('/Tin/logo2.png')`,
                width: "44px",
                height: "44px",
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography
              sx={{ fontSize: 25, fontWeight: "bold" }}
              color="black"
              gutterBottom
            >
              The best products start with Sketch
            </Typography>
          </Grid>
        </Grid>
        <Typography sx={{ fontSize: 15 }} color="#374754" gutterBottom>
          Slate helps you see how many more days you need to work to reach your
          financial goal.{" "}
        </Typography>
      </Grid>

      <Grid item xs={3}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Box
              sx={{
                backgroundImage: `url('/Tin/logo3.png')`,
                width: "44px",
                height: "44px",
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography
              sx={{ fontSize: 25, fontWeight: "bold" }}
              color="black"
              gutterBottom
            >
              Fastest way to organize{" "}
            </Typography>
          </Grid>
        </Grid>
        <Typography sx={{ fontSize: 15 }} color="#374754" gutterBottom>
          Slate helps you see how many more days you need to work to reach your
          financial goal.{" "}
        </Typography>
      </Grid>

      <Grid item xs={3}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Box
              sx={{
                backgroundImage: `url('/Tin/logo4.png')`,
                width: "44px",
                height: "44px",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{ fontSize: 25, fontWeight: "bold" }}
              color="black"
              gutterBottom
            >
              Work better together{" "}
            </Typography>
          </Grid>
        </Grid>
        <Typography sx={{ fontSize: 15 }} color="#374754" gutterBottom>
          Slate helps you see how many more days you need to work to reach your
          financial goal.{" "}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Infor;
