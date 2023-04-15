import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import mime from "mime";
import { navigate } from "../navigationRef";
import trackerApi from "../api/tracker";

const placeReducer = (state, action) => {
  switch (action.type) {
    case "get_places":
      return action.payload;
    case "add_place":
      return [
        ...state,
        {
          name: action.payload.title,
          details: action.payload.details,
          image: action.payload.photo,
        },
      ];
    default:
      return state;
  }
};

const getPlaces = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    const response = await trackerApi.get("/places", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    dispatch({ type: "get_places", payload: response.data });
  };
};

const addPlace = (dispatch) => {
  return async (name, details, photo, latitude, longitude) => {
    console.log(latitude);
    const coords = JSON.stringify({
      latitude: latitude,
      longitude: longitude,
    });
    const formdata = new FormData();
    formdata.append("thumbnail", {
      uri: photo.uri,
      type: mime.getType(photo.uri),
      name: photo.uri.split("/").pop(),
    });
    formdata.append("title", name);
    formdata.append("details", details);
    formdata.append("coords", coords);
    try {
      await trackerApi.post("/places", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("Home");
    } catch (err) {
      console.warn(err.response.data || err);
    }
  };
};

export const { Context, Provider } = createDataContext(
  placeReducer,
  {
    getPlaces,
    addPlace,
  },
  []
);
