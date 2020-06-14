// import { act } from "react-dom/test-utils";

const initialState = {
  productData: "",
};

const reduceStore = (state = initialState, action) => {
  if (action.type === "GET_PRODUCT_DETAILS") {
    state = {
      ...state,
      productData: action.payload,
    };
    console.log(state);
    
    return state.productData;
  }

  return state;
};

export default reduceStore;
