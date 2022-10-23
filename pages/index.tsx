import { Container } from "@mui/material";
import type { NextPage } from "next";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <Container fixed>
      <Header />
    </Container>
  );
};

export default Home;
