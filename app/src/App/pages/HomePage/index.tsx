/**
 * HomaPage
 *
 * This is the starting page of the application
 *
 */

import { Grid, Typography, Container, Box } from "@mui/material";

////////////////////////////////
//
////////////////////////////////

const boxStyle = {
  height: 280,
  width: 200,
  backgroundColor: "red",
  borderRadius: 4,
  padding: 2
};

export const HomePage = () => {
  return (
    <Container maxWidth='xl'>
      <Grid>
        <Typography textAlign='center'>HOME PAGE</Typography>
      </Grid>

      {/* Top Banner */}
      <Grid item mt={10}>
        <Box
          sx={{ height: 400, width: "100%", backgroundColor: "skyblue" }}
        ></Box>
      </Grid>

      {/* Mid Row Banner */}

      <Grid sx={{ backgroundColor: "lightgreen" }}>
        <Grid
          xs={12}
          container
          sx={{ justifyContent: "space-between", padding: 2 }}
          mt={4}
        >
          <Grid spacing={3}>
            <Box sx={boxStyle}>
              <Typography>1.Birinci Adana</Typography>{" "}
            </Box>
          </Grid>

          <Grid spacing={3}>
            <Box sx={boxStyle}>
              <Typography>2.Ikinci Antep</Typography>
            </Box>
          </Grid>

          <Grid spacing={3}>
            <Box sx={boxStyle}>
              <Typography>3.Yalanam Adana</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
