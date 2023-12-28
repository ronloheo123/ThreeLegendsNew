// Detail.tsx
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../_app";
import { Box, Button, Switch } from "@mui/material";
import Layout from "@/components/layout";
import Layout1 from "@/components/layout1";

import { useState } from "react";
import Layout2 from "@/components/layout2";
import Layout3 from "@/components/layout3";
import Layout4 from "@/components/layout4";
const Detail1: NextPageWithLayout = () => {
  return (
    <>
      <Box>wqdqwd</Box>
    </>
  );
};

Detail1.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>
        <Layout1>{page}</Layout1>
      </Layout>
    </>
  );
};

export default Detail1;
