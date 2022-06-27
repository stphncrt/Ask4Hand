import React, { useContext, useEffect } from "react";
import MultiActionAreaCard from "./CategoryBox";
import AppContext from "../context/AppContext";
import { Grid, Typography } from "@mui/material";

function Categories() {
  const { categories, getCategories, isLoading } = useContext(AppContext);

  useEffect(() => {
    getCategories("/categories");
  }, []);
  return (
    <Grid
      container
      gap={4}
      justifyContent="center"
      sx={{ backgroundColor: "#f1faee" }}
    >
      <Grid item xs={12} pt={8}>
        <Typography
          align="center"
          variant="h5"
          color="primary"
          sx={{ marginTop: "0rem", fontWeight: "600" }}
        >
          Categories
        </Typography>
      </Grid>
      <Grid item pb={8}>
        <Grid container gap={3} justifyContent="center">
          {isLoading ? (
            <Typography>Loading..</Typography>
          ) : (
            categories?.map((category) => {
              return (
                <MultiActionAreaCard key={category._id} category={category} />
              );
            })
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Categories;
