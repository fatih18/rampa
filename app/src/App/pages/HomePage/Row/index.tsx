import { Grid, Box, Typography } from "@mui/material";

//TODO

const boxStyle = {};

export const Row = () => {
  return (
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
  );
};
