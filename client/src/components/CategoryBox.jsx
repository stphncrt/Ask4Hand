import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function MultiActionAreaCard({ category, url }) {
	return (
		<Link to={"./searchPage"}>
			<StyledCard sx={{ maxWidth: 345, m: 1 }}>
				<CardActionArea>
					<CardMedia
						style={{ width: 110, height: 100 }}
						component="img"
						image={url}
						alt={category}
					/>
					<CardContent>
						<Typography gutterBottom variant="h7" component="div" align="center">
							{category}
						</Typography>
					</CardContent>
				</CardActionArea>
			</StyledCard>
		</Link>
	);
}

export const StyledCard = styled(Card)`
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	:hover {
		transform: scale(1.05);
	}
`;
