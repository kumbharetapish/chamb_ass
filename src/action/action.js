import axios from "axios";

export const fetchProductDetails = (id) => {
  return (dispatch) => {
    axios
      .get(
        `https://5ed296ce717d5f0016518314.mockapi.io/api/v1/products/${id}`
      )
      .then((res) => {
        dispatch(getProductData(res.data));
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const getProductData = (data) => {
  return {
    type: "GET_PRODUCT_DETAILS",
    payload: data,
  };
};
