import React from "react";
import SearchSection from "../../components/SearchSection";
import Categories from "../../components/Categories";
import DescriptionSection from "../../components/DescriptionSection";
import HowItWorks from "../../components/HowItWorks";
import TEST_ID from "./Home.testid";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <SearchSection />
      <Categories />
      <DescriptionSection />
      <HowItWorks />
    </div>
  );
};

export default Home;
