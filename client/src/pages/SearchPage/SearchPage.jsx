import React, { useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import TitleCheckBox from "../../components/TitleCheckBox";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../../components/Map/Map";
import WorkerInfoCard from "../../components/WorkerInfoCard";

const libraries = ["places"];
function SearchPage() {
	const location = useLocation().state;
	const { workerList, getWorkerByTitle, getWorkerByCategory, isLoading } = useContext(AppContext);
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
		libraries,
	});
	useEffect(() => {
		if (location.categoryId) {
			getWorkerByCategory(`/find/${location.categoryId}`);
		}
		if (location.occupationId) {
			getWorkerByTitle(`/search/${location.occupationId}`);
		}
	}, []);

	return (
		<StyledWrapper>
			<div className="flex-row">
				<TitleCheckBox occupationId={location.occupationId} categoryId={location.categoryId} />
				<div className="map">
					{loadError ? "error" : !isLoaded ? "loading..." : <Map workerList={workerList} />}
				</div>
			</div>

			<div className="flex-row">
				{isLoading ? (
					<h3>Loading...</h3>
				) : (
					workerList?.map((worker) => <WorkerInfoCard worker={worker} />)
				)}
			</div>
		</StyledWrapper>
	);
}

export default SearchPage;
export const StyledWrapper = styled.div`
	display: flex;

	flex-wrap: wrap;
	padding: 3rem;
	align-items: flex-start;
	gap: 1rem;
	.container {
		display: flex;
		flex-direction: column;
		background-color: red;
		gap: 1rem;
	}
	.flex-row {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.map {
		height: 480px;
		background-color: #1976d2;
		width: 60vw;
	}
	@media (max-width: 600px) {
		.map {
			width: 70vw;
		}
	}
`;
