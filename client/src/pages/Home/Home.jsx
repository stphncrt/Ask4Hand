import React from "react";
import SearchSection from "../../components/SearchSection";
import Categories from "../../components/Categories";
import DescriptionSection from "../../components/DescriptionSection";
import HowItWorks from "../../components/HowItWorks";

const Home = () => {
  return (
    <div>
      <SearchSection />
      <Categories />
      <DescriptionSection />
      <HowItWorks />
    </div>
  );
};

export default Home;
