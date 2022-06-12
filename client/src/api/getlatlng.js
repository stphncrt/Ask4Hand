import axios from "axios";
export const getlatlng = async (zipCode, city) => {
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}+${city}&key=AIzaSyA32MZKuao0P3ehpscNxbc7TZvMDSXJSFA`;
  const response = await axios.get(URL);
  const location = response.data.results[0].geometry.location;
  return location;
};
