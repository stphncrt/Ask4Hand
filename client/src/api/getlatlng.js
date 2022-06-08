export const getlatlng = async (zipCode, city) => {
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}+${city}&key=${process.env.GOOGLE_MAP_API_KEY}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.results[0].geometry.location;
};
