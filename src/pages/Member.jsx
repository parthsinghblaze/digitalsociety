import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  editingTheData,
  handleInputText,
  setMemberId,
  submittingFormValue,
} from "../redux/Memberreducer/memberaction";

function Member() {
  const navigate = useNavigate();
  const formValue = useSelector((state) => state.member.inputFormValue);

  // const [memberId, setMemberId] = useState("");
  const dispatch = useDispatch();

  const { state } = useLocation();

  const memberId = useSelector((state) => state.member.memberId);

  useEffect(() => {
    if (state) {
      dispatch(setMemberId(state.key, state.member));
    }
  }, []);

  // handling Change
  function handingChange(e) {
    const { name, value } = e.target;
    dispatch(handleInputText(name, value));
  }

  // handline Submit
  function handlingSubmit(e) {
    e.preventDefault();
    console.log(formValue);
    dispatch(submittingFormValue(formValue));
  }

  // handling edit
  function editMember(e) {
    e.preventDefault();
    dispatch(editingTheData(formValue, memberId));
    setTimeout(() => {
      navigate("/allmember");
    }, 1000);
  }
  return (
    <>
      <div className="content-wrapper p-3">
        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div
                className={`card ${
                  state ? "card-warning" : "card-primary"
                } py-3`}
              >
                <div className="card-header">
                  <h3 className="card-title">
                    {state ? "Edit Member" : "Add Member"}
                  </h3>
                </div>
                <form>
                  <div className="card-body">
                    <div className="form-group d-none">
                      <label htmlFor="exampleInputEmail1">Member Id</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Member"
                        name="firstname"
                        value={memberId}
                        onChange={(e) => handingChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter First Name"
                        name="firstname"
                        value={formValue.firstname}
                        onChange={(e) => handingChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter Last Name"
                        name="lastname"
                        value={formValue.lastname}
                        onChange={handingChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Mobile Number"
                        name="mobile_no"
                        value={formValue.mobile_no}
                        onChange={handingChange}
                      />
                    </div>
                  </div>
                  <div className="card-footer">
                    {state ? (
                      <button
                        type="submit"
                        className="btn btn-warning"
                        onClick={editMember}
                      >
                        Edit
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handlingSubmit}
                      >
                        Add
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Member;
