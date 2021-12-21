import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchingAllMember,
  deleteSingleMember,
  editMember,
} from "../redux/Memberreducer/memberaction";

function AllMember() {
  const dispatch = useDispatch();
  const allMemberDataTable = useSelector((state) => state.member.allMembers);
  const navigate = useNavigate();
  const message = useSelector((state) => state.member.msg);

  useEffect(() => {
    dispatch(fetchingAllMember());
  }, []);

  const deleteMember = (key) => {
    if (window.confirm("Want to Delete Data")) {
      dispatch(deleteSingleMember(key));
    }
  };

  return (
    <>
      <div className="content-wrapper p-3">
        <section class="content">
          <div class="container-fluid">
            <div className="d-flex align-items-center justify-content-between py-3">
              <h3>All Members</h3>
              <Link to="/addmember" className="btn btn-primary">
                Add Members
              </Link>
            </div>
            <table className="table table-primary table-striped">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Action</th>
                  <th>Add Maintenance</th>
                </tr>
              </thead>
              <tbody>
                {allMemberDataTable &&
                  Object.keys(allMemberDataTable).map((key, index) => {
                    let member = allMemberDataTable[key];
                    return (
                      <tr key={key}>
                        <td>{member.firstname}</td>
                        <td>{member.lastname}</td>
                        <td className="d-flex gap-3">
                          <span
                            className="badge bg-danger"
                            onClick={() => deleteMember(key)}
                          >
                            Delete
                          </span>
                          <span
                            className="badge bg-warning"
                            onClick={() =>
                              navigate("/addmember", { state: { key, member } })
                            }
                          >
                            Edit
                          </span>
                        </td>
                        <td>
                          {/* <Link to="/addmaintenance"> */}
                          <span
                            onClick={() =>
                              navigate("/addmaintenance", {
                                state: { key, member },
                              })
                            }
                            className="badge badge-primary"
                          >
                            Add
                          </span>
                          {/* </Link> */}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default AllMember;
