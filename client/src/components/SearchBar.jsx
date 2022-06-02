import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function SearchBar() {
	return (
		<Autocomplete
			multiple
			id="checkboxes-tags-demo"
			options={top100Films}
			disableCloseOnSelect
			getOptionLabel={(option) => option.title}
			renderOption={(props, option, { selected }) => (
				<li {...props}>
					<Checkbox
						icon={icon}
						checkedIcon={checkedIcon}
						style={{ marginRight: 8 }}
						checked={selected}
					/>
					{option.title}
				</li>
			)}
			style={{ width: 500, backgroundColor: "#fff" }}
			renderInput={(params) => <TextField {...params} label="Checkboxes" placeholder="Favorites" />}
		/>
	);
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
	{ title: "Electrician", year: 1994 },
	{ title: "Painter", year: 1972 },
	{ title: "Floor Layer", year: 1974 },
	{ title: "Plumber", year: 2008 },
	{ title: "Carpenter", year: 2008 },
	{ title: "Repairer", year: 2008 },
];
