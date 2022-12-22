export const setData = (data) => {
  return {
    type: "SET_DATA",
    payload: data,
  };
};

export const setLoading = () => {
  return {
    type: "SET_LOADING",
  };
};
