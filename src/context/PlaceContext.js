import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import uuid from "react-native-uuid";
import placesDB from "../api/placesDB";

const placeReducer = (state, action) => {
  switch (action.type) {
    case "get_places":
      return action.payload;
    case "add_place":
      return [
        ...state,
        {
          id: uuid.v4(),
          title: action.payload.title,
          details: action.payload.details,
        },
      ];
    default:
      return state;
  }
};

const getPlaces = (dispatch) => {
  return async () => {
    const response = await placesDB.get("/places");

    dispatch({ type: "get_places", payload: response.data });
  };
};

const addPlace = (dispatch) => {
  return (title, details, callback) => {
    dispatch({ type: "add_place", payload: { title, details } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  placeReducer,
  {
    getPlaces,
  },
  []
);
