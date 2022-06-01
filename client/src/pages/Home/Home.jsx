import React from "react";
import { NavBar } from "../../components/Nav";
import TEST_ID from "./Home.testid";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <NavBar />
    </div>
  );
};

export default Home;
