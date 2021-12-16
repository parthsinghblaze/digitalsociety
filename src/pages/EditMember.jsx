import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showFormValueInEditForm } from "../redux/Memberreducer/memberaction";
function EditMember() {
  const { memberId } = useParams();

  let [formValue, setFormValue] = useState({ firstname: "", lastname: "" });

  function handingChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  function getFormData() {
    fetch(
      `https://digital-society-33dab-default-rtdb.firebaseio.com/members/${memberId}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormValue(data);
      })
      .catch((err) => console.log(err));
  }

  function editMember(e) {
    e.preventDefault();
    fetch(
      `https://digital-society-33dab-default-rtdb.firebaseio.com/members/${memberId}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          ...formValue,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setFormValue({ firstname: "", lastname: "" });
        alert("Success");
      });
  }

  useEffect(() => {
    getFormData();
  }, []);

  return (
    <div className="content-wrapper p-3">
      <div className="content">
        <h1>I am Edit Page</h1>
        <div class="container-fluid">
          <div class="row">
            <div className="card card-warning py-3">
              <div className="card-header">
                <h3 className="card-title">Edit Member</h3>
              </div>
              <form>
                <div className="card-body">
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
                  <button
                    type="submit"
                    className="btn btn-warning"
                    onClick={editMember}
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMember;
