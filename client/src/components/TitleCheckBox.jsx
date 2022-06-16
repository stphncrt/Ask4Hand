import * as React from "react";
import { useContext, useEffect, useState, useRef } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AppContext from "../context/AppContext";
import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function CheckboxLabels({ occupationId, categoryId }) {
	const { titles, getTitles, isLoading } = useContext(AppContext);
	const [city, setCity] = useState("");
	const [checkedTitles, setCheckedTitles] = useState([]);
	const handleFilterClick = () => {
		console.log(city, checkedTitles);
	};

	useEffect(() => {
		getTitles("/occupations");
	}, []);

	return (
		<StyledFormGroup>
			<div className="form-group">
				{isLoading ? (
					<h3>Loading..</h3>
				) : (
					titles?.map((title) => (
						<FormControlLabel
							key={title._id}
							onChange={(e) => setCheckedTitles([...checkedTitles, e.target.value])}
							control={
								(categoryId && title.categoryId === categoryId) || title._id === occupationId ? (
									<Checkbox checked value={title._id} />
								) : (
									<Checkbox value={title._id} />
								)
							}
							label={title.name}
						/>
					))
				)}
			</div>
			<TextField
				id="outlined-basic"
				label="City"
				variant="outlined"
				onChange={(e) => setCity(e.target.value)}
			/>
			<Button variant="contained" onClick={handleFilterClick}>
				Search
			</Button>
		</StyledFormGroup>
	);
}

export const StyledFormGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	height: 100%;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	width: 20rem;
	padding: 1rem;
	background-color: "blue";
	.form-group {
		display: flex;
		flex-direction: column;
		height: 20rem;
		overflow-y: scroll;
		padding: 1rem;
	}
	@media (max-width: 600px) {
		width: 100%;
		margin: 1rem 0;
	}
`;
