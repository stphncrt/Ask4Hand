import * as React from "react";
import { useContext, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AppContext from "../context/AppContext";
import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function CheckboxLabels() {
  const {
    titles,
    getTitles,
    getWorkerByFilter,
    isLoading,
    occupationIds,
    setOccupationIds,
    city,
    setCity,
  } = useContext(AppContext);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    // Case 1 : The user checks the box
    if (checked) {
      setOccupationIds([...occupationIds, value]);
    }
    // Case 2  : The user unchecks the box
    else {
      setOccupationIds(occupationIds.filter((id) => id !== value));
    }
  };

  const handleSearch = () => {
    getWorkerByFilter("/filter");
  };

  useEffect(() => {
    getTitles("/occupations");
    return () => {
      setOccupationIds([]);
      setCity("");
    };
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
                occupationIds.includes(title._id) ? (
                  <Checkbox
                    checked
                    value={title._id}
                    name="title"
                    onChange={handleChange}
                  />
                ) : (
                  <Checkbox
                    value={title._id}
                    name="title"
                    onChange={handleChange}
                  />
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
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Contained
      </Button>
    </StyledFormGroup>
  );
}

export const StyledFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 1rem;
  margin: 1rem;
  border: 1px solid;
  width: 50vh;
  padding: 0.2rem;
  div {
    display: flex;
    flex-direction: column;
  }
`;
