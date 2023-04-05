import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import placesDB from "../api/placesDB";
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
          image: action.payload.thumbnail.url,
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
  return async (name, details, photo) => {
    try {
      await trackerApi.post("/places", { name, details, photo });
      dispatch({ type: "add_place", payload: { name, details, photo } });
      navigate("Home");
    } catch (err) {
      console.log(err);
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
