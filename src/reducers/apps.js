const apps = [];

export default function appsReducer(state = apps, action) {
  switch (action.type) {
    case "SET_APPS":
      const apps = {};
      action.payload.forEach((app) => {
        apps[app.app_id] = app.app_name;
      });
      return apps;

    default:
      return state;
  }
}
