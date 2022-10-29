import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <Container fixed sx={{ maxWidth: { sm: 600, md: 900, lg: 1200 } }}>
      <Header />
      <section style={{ display: "none" }}>
        <main>
          <Stack alignItems={{ xs: "center", md: "unset" }}>
            <Typography variant="h3">Applications</Typography>
            <Grid container gap={12} mb={64} mt={16}>
              <Grid item xs={12} md={3}>
                {/* TODO: Extract to a component */}
                <Box
                  height="280px"
                  minWidth="280px"
                  maxWidth="280px"
                  margin="auto"
                  border="12px solid white"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    transition: "0.15s",
                    "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
                  }}
                >
                  <Typography fontSize={24} textAlign="center">
                    Image of PJ Brazilian Tax Calculator
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box
                  height="280px"
                  minWidth="280px"
                  maxWidth="280px"
                  margin="auto"
                  border="12px solid white"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    transition: "0.15s",
                    "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
                  }}
                >
                  <Typography fontSize={24} textAlign="center">
                    Image of PJ Brazilian Tax Calculator
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </main>
      </section>
    </Container>
  );
};

export default Home;
