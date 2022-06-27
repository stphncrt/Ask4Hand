import React, { useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";
import TitleCheckBox from "../../components/TitleCheckBox";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../../components/Map/Map";
import WorkerInfoCard from "../../components/WorkerInfoCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Grid, Typography } from "@mui/material";

const libraries = ["places"];
function SearchPage() {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
		libraries,
	});
	const { workerList, isLoading, getTitles, getWorkers, titles } = useContext(AppContext);

	const [currentPage, setCurrentPage] = React.useState(1);

	const handleChange = (event, value) => {
		setCurrentPage(value);
	};

	useEffect(() => {
		getTitles("/occupations");
		getWorkers("/filter");
	}, []);

	const workersPerPage = 6;
	const indexOfLastWorker = currentPage * workersPerPage;
	const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
	const currentWorkers = workerList?.slice(indexOfFirstWorker, indexOfLastWorker);

	return (
		<>
			<Box sx={{ flexGrow: 1, padding: "2rem" }}>
				<Grid container spacing={4}>
					<Grid item xs={12} md={3} lg={3}>
						<TitleCheckBox />
					</Grid>
					<Grid item xs={12} md={9} lg={9}>
						{loadError ? "error" : !isLoaded ? "loading..." : <Map workerList={workerList} />}
					</Grid>

					{isLoading ? (
						<Typography variant="h4">Loading...</Typography>
					) : currentWorkers?.length === 0 ? (
						<Typography variant="h4" sx={{ margin: "3rem auto" }}>
							There is no worker that fits your criteria.
						</Typography>
					) : (
						currentWorkers?.map((worker) => (
							<Grid item spacing={2} xs={12} md={6} lg={4} key={worker._id}>
								<WorkerInfoCard worker={worker} titles={titles} />
							</Grid>
						))
					)}
					{workerList?.length > 0 && (
						<Grid item xs={12} md={12}>
							<Stack spacing={2}>
								<Pagination
									sx={{ margin: "0 auto" }}
									count={Math.ceil(workerList?.length / workersPerPage)}
									currentPage={currentPage}
									onChange={handleChange}
								/>
							</Stack>
						</Grid>
					)}
				</Grid>
			</Box>
		</>
	);
}

export default SearchPage;
