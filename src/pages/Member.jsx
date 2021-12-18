import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  editingTheData,
  submittingFormValue,
} from "../redux/Memberreducer/memberaction";

function Member() {
  const navigate = useNavigate();
  const inputFormValue = useSelector((state) => state.member.inputFormValue);
  const [formValue, setFormValue] = useState(inputFormValue);

  const [memberId, setMemberId] = useState("");
  const dispatch = useDispatch();

  const { state } = useLocation();
  useEffect(() => {
    if (state) {
      setMemberId(state.key);
      setFormValue(state.member);
    }
  }, []);

  // handling Change
  function handingChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  // handline Submit
  function handlingSubmit(e) {
    e.preventDefault();
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
                        onChange={handingChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter email"
                        name="firstname"
                        value={formValue.firstname}
                        onChange={handingChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        name="lastname"
                        value={formValue.lastname}
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
