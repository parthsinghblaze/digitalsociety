import { Redirect } from "react-router-dom";
import { GET_ALL_MEMBER, SINGLE_DELETE_MEMBER } from "./membertype";

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
        }
      })
      .catch((err) => console.log(err));
  };
};
