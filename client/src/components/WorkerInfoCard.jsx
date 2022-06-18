import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ModalCard from "./ModalCard";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    width: 300,
    height: 500,
  },
  [theme.breakpoints.up("sm")]: {
    width: 530,
    height: 500,
  },
}));

export default function WorkerInfoCard({ worker, titles }) {
  const selectedTitle = titles?.find(
    (title) => title._id === worker.occupationId
  );

  return (
    <Root>
      <Card sx={{ border: "1px solid", position: "relative", height: "280px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <CardHeader
          avatar={
            <Avatar
              src={worker.profileImage}
              sx={{ bgcolor: red[500], width: 92, height: 92 }}
              aria-label="recipe"
            ></Avatar>
          }
          title={`${worker?.firstName} ${worker?.lastName}`}
          subheader={selectedTitle.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {worker?.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{position: "absolute", bottom: "1px"}}>
          <ModalCard images={worker.images} />
        </CardActions>
      </Card>
    </Root>
  );
}
