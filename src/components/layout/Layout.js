import React from "react";
import { Box } from "@mui/material";
import TopNavbar from "../nav/TopNavbar";

export default function Layout(props) {
  return (
    <>
      <TopNavbar />
      <Box className="container__wrapper flex--center-column" component="main">
        {props.children}
      </Box>
    </>
  );
}
