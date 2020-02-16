import React from "react";
import WebWorker from "react-webworker";
import {
  Box,
  CssBaseline,
  LinearProgress,
  Container,
  Grid,
  Paper,
  Typography,
  Snackbar,
  Alert
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import TitleBar from "./TitleBar";

const cvWorker = new Worker("./cv.worker.js");

export default function App() {
  const [webCamError, setWebCamError] = React.useState(false);
  const [identifiedResistors, setIdentifiedResistors] = React.useState([]);

  const appendResistor = resistor => {
    setIdentifiedResistors([...identifiedResistors, resistor]);
  };

  return (
    <>
      <CssBaseline />
      <TitleBar />
      <Box m={1}>
        <Container maxWidth="sm">
          <Paper>
            <Box p={1}>
              <WebWorker worker={cvWorker}>
                <WebWorker.Data>{data => <p>data</p>}</WebWorker.Data>
              </WebWorker>
              <LinearProgress />
            </Box>
          </Paper>
        </Container>
      </Box>
      <Snackbar open={webCamError}>
        <MuiAlert severity="error" variant="filled">
          A Webcam is required to use this tool.
        </MuiAlert>
      </Snackbar>
    </>
  );
}
