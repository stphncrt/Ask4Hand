import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { Paper, Typography } from "@mui/material";
import MapStyle from "./Map.style.js";

const mapContainerStyle = { width: "100%", height: "100%" };
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  //to be able to change the color of the map thanks to https://snazzymaps.com/
  styles: MapStyle,
};
const Map = ({ workerList }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={{ lat: 52.29683170000001, lng: 5.1487143 }}
      zoom={8}
      options={options}
    >
      {workerList?.length > 0
        ? workerList.map((worker) => (
            <Marker
              key={worker._id}
              position={{
                lat: Number(worker?.location?.lat),
                lng: Number(worker?.location?.lng),
              }}
              animation={window.google.maps.Animation.DROP}
              onClick={() => setSelectedMarker(worker)}
            />
          ))
        : null}
      {selectedMarker ? (
        <InfoWindow
          position={{
            lat: Number(selectedMarker.location?.lat),
            lng: Number(selectedMarker.location?.lng),
          }}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <Paper
            elevation={3}
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "200px",
              cursor: "pointer",
            }}
            //to be able to pass the clicked one smootly on List
          >
            <Typography variant="subtitle2" gutterBottom>
              {selectedMarker?.firstName} {selectedMarker?.lastName}
            </Typography>
          </Paper>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
};

export default Map;
