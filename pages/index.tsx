import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/components/Link";
import ProTip from "../src/components/ProTip";
import Copyright from "../src/components/Copyright";
import ThemeUpdater from "../src/components/ThemeUpdater";
import Desplegable1 from "../src/components/desplegable1";
import pdate from "../src/components/p-date";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>

        <ThemeUpdater />
        <Desplegable1 />
        <pdate />
        

        <Link href="/about" color="secondary">
          Go to the about page
        </Link>

        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
