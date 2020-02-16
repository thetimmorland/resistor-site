import React from "react";
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
import GitHubIcon from "@material-ui/icons/GitHub";

export default function TitleBar() {
  return (
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
  );
}
