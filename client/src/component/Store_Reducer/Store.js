import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// 18.7.1
import productReducer from "../Store_Reducer/productReducer";
import userReducer from "../Store_Reducer/userReducer";
import singleUserReducer from "../Store_Reducer/singleUserReducer";

let Store = createStore(
  combineReducers({
    productReducer: productReducer,
    userReducer: userReducer
    // singleUserReducer: singleUserReducer
  }),
  applyMiddleware(thunk)
);

export default Store;
