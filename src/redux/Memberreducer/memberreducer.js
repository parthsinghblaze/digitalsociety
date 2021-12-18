import {
  EDIT_MEMBER,
  GET_ALL_MEMBER,
  HANDLE_INPUT_TEXT,
  SET_MEMBER_ID,
  SINGLE_DELETE_MEMBER,
  SUBMITING_FORM_VALUE,
} from "./membertype";

const initalState = {
  inputFormValue: { firstname: "", lastname: "" },
  allMembers: "",
  msg: "",
  memberId: "",
};

const memberreducer = (state = initalState, action) => {
  console.log(action.memberValue, action.payload);
  switch (action.type) {
    case HANDLE_INPUT_TEXT:
      return {
        ...state,
        inputFormValue: {
          ...state.inputFormValue,
          [action.name]: action.payload,
        },
      };
    case SUBMITING_FORM_VALUE:
      return { ...state, inputFormValue: { firstname: "", lastname: "" } };
    case GET_ALL_MEMBER:
      return { ...state, allMembers: action.payload };
    case SINGLE_DELETE_MEMBER:
      return { ...state, msg: "Deleted Successfully!!!" };
    case SET_MEMBER_ID:
      return {
        ...state,
        memberId: action.payload,
        inputFormValue: action.memberValue,
      };
    case EDIT_MEMBER:
      return {
        ...state,
        editItemId: action.payload,
        inputFormValue: { firstname: "", lastname: "" },
      };
    default:
      return state;
  }
};

export default memberreducer;
