import React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  Box,
} from "@mui/material";
export default function List() {
  const images = JSON.parse(localStorage.getItem("gallery"));

  return (
    <>
      {images ? (
        <ImageList className="gallery__wrapper">
          {images.map((image, index) => (
            <ImageListItem key={index}>
              <img src={image.data} alt={image.name} />
              <ImageListItemBar title={image.name} />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <Box>
          <Typography variant="h4" align="center">
            😞 Well, there's nothing here...
          </Typography>
        </Box>
      )}
    </>
  );
}
