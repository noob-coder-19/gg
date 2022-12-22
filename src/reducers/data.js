const data = {
  data: [],
  isLoading: true,
};

const dataReducer = (state = data, action) => {
  switch (action.type) {
    case "SET_DATA":
      const data = action.payload;
      data.forEach((item) => {
        const fillRate = (item.responses / item.requests) * 100;
        const ctr = (item.clicks / item.impressions) * 100;

        item.app = item.app_id;
        item["fill rate"] = fillRate.toFixed(5);
        item.ctr = ctr.toFixed(5);

        delete item.app_id;
      });

      return { data, isLoading: false };

    case "SET_LOADING":
      return { data: [], isLoading: !state.isLoading };

    default:
      return state;
  }
};

export default dataReducer;
