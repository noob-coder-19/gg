export const toggle = (id) => {
  return {
    type: "TOGGLE",
    payload: id,
  };
};

export const swap = (dragIndex, hoverIndex) => {
  return {
    type: "SWAP",
    payload: {
      dragIndex,
      hoverIndex,
    },
  };
};

export const evaluate = (data) => {
  return {
    type: "EVALUATE",
    payload: {
      data,
    },
  };
};
