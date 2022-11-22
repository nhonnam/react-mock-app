import { FETCH_USER_LOGIN_SUCCESS } from "../action/userAction";

const INITIAL_STATE = {
  account: {
    access_token: "",
    refresh_token: "",
    username: "",
    image: "",
    role: "",
  },
  isAuthenticated: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN_SUCCESS:
      console.log(action);
      return {
        ...state,
        account: {
          access_token: action?.payload?.token,
          refresh_token: "",
          username: "",
          image: "",
          role: "",
        },
        isAuthenticated: true,
      };

    default:
      return state;
  }
};

export default userReducer;
