

const INITIAL_STATE = {
  isLoggedIn: false,
};

const reduxReducer = (state = INITIAL_STATE, action) => {
  console.log("here in redux", state, action);
  switch (action.type) {
    case "USER_LOGGED":
      return Object.assign({}, state, {
        isLoggedIn: action.payload,
      });
    default:
      return state;
  }
};
export default reduxReducer;