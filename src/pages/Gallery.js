import React from "react";
import Layout from "../components/layout/Layout";
import { Box } from "@mui/material";
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
