// import axios from "axios";
// import { BASE_URL } from "../helper/helper";
// import { useParams } from "react-router-dom";
// const params = useParams();
// const id = params.id;

// export const getSingleuser = () => {

//     return async (dispatch) => {
//         dispatch({ type: "GET_SINGLE_USER" });
//         const response = axios.get(`${BASE_URL}/users/getsingle_users/${id}`);

//         console.log(response, 18);
//         // also can see on console than..

//         if (response) {
//             dispatch({ type: "GET_SINGLE_USER_COMPLETED", payload: response.data.data });
//         }

//         if (!response) {
//             dispatch({ type: "GET_SINGLE_USER_FAILED" });
//         }
//     };
// };

// const singleUserReducer = (
//     state = { isLoading: false, siusersReduceData: [] },
//     action
// ) => {
//     if (action.type === "GET_SINGLE_USER") {
//         return { isLoading: true };
//     }

//     if (action.type === "GET_SINGLE_USER_COMPLETED") {
//         return {
//             isLoading: false,
//             siusersReduceData: action.payload,
//         };
//     }

//     if (action.type === "GET_SINGLE_USER_FAILED") {
//         return {
//             isLoading: false,
//             siusersReduceData: [],
//         };
//     }

//     return state;
// };

// export default singleUserReducer;
