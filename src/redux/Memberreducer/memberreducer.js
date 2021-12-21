import {
  EDIT_MEMBER,
  GET_ALL_MEMBER,
  HANDLE_INPUT_TEXT,
  HANDLE_MAINTENANCE_VALUE,
  SET_MEMBER_ID,
  SINGLE_DELETE_MEMBER,
  SUBMITING_FORM_VALUE,
} from "./membertype";

const initalState = {
  inputFormValue: {
    firstname: "",
    lastname: "",
    mobile_no: "",
  },
  memberMaintenanceValue: {
    amount: "",
    date_of_deposit: "",
    memberId: "",
  },
  allMembers: "",
  msg: "",
  memberId: "",
};

const memberreducer = (state = initalState, action) => {
  switch (action.type) {
    case HANDLE_INPUT_TEXT:
      return {
        ...state,
        inputFormValue: {
          ...state.inputFormValue,
          [action.name]: action.payload,
        },
      };

    case HANDLE_MAINTENANCE_VALUE:
      return {
        ...state,
        memberMaintenanceValue: {
          ...state.memberMaintenanceValue,
          [action.name]: action.payload,
        },
      };
    case SUBMITING_FORM_VALUE:
      return {
        ...state,
        inputFormValue: { firstname: "", lastname: "", mobile_no: "" },
      };
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
