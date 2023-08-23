import React from 'react'

import Person from "../assests/person.png";
import Configuration from "../assests/configura.png";
import Organisation from "../assests/Organisati.png";
import Fox from "../assests/Fox.png";
const component2 = () => {
  return (
    <>
        <div>
        <div style={{ width: "90%", margin: "auto" }}>
        <div className=" left-panel">
                <div className="first-heading d-inline-flex justify-content-start align-items-center">
                  <i className="text-white bi bi-person-square"></i>
                  <img src={Person} alt="" />
                  <p className="px-3 m-0 text-white">
                    <strong>Basic Details</strong>
                  </p>
                </div>
                <div className="row">
                  <div
                    className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-column justify-content-around p-5"
                    style={{ minHeight: "200px" }}
                  >

                      <div className="">
                        <span className="text-secondary">Aggregator Name</span>
                        <p>Name_Sname</p>
                      </div>

                      <div className="">
                        <span className="text-secondary">POC Email</span>
                        <p>Pname@gmail.com</p>
                      </div>


                      <div className="">
                        <span className="text-secondary">User Id</span>
                        <p>Uname_01</p>
                      </div>
                  </div>
                  <div
                    className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-column justify-content-around p-5"
                    style={{ minHeight: "200px" }}
                  >
                    <div className="">
                      <span className="text-secondary">Aggregator Type</span>
                      <p>Corporate</p>
                    </div>
                    <div className="">
                      <span className="text-secondary">POC Mobile Number</span>
                      <p>+91 - 9900667534</p>
                    </div>
                    <div className="">
                      <span className="text-secondary">Password</span>
                      <p>Name@32</p>
                    </div>
                  </div>
                  <div
                    className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-5"
                    style={{ minHeight: "200px" }}
                  >
                    <div className="">
                      <span className="text-secondary">POC Name</span>
                      <p>P_name</p>
                    </div>
                    <div className="">
                      <span className="text-secondary">Creator Mode</span>
                      <p>API / JavaScript</p>
                    </div>
                  </div>
                </div>

                <div className="first-heading d-inline-flex justify-content-start align-items-center">
                  <i className="text-white bi bi-person-square"></i>
                  <img src={Configuration} alt="" />
                  <p className="px-3 m-0 text-white">
                    <strong>Configuration Details</strong>
                  </p>
                </div>
                <div className="row">
                  <div
                    className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-column justify-content-around p-5"
                    style={{ minHeight: "200px" }}
                  >

                      <div className="">
                        <span className="text-secondary">Payout Amount</span>
                        <p>₹60,000</p>
                      </div>

                      <div className="">
                        <span className="text-secondary">Payout Model</span>
                        <p>CPD</p>
                      </div>
                  </div>
                  <div
                    className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4  p-5"
                    style={{ minHeight: "200px" }}
                  >
                    <div className="">
                      <span className="text-secondary">Payout Cycle</span>
                      <p>Monthly</p>
                    </div>
                  </div>
                  <div
                    className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4  p-5"
                    style={{ minHeight: "200px" }}
                  >
                    <div className="">
                      <span className="text-secondary">POC Email</span>
                      <p>name@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="first-heading d-inline-flex justify-content-start align-items-center">
                  <i className="text-white bi bi-person-square"></i>
                  <img src={Organisation} alt="" />
                  <p className="px-3 m-0 text-white">
                    <strong>Organisation Details</strong>
                  </p>
                </div>
                <div className="row">
                  <div
                    className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-column justify-content-around p-5"
                    style={{ minHeight: "200px" }}
                  >

                      <div className="">
                        <span className="text-secondary">Organisation Contact Number</span>
                        <p>9765432106</p>
                      </div>

                      <div className="">
                        <span className="text-secondary">Status</span>
                        <p className='text-success'>Active</p>
                      </div>
                  </div>
                  <div
                    className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-5"
                    style={{ minHeight: "200px" }}
                  >
                    <div className="">
                      <span className="text-secondary">Website Link</span><br />
                      <a href="www.webname.in" style={{textDecoration:"none"}}>www.webname.in</a>
                    </div>
                  </div>
                  <div
                    className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-5"
                    style={{ minHeight: "200px" }}
                  >
                    <div className="">
                      <span className="text-secondary">Logo</span><br />
                      <img src={Fox} alt="" />
                    </div>
                  </div>
                </div>

               
    </div>
        </div>
        </div>
    </>
  )
}

export default component2