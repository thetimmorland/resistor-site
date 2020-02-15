import React from "react";
import cv from "./opencv";

import Webcam from "react-webcam";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  AppBar,
  Box,
  CssBaseline,
  LinearProgress,
  Container,
  MenuItem,
  Grid,
  Paper,
  Toolbar,
  Typography
} from "@material-ui/core";

cv["onRuntimeInitialized"] = () => {
  console.log(cv.getBuildInformation());
};

export default function App() {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  const [resistorFound, updateResistorFound] = React.useState(false);

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-between"
          >
            <Grid item>
              <Typography variant="h6">Resistor site️</Typography>
            </Grid>
            <Grid item>
              <MenuItem
                onClick={() => {
                  window.location.href =
                    "https://github.com/thetimmorland/resistor-site";
                }}
              >
                <GitHubIcon />
              </MenuItem>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box m={1}>
        <Container maxWidth="sm">
          <Paper>
            <Box p={1}>
              <Webcam
                audio={false}
                ref={webcamRef}
                width="100%"
                screenshotFormat="image/jpeg"
              />
              <LinearProgress />
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
