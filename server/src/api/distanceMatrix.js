import axios from "axios";

export const distanceMatrix = async (origin, destination) => {
  try {
    const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${origin}&origins=${destination}&units=imperial&key=${process.env.GOOGLE_MAP_API_KEY}`;
    const response = await axios.get(URL);
    const distance = Number.parseInt(
      response.data.rows[0].elements[0].distance?.value / 1000
    );
    return distance;
  } catch (err) {
    return err;
  }
};
