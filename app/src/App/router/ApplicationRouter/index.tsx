/**
 * Application Router
 * This is the main and only router that handles its routes
 */

import { Stack, Toolbar } from "@mui/material";
import CssBaseLine from "@mui/material/CssBaseline";
import { HomePage } from "../../pages/HomePage";
import { ElevatedAppBar } from "../../components/ElevatedAppBar";
import { Example } from "../../pages/Example";
export const ApplicationRouter = () => {
  return (
    <Stack>
      <CssBaseLine />
      {/* AppBar Component */}
      <ElevatedAppBar />
      {/* 
        <HomePage /> */}
      <Toolbar />
      <Example />

      {/* Footer Component */}
    </Stack>
  );
};
