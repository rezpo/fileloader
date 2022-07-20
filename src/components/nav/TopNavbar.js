import React from "react";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import usePaths from "./NavigationPaths";

export default function TopNavbar() {
  const path = usePaths();

  return (
    <nav className="nav__wrapper">
      <Stack direction="row" spacing={2}>
        {path.map((item) => (
          <Link to={item.path} key={item.name}>
            <Button variant={item.variant ?? "contained"} size="small">
              {item.text ?? "..."}
            </Button>
          </Link>
        ))}
      </Stack>
    </nav>
  );
}
