import React from "react";

import axios from "axios";
import { BASE_URL } from "../helper/helper";

export const getedUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_USERS" });

    const headers = { Authorization: localStorage.getItem("token") };
    const response = await axios.get(`${BASE_URL}/users/get-users`, {
      headers,
    });

    console.log(response, 18);
    // also can see on console than..

    if (response) {
      dispatch({ type: "GET_USERS_COMPLETED", payload: response.data.data });
    }

    if (!response) {
      dispatch({ type: "GET_USERS_FAILED" });
    }
  };
};

const userReducer = (
  state = { isLoading: false, usersReducerData: [] },
  action
) => {
  if (action.type === "GET_USERS") {
    return { isLoading: true };
  }

  if (action.type === "GET_USERS_COMPLETED") {
    return {
      isLoading: false,
      usersReducerData: action.payload,
    };
  }

  if (action.type === "GET_USERS_FAILED") {
    return {
      isLoading: false,
      usersReducerData: [],
    };
  }

  return state;
};

export default userReducer;
