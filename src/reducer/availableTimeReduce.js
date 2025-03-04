export const initialState = ["17:00", "18:00", "19:00", "20:00", "22:00"];

// you can modify state = initialState as a default parameter
export const availableTimeReducer = (state, action) => {
  // destruct the payload from the action
  const { payload } = action;
  switch (action.type) {
    case "update_available_times":
      console.log("hello form reducer")
      console.log(payload);
      return ["17:00", "18:00", "19:00", "20:00", "22:00"];
    default:
      return state;
  }
};
