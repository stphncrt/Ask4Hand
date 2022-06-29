import * as React from "react";
import { useContext, useEffect } from "react";
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
    getWorkers,
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
    getWorkers("/worker/filter");
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
      <div className="form-group">
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
        Search
      </Button>
    </StyledFormGroup>
  );
}

export const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 70vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 1rem;
  background-color: "blue";
  .form-group {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding: 1rem;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 1rem 0;
  }
`;
