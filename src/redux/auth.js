const initialState = {
  isLoggedIn: false,
};

const types = {
  LOGIN: "login",
  LOGOUT: "logout",
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;
