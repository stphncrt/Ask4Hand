import axios from "axios";

export const distanceMatrix = async () => {
  const URL =
    "https://maps.googleapis.com/maps/api/distancematrix/json?destinations=Amsterdam&origins=Istanbul&units=imperial&key=AIzaSyA32MZKuao0P3ehpscNxbc7TZvMDSXJSFA";
  const response = await axios.get(URL);
  return response.data.rows[0].elements[0].distance.value;
};
