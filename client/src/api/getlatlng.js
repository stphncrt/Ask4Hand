import axios from "axios";
export const getLatLng = async (zipCode, city) => {
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}+${city}&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`;
  const response = await axios.get(URL);
  const location = response.data.results[0].geometry.location;
  return location;
};
