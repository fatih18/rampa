import {
  Typography,
  Container,
  Grid,
  Box,
  Divider,
  Button,
  Paper,
  TextField
} from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "react-oidc-context";

export const Example = () => {
  const [counter, setCounter] = useState(0);
  const auth = useAuth();

  // Auth method that trigger sso
  const increment = () => {
    //setCounter(counter + 1);
    auth.signinRedirect();
    // login();
  };
  //decrement counter
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <Container maxWidth='xl'>
      <Grid item>
        <Typography textAlign='center'>Counter Application</Typography>
      </Grid>

      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}
      ></Grid>

      <Box
        component='span'
        sx={{
          justifyContent: "space-between",
          display: "flex",
          flexWrap: "wrap",
          p: 1,
          marginTop: 1,
          border: "1px dashed red",
          "& > :not(style)": {
            m: 1,
            width: 240,
            height: 480
          }
        }}
      >
        <Button onClick={() => decrement()} variant='outlined'>
          <Typography sx={{ marginBottom: 4 }} variant='h1'>
            __
          </Typography>
        </Button>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography variant='h2'>{counter}</Typography>
        </Paper>
        <Button onClick={increment} variant='outlined'>
          <Typography variant='h1'> +</Typography>
        </Button>
      </Box>
    </Container>
  );
};
