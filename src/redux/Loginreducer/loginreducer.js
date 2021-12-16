import { DELETE_MEMBER, ISLOADING, LOGOUT, USERLOGIN } from "./logintype";

const initialState = {
  isLogging: "",
  loginDetails: "",
};

const loginreducer = (state = initialState, action) => {
  if (action.type === USERLOGIN) {
    localStorage.setItem("login", true);
    localStorage.setItem("userLoginDetails", JSON.stringify(action.payload));
    return {
      ...state,
    };
  }

  if (action.type === LOGOUT) {
    return {
      ...state,
      loginDetails: localStorage.removeItem("userLoginDetails"),
      isLogging: localStorage.setItem("login", false),
    };
  }

  if (action.type === DELETE_MEMBER) {
    return {
      ...state,
    };
  }

  return state;
};

export default loginreducer;
