import React from "react";
import "./compo.scss";
import List from "../assests/list.png";
import Eye from "../assests/eye.png";

import { Pagination } from "@mui/material";

const Component3 = () => {
  return (
    <>
      <div>
        <div style={{ width: "90%", margin: "auto" }}>
          <div className="mt-5">
            <h1>Aggregators List</h1>
          </div>
          <div className="mt-5 d-inline-flex">
            <img src={List} alt="" width={20} height={25} />{" "}
            <h4 className="ms-4">Aggregators List</h4>
          </div>
          <div className="collection-table mt-4 table-other">
            <table className="table table-hover align-middle text-center">
              <thead>
                <tr className="align-middle">
                  <th>View Details</th>
                  <th className="">Aggregator Name</th>
                  <th className="">Aggregator Type</th>
                  <th className="">Creator Mode</th>
                  <th className="">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "none" }}>
                  <td>
                    <img src={Eye} alt="" />
                  </td>
                  <td scope="col">
                    <span id="comment">
                      <b>Name_Sname</b>
                    </span>
                  </td>
                  <td scope="col">
                    <b>Digital</b>
                  </td>
                  <td scope="col">
                    <b>System Integration</b>
                  </td>
                  <td scope="col" className="text-success">
                    <b>Active</b>
                  </td>
                </tr>
                <tr style={{ borderBottom: "none" }}>
                  <td>
                    <img src={Eye} alt="" />
                  </td>
                  <td scope="col">
                    <span id="comment">
                      <b>Name_Sname</b>
                    </span>
                  </td>
                  <td scope="col">
                    <b>Digital</b>
                  </td>
                  <td scope="col">
                    <b>System Integration</b>
                  </td>
                  <td scope="col" className="text-danger">
                    <b>Inactive</b>
                  </td>
                </tr>
                <tr style={{ borderBottom: "none" }}>
                  <td>
                    <img src={Eye} alt="" />
                  </td>
                  <td scope="col">
                    <span id="comment">
                      <b>Name_Sname</b>
                    </span>
                  </td>
                  <td scope="col">
                    <b>Digital</b>
                  </td>
                  <td scope="col">
                    <b>System Integration</b>
                  </td>
                  <td scope="col" className="text-success">
                    <b>Active</b>
                  </td>
                </tr>
                <tr style={{ borderBottom: "none" }}>
                  <td>
                    <img src={Eye} alt="" />
                  </td>
                  <td scope="col">
                    <span id="comment">
                      <b>Name_Sname</b>
                    </span>
                  </td>
                  <td scope="col">
                    <b>Digital</b>
                  </td>
                  <td scope="col">
                    <b>System Integration</b>
                  </td>
                  <td scope="col" className="text-success">
                    <b>Active</b>
                  </td>
                </tr>
                <tr style={{ borderBottom: "none" }}>
                  <td>
                    <img src={Eye} alt="" />
                  </td>
                  <td scope="col">
                    <span id="comment">
                      <b>Name_Sname</b>
                    </span>
                  </td>
                  <td scope="col">
                    <b>Digital</b>
                  </td>
                  <td scope="col">
                    <b>System Integration</b>
                  </td>
                  <td scope="col" className="text-danger">
                    <b>Inactive</b>
                  </td>
                </tr>
                <tr style={{ borderBottom: "none" }}>
                  <td>
                    <img src={Eye} alt="" />
                  </td>
                  <td scope="col">
                    <span id="comment">
                      <b>Name_Sname</b>
                    </span>
                  </td>
                  <td scope="col">
                    <b>Digital</b>
                  </td>
                  <td scope="col">
                    <b>System Integration</b>
                  </td>
                  <td scope="col" className="text-success">
                    <b>Active</b>
                  </td>
                </tr>
                <tr style={{ borderBottom: "none" }}>
                  <td>
                    <img src={Eye} alt="" />
                  </td>
                  <td scope="col">
                    <span id="comment">
                      <b>Name_Sname</b>
                    </span>
                  </td>
                  <td scope="col">
                    <b>Digital</b>
                  </td>
                  <td scope="col">
                    <b>System Integration</b>
                  </td>
                  <td scope="col" className="text-success">
                    <b>Active</b>
                  </td>
                </tr>
                <tr style={{ borderBottom: "none" }}>
                  <td>
                    <img src={Eye} alt="" />
                  </td>
                  <td scope="col">
                    <span id="comment">
                      <b>Name_Sname</b>
                    </span>
                  </td>
                  <td scope="col">
                    <b>Digital</b>
                  </td>
                  <td scope="col">
                    <b>System Integration</b>
                  </td>
                  <td scope="col" className="text-danger">
                    <b>Inactive</b>
                  </td>
                </tr>
                <tr style={{ borderBottom: "none" }}>
                  <td>
                    <img src={Eye} alt="" />
                  </td>
                  <td scope="col">
                    <span id="comment">
                      <b>Name_Sname</b>
                    </span>
                  </td>
                  <td scope="col">
                    <b>Digital</b>
                  </td>
                  <td scope="col">
                    <b>System Integration</b>
                  </td>
                  <td scope="col" className="text-success">
                    <b>Active</b>
                  </td>
                </tr>
                <tr style={{ borderBottom: "none" }}>
                  <td>
                    <img src={Eye} alt="" />
                  </td>
                  <td scope="col">
                    <span id="comment">
                      <b>Name_Sname</b>
                    </span>
                  </td>
                  <td scope="col">
                    <b>Digital</b>
                  </td>
                  <td scope="col">
                    <b>System Integration</b>
                  </td>
                  <td scope="col" className="text-success">
                    <b>Active</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-inline-flex justify-content-between mb-5 p-3 w-100">
            <div className="d-inline-flex  pt-2">
              <p className="mt-1">
                <b>Go to page :</b>{" "}
              </p>
              <p className="mx-2 my-0">
                <select className="page-box" name="pageNumber" id=""><option value="number">1</option></select>
              </p>
              <p className="mt-1">
                <b>of 10</b>
              </p>
            </div>
            <div className="">
              <Pagination
                style={{ alignSelf: "center" }}
                count={5}
                color="primary"
                shape="circle"
                defaultValue={5}
                page={1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component3;
