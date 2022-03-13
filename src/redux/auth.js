const initialState = {
  isLoggedIn: false,
};

const types = {
  LOGIN: "login",
  LOGOUT: "logout",
};

export const login = (params) => {
  return async (dispatch) => {
    dispatch({
      type: types.LOGIN,
    });
  };
};

export const logout = (params) => {
  return async (dispatch) => {
    dispatch({
      type: types.LOGIN,
    });
  };
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
