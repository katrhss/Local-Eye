import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import uuid from "react-native-uuid";
import placesDB from "../api/placesDB";
import { navigate } from "../navigationRef";

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
  return async (name, details) => {
    try {
      await placesDB.post("/places", { name, details });
      dispatch({ type: "add_place", payload: { title, details } });
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
