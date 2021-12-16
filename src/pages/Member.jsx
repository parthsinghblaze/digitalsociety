import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Member(props) {
  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
  });

  const [memberId, setMemberId] = useState("");

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
    console.log(formValue);
    fetch(
      "https://digital-society-33dab-default-rtdb.firebaseio.com/members.json",
      {
        method: "POST",
        body: JSON.stringify({ ...formValue }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => setFormValue({ firstname: "", lastname: "" }));
  }

  // handling edit
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
        setMemberId("");
        alert("Success");
      });
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
