import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Typography } from "@mui/material";
import List from "../components/gallery/List";

export default function Gallery() {
  return (
    <Layout>
      <Box>
        <List />
      </Box>
    </Layout>
  );
}
