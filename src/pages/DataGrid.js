import React from "react";
import Grid from "../components/datagrid/Grid";
import Layout from "../components/layout/Layout";
import { Box } from "@mui/material";

export default function DataGrid() {
  return (
    <Layout>
      <Box className="width--full">
        <Grid />
      </Box>
    </Layout>
  );
}
