import {
  EDIT_MEMBER,
  GET_ALL_MEMBER,
  HANDLE_INPUT_TEXT,
  SET_MEMBER_ID,
  SINGLE_DELETE_MEMBER,
  SUBMITING_FORM_VALUE,
  SET_MAINTENANCE,
  HANDLE_MAINTENANCE_VALUE,
} from "./membertype";

export const handleInputText = (name, value) => {
  return {
    type: HANDLE_INPUT_TEXT,
    name: name,
    payload: value,
  };
};

export const handleMaintenanceValue = (name, value) => {
  return {
    type: HANDLE_MAINTENANCE_VALUE,
    name: name,
    payload: value,
  };
};

export const formSubmit = () => {
  return {
    type: SUBMITING_FORM_VALUE,
  };
};

export const getAllMember = (data) => {
  return {
    type: GET_ALL_MEMBER,
    payload: data,
  };
};

export const deleteMember = () => {
  return {
    type: SINGLE_DELETE_MEMBER,
  };
};

export const editMember = () => {
  return {
    type: EDIT_MEMBER,
  };
};

export const setMemberId = (memberId, memberValue) => {
  return {
    type: SET_MEMBER_ID,
    payload: memberId,
    memberValue: memberValue,
  };
};

export const setMaintenance = () => {
  return {
    type: SET_MAINTENANCE,
  };
};

export const setMaintenanceFunction = (currMonth, currYear, formValue, key) => {
  console.log(currMonth, currYear, formValue, key);
  return (dispatch) => {
    fetch(
      `https://digital-society-33dab-default-rtdb.firebaseio.com/maintenance.json`,
      {
        method: "POST",
        body: JSON.stringify({ ...formValue, memberId: key }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
};

// editing the Data from table

export const editingTheData = (formData, memberId) => {
  return (dispatch) => {
    fetch(
      `https://digital-society-33dab-default-rtdb.firebaseio.com/members/${memberId}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          ...formData,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(editMember());
        alert("Success");
      })
      .catch((err) => alert(err));
  };
};

// adding the form data in table

export const submittingFormValue = (data) => {
  return (dispatch) => {
    fetch(
      "https://digital-society-33dab-default-rtdb.firebaseio.com/members.json",
      {
        method: "POST",
        body: JSON.stringify({ ...data, password: data.mobile_no }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch(formSubmit());
        alert("Submitted");
      })
      .catch((err) => alert(err));
  };
};

// fetching all the members

export const fetchingAllMember = () => {
  return (dispatch) => {
    fetch(
      "https://digital-society-33dab-default-rtdb.firebaseio.com/members.json"
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(getAllMember(data));
      });
  };
};

// deleteting single member
export const deleteSingleMember = (memberid) => {
  console.log(memberid);
  return (dispatch) => {
    fetch(
      `https://digital-society-33dab-default-rtdb.firebaseio.com/members/${memberid}.json`,
      {
        method: "DELETE",
      }
    )
      .then((resp) => {
        console.log(resp);
        if (resp.status === 200) {
          dispatch(fetchingAllMember());
          dispatch(deleteMember());
        }
      })
      .catch((err) => console.log(err));
  };
};

// editing member
