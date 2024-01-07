// Detail.tsx
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { Box, Button, Switch } from "@mui/material";
import Layout from "@/components/layout";
import Layout1 from "@/components/layout1";

import { useState } from "react";
import Layout2 from "@/components/layout2";
import Layout3 from "@/components/layout3";
import Layout4 from "@/components/layout4";
import Detail1 from "./detail1";
const Home: NextPageWithLayout = () => {
  return (
    <>
      <Box>Home</Box>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};

export default Home;
