const initState = [
  {
    id: "1",
    name: "Date",
    label: "Date",
    show: true,
    value: 0,
  },
  {
    id: "2",
    name: "App",
    label: "App",
    show: true,
    value: 0,
  },
  {
    id: "3",
    name: "Clicks",
    label: "Clicks",
    show: true,
    value: 0,
  },
  {
    id: "4",
    name: "Ad Requests",
    label: "Requests",
    show: true,
    value: 0,
  },
  {
    id: "5",
    name: "Ad Response",
    label: "Responses",
    show: false,
    value: 0,
  },
  {
    id: "6",
    name: "Impressions",
    label: "Impressions",
    show: true,
    value: 0,
  },
  {
    id: "7",
    name: "Revenue",
    label: "Revenue",
    show: false,
    value: 0,
  },

  {
    id: "8",
    name: "Fill Rate",
    label: "Fill Rate",
    show: true,
    value: 0,
  },

  {
    id: "9",
    name: "CTR",
    label: "CTR",
    show: true,
    value: 0,
  },
];

const columnReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE":
      let newState = state.map((item) => {
        if (item.id === action.payload && item.id !== "1" && item.id !== "2") {
          return { ...item, show: !item.show };
        }
        return item;
      });
      return newState;

    case "SWAP":
      const { dragIndex, hoverIndex } = action.payload;
      const dragItem = state[dragIndex];
      const newState2 = state.filter((item, index) => index !== dragIndex);
      newState2.splice(hoverIndex, 0, dragItem);
      return newState2;

    case "EVALUATE":
      const { data } = action.payload;
      let seenApps = new Set();
      let clicks = 0,
        requests = 0,
        responses = 0,
        impressions = 0,
        revenue = 0;

      // console.log(data.data);

      const date1 = new Date(data.startDate);
      const date2 = new Date(data.endDate);
      const date = Math.ceil((date2 - date1) / (1000 * 60 * 60 * 24)) + 1;

      data.data.forEach((item) => {
        seenApps.add(item.app);
        clicks += item.clicks;
        requests += item.requests;
        responses += item.responses;
        impressions += item.impressions;
        revenue += item.revenue;
      });

      const fillRate = (responses / requests) * 100;
      const ctr = (clicks / impressions) * 100;

      let newState3 = [...state];
      newState3.forEach((item) => {
        if (item.id === "1") {
          item.value = date;
        } else if (item.id === "2") {
          item.value = seenApps.size;
        } else if (item.id === "3") {
          item.value = clicks;
        } else if (item.id === "4") {
          item.value = requests;
        } else if (item.id === "5") {
          item.value = responses;
        } else if (item.id === "6") {
          item.value = impressions;
        } else if (item.id === "7") {
          item.value = revenue;
        } else if (item.id === "8") {
          item.value = fillRate;
        } else if (item.id === "9") {
          item.value = ctr;
        }
      });

      return newState3;

    default:
      return state;
  }
};

export default columnReducer;
