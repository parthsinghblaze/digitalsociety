import {
  EDIT_DATA,
  GET_ALL_MEMBER,
  SHOW_EDIT_VALUE_DATA_IN_FORM,
  SINGLE_DELETE_MEMBER,
} from "./membertype";

const initalState = {
  allMembers: "",
  msg: "",
  editedData: {},
  isEdit: false,
};

const memberreducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ALL_MEMBER:
      return { ...state, allMembers: action.payload };
    case SINGLE_DELETE_MEMBER:
      return { ...state, msg: "Deleted Successfully!!!" };
    default:
      return state;
  }
};

export default memberreducer;
