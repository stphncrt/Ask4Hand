import * as React from "react";
import { useContext, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AppContext from "../context/AppContext";
import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function CheckboxLabels({ occupationId }) {
  const { titles, getTitles, isLoading } = useContext(AppContext);
  console.log(titles);
  useEffect(() => {
    getTitles("/occupations");
  }, []);

  return (
    <StyledFormGroup>
      <div>
        {isLoading ? (
          <h3>Loading..</h3>
        ) : (
          titles?.map((title) => (
            <FormControlLabel
              key={title._id}
              control={
                title._id === occupationId ? (
                  <Checkbox defaultChecked />
                ) : (
                  <Checkbox />
                )
              }
              label={title.name}
            />
          ))
        )}
      </div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      {/*   <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <Button variant="contained">Contained</Button>
    </StyledFormGroup>
  );
}

export const StyledFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
  border: 1px solid;
  width: 35%;
  padding: 0.2rem;
  div {
    display: flex;
    flex-direction: column;
  }
`;
