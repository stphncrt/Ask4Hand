import React, { useState, useContext, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow, Circle } from "@react-google-maps/api";
import { Paper, Typography, Chip } from "@mui/material";
import MapStyle from "./Map.style.js";
import AppContext from "../../context/AppContext";

const profileImageICon =
  "https://previews.123rf.com/images/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg";
const mapContainerStyle = { width: "100%", height: "100%" };
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  //to be able to change the color of the map thanks to https://snazzymaps.com/
  styles: MapStyle,
};
const Map = ({ workerList }) => {
  const { getTitles, titles } = useContext(AppContext);
  useEffect(() => {
    getTitles("/occupations");
  }, []);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [circle, setCircle] = useState(null);
  const optionsForCircle = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    zIndex: 1,
  };

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
              onMouseOver={() => setCircle(worker)}
              onMouseOut={() => setCircle(null)}
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
              padding: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "120px",
              cursor: "pointer",
            }}
          >
            <img
              alt=""
              src={
                selectedMarker?.profileImage
                  ? selectedMarker.profileImage
                  : profileImageICon
              }
            />
            <Typography variant="subtitle2">
              {selectedMarker?.firstName} {selectedMarker?.lastName}
            </Typography>
            <Typography variant="subtitle3" gutterBottom>
              {
                titles?.find(
                  (title) => title?._id === selectedMarker?.occupationId
                )?.name
              }
            </Typography>
            <Chip
              variant="outlined"
              color="success"
              key={selectedMarker?.hourlyRate}
              size="small"
              label={`${selectedMarker?.hourlyRate} € per hour`}
            />
          </Paper>
        </InfoWindow>
      ) : null}
      {circle ? (
        <>
          <Circle
            center={{
              lat: Number(circle?.location?.lat),
              lng: Number(circle?.location?.lng),
            }}
            radius={circle?.workRange * 1000}
            options={optionsForCircle}
          />
        </>
      ) : null}
    </GoogleMap>
  );
};

export default Map;
