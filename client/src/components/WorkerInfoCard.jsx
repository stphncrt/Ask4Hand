import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ModalCard from "./ModalCard";
import { Container, makeStyles } from "@material-ui/core";
import { Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  container: {
    position: "relative",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    height: "100%",
    padding: "10px",
  },
  desc: {
    marginTop: "0",
    marginBottom: "30px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "	-webkit-line-clamp": "5" /* number of lines to show */,
    "	-webkit-box-orient": "vertical",
  },
  modal: {
    position: "absolute",
    bottom: "1px",
    padding: "10px",
  },
}));
// const Root = styled("div")(({ theme }) => ({
//   padding: theme.spacing(1),
//   [theme.breakpoints.down("sm")]: {
//     width: "32%",
//   },
//   [theme.breakpoints.up("sm")]: {
//     width: "32%",
//   },
// }));

export default function WorkerInfoCard({ worker, titles }) {
  const classes = useStyles();
  const selectedTitle = titles?.find(
    (title) => title._id === worker.occupationId
  );

  return (
    
      <Card className={classes.container}>
        {/* <CardHeader
          avatar={
            <Avatar
              src={worker.profileImage}
              sx={{ bgcolor: red[500], width: 92, height: 92 }}
            ></Avatar>
          }
        
          title={`${worker?.firstName} ${worker?.lastName} ${worker?.email}`  }
          subheader={selectedTitle.name}
          <Typography paragraph>Method:</Typography>
        /> */}
        <Box sx={{ display: "flex", margin: "1rem 0.5rem" }}>
          <Avatar
            src={worker.profileImage}
            sx={{ bgcolor: red[500], width: 92, height: 92 }}
          ></Avatar>
          <Container>
            <Typography variant="h6" color="text.secondary">
              {worker?.firstName} {worker?.lastName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {selectedTitle.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {worker?.email}
            </Typography>
          </Container>
          <Container>
            <Typography variant="subtitle1" color="text.secondary">
              Tel: {worker?.phoneNumber}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              City: {worker?.city}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Work Range: {worker?.workRange}
            </Typography>
          </Container>
        </Box>

        <CardContent>
          <Typography
            className={classes.desc}
            variant="body2"
            color="text.secondary"
          >
            {worker?.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.modal}>
          <ModalCard images={worker.images} />
        </CardActions>
      </Card>
    
  );
}
