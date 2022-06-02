import React from "react";
import NavBar from "../../components/Nav";
import SearchSection from "../../components/SearchSection";
import Categories from "../../components/Categories";
import DescriptionSection from "../../components/DescriptionSection";
import HowItWorks from "../../components/HowItWorks";
import Footer from "../../components/Footer";
import TEST_ID from "./Home.testid";

const Home = () => {
	return (
		<div data-testid={TEST_ID.container}>
			<NavBar />
			<SearchSection />
			<Categories />
			<DescriptionSection />
			<HowItWorks />
			<Footer />
		</div>
	);
};

export default Home;
