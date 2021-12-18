import {
  EDIT_MEMBER,
  GET_ALL_MEMBER,
  SINGLE_DELETE_MEMBER,
  SUBMITING_FORM_VALUE,
} from "./membertype";

const initalState = {
  inputFormValue: { firstname: "", lastname: "" },
  allMembers: "",
  msg: "",
  editItemId: "",
};

const memberreducer = (state = initalState, action) => {
  switch (action.type) {
    case SUBMITING_FORM_VALUE:
      return { ...state, inputFormValue: { firstname: "", lastname: "" } };
    case GET_ALL_MEMBER:
      return { ...state, allMembers: action.payload };
    case SINGLE_DELETE_MEMBER:
      return { ...state, msg: "Deleted Successfully!!!" };
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
