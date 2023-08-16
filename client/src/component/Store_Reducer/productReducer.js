import axios from "axios";
import { BASE_URL } from "../helper/helper";

export const getServices = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_SERVICES" });

    const headers = { Authorization: localStorage.getItem("token") };
    const response = await axios.get(`${BASE_URL}/api/get-products`, {
      headers,
    });

    console.log(response, 18);
    // also can see on console than..

    if (response) {
      dispatch({ type: "GET_SERVICES_COMPLETED", payload: response.data.data });
    }

    if (!response) {
      dispatch({ type: "GET_SERVICES_FAILED" });
    }
  };
};

const productReducer = (
  state = { isLoading: false, productsData: [] },
  action
) => {
  if (action.type === "GET_SERVICES") {
    return { isLoading: true };
  }

  if (action.type === "GET_SERVICES_COMPLETED") {
    return {
      isLoading: false,
      productsData: action.payload,
    };
  }

  if (action.type === "GET_SERVICES_FAILED") {
    return {
      isLoading: false,
      productsData: [],
    };
  }

  return state;
};

export default productReducer;
