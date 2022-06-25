import React, { useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(null);
  const { titles, getTitles, occupationIds, setOccupationIds } =
    useContext(AppContext);

  useEffect(() => {
    getTitles("/occupations");
  }, []);

  return (
    <>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              name: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              name: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.name
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              name: `No result with "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={titles}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.name;
        }}
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        // sx={{ width: 300 }}
        style={{ width: 500, marginLeft: 20, backgroundColor: "#fff" }}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label="What service do you need?"
            variant="filled"
            color="error"
          />
        )}
      />
      <Button
        style={{
          height: 56,
          width: 200,
          backgroundColor: "#e63946",
          marginRight: 20,
        }}
        variant="contained"
        onClick={() => {
          setOccupationIds([...occupationIds, value._id]);
          navigate("/searchPage");
        }}
      >
        Get Started
      </Button>
    </>
  );
}
