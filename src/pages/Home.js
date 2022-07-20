import React, { useCallback, useState } from "react";
import { Button, Box, Typography, Alert, Collapse } from "@mui/material";
import ReactFileReader from "react-file-reader";
import Layout from "../components/layout/Layout";

function Home() {
  const [file, setFile] = useState({});
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const saveFile = () => {
    setLoading(true);
    setShowAlert(true);

    setTimeout(() => {
      setLoading(false);
      setShowAlert(false);

      if (file.type === "text/csv") {
        localStorage.setItem("sheet", file.data.split(",")[1]);
      } else {
        const images = JSON.parse(localStorage.getItem("gallery") || "[]");
        images.push(file);
        localStorage.setItem("gallery", JSON.stringify(images));
      }
    }, 1500);
  };

  const onSelectedFile = (file) => {
    setFile({
      name: file.fileList[0].name,
      type: file.fileList[0].type,
      data: file.base64,
    });
  };

  const emptyStorage = () => {
    setShowAlert(true);
    localStorage.removeItem("sheet");
    localStorage.removeItem("gallery");

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const fileName = useCallback(
    () => (
      <Box>
        <Typography variant="h5" mb={1} align="center">
          Is this your file?
        </Typography>
        {file?.type !== "text/csv" && (
          <Box className="thumbnail__container">
            <Box className="thumbnail__wrapper">
              <img src={file.data} alt={file.name} />
            </Box>
            <Typography variant="subtitle1" mb={1} align="center">
              Here is a preview of your image
            </Typography>
          </Box>
        )}
        <Typography variant="subtitle1" mb={2} align="center">
          {file?.name && `📮 ${file.name}`}
        </Typography>
      </Box>
    ),
    [file]
  );

  return (
    <>
      <Collapse in={showAlert}>
        <Alert severity="success">👍🏼 All good...</Alert>
      </Collapse>
      <Layout>
        <Box mb={10}>
          <Typography variant="h2" align="center">
            Welcome buddy
          </Typography>
        </Box>
        <Box>
          {!file.name ? (
            <Typography variant="subtitle1" mb={2} align="center">
              Upload your files here 🚀
            </Typography>
          ) : (
            fileName()
          )}
          {file?.name && (
            <Box mb={2}>
              <Button
                fullWidth
                variant="contained"
                onClick={saveFile}
                disabled={loading}
              >
                {loading ? "Wait, is loading..." : "Yeah!"}
              </Button>
            </Box>
          )}
          <ReactFileReader
            fileTypes={[".csv", ".png", ".jpg", ".jpeg", ".gif"]}
            base64={true}
            multipart={false}
            handleFiles={onSelectedFile}
          >
            <Button
              fullWidth
              variant={file?.name ? "outlined" : "contained"}
              disabled={loading}
            >
              {file?.name ? "Pick another file..." : "Upload"}
            </Button>
          </ReactFileReader>
        </Box>
        <Box mt={20}>
          <Alert severity="warning">
            I'm using the browser's localStorage (5MB tops) for this challenge,
            so please pick low-size images. Feel free to{" "}
            <span className="action-element-text" onClick={emptyStorage}>
              empty
            </span>{" "}
            whatever you have stored previously
          </Alert>
        </Box>
      </Layout>
    </>
  );
}

export default Home;
