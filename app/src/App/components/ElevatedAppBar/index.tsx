/**
 **Elevated App Bar
 **
 ** This is the component that helps user to
 ** change theme, locale
 ** navigate to HomePage
 ** whatsapp
 */
/**
 *
 * ElevatedAppBar
 *
 */
import { DarkMode, Dashboard, Translate } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import { Box, alpha, styled } from "@mui/system";
import React, { useRef } from "react";

import { Route } from "react-router-dom";

import logoImg from "../../assets/img/rampa.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

export function ElevatedAppBar() {
  return (
    <>
      <AppBar elevation={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Toolbar>
          <Container maxWidth='xl' sx={{ mx: "auto" }} disableGutters>
            {/* app name */}
            <Grid container direction='row' justifyContent='space-between'>
              <Stack display='inline-flex' flexGrow={1} direction='row'>
                <img src={logoImg} alt='rampa logo' height={36}></img>
                {/* <Typography variant="h5" color="white" fontWeight="bold">
                    {t(messages.appName())}
                  </Typography> */}
              </Stack>
              <Grid
                item
                display='inline-flex'
                alignItems='center'
                justifyContent='center'
              >
                <Grid item justifyContent='flex-end'>
                  <Paper
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: 40,
                      px: 1,
                      mx: 1,
                      cursor: "pointer"
                    }}
                    // onClick={toggleDialog}
                  >
                    <SearchIcon color='primary'>
                      <SearchIconWrapper>
                        <Search />
                      </SearchIconWrapper>
                    </SearchIcon>
                    <Typography ml={2} variant='body1' color='text.secondary'>
                      All Products...&nbsp;
                    </Typography>
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "background.default",
                        borderRadius: 1,
                        height: 32,
                        px: 1,
                        ml: 3
                      }}
                    >
                      <Typography
                        variant='caption'
                        fontWeight='bold'
                        component='code'
                      >
                        ⌘K
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>

                <Grid item>
                  {/* go to dashboard button */}

                  {/* change theme button */}
                  <Tooltip title='adana'>
                    <IconButton
                      aria-label='change theme'
                      aria-controls='menu-appbar'
                      aria-haspopup='false'
                      //   onClick={toggle}
                      color='inherit'
                    >
                      <DarkMode />
                    </IconButton>
                  </Tooltip>

                  {/* change locale button */}
                  <Tooltip title='Kendini bilmez'>
                    <IconButton
                      aria-label='change locale'
                      aria-controls='menu-appbar'
                      aria-haspopup='false'
                      color='inherit'
                    >
                      <Translate />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
