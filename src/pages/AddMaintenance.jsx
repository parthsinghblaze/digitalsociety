import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  handleInputText,
  handleMaintenanceValue,
  setMaintenanceFunction,
} from "../redux/Memberreducer/memberaction";

function AddMaintenance() {
  const memberMaintenanceValue = useSelector(
    (state) => state.member.memberMaintenanceValue
  );

  const dispatch = useDispatch();
  const { state } = useLocation();
  console.log(state);
  function handingChange(e) {
    const { name, value } = e.target;
    dispatch(handleMaintenanceValue(name, value));
  }

  let currMonth, currYear;

  useEffect(() => {
    let currDate = new Date();
    currYear = currDate.getFullYear();
    switch (currDate.getMonth()) {
      case 0:
        currMonth = "january";
        break;
      case 1:
        currMonth = "febuary";
        break;
      case 2:
        currMonth = "march";
        break;

      case 3:
        currMonth = "april";
        break;

      case 4:
        currMonth = "may";
        break;

      case 5:
        currMonth = "june";
        break;

      case 6:
        currMonth = "july";
        break;

      case 7:
        currMonth = "august";
        break;

      case 8:
        currMonth = "september";
        break;

      case 9:
        currMonth = "october";
        break;

      case 10:
        currMonth = "november";
        break;

      case 11:
        currMonth = "december";
        break;
    }
  });

  function handlingSubmit(e) {
    e.preventDefault();
    dispatch(
      setMaintenanceFunction(
        currMonth,
        currYear,
        memberMaintenanceValue,
        state.key
      )
    );
  }

  return (
    <div className="content-wrapper p-3">
      <div className="content">
        <h3>Member Details</h3>
        <div className="card p-3">
          <h4>Member Name : {state.member.firstname} </h4>
          <h4>Member House No : </h4>
        </div>
        <h3>Add Maintenance</h3>
        <div className="card p-3">
          <form action="">
            <div className="form-group">
              <label htmlFor="memberId">Member ID</label>
              <input
                type="text"
                className="form-control"
                id="memberId"
                placeholder="member Id"
                name="memberId"
                value={state.key}
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Enter Amount</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                placeholder="Enter amount"
                name="amount"
                onChange={(e) => handingChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Date of Deposit</label>
              <input
                type="date"
                className="form-control"
                name="date_of_deposit"
                onChange={(e) => handingChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-lg" onClick={handlingSubmit}>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMaintenance;
