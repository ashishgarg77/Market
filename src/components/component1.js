import React from "react";

import Filter from "../assests/filter.png";
import Budeget from "../assests/budeget.png";
import { Totalcount } from "./Data/Totalcount";
import { Totalleads } from "./Data/Totalleads";
import { Slider, styled } from "@mui/material";
import { CustomTooltip } from "./customtooltip";

import {
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  AreaChart,
  Area,
  Bar,
  BarChart,
  Tooltip,
} from "recharts";

const CustomSlider = styled(Slider)(({ theme }) => ({
  height: "10px",
  color: "#697BE9", //color of the slider between thumbs
  boxShadow: "inset -9px 7px 2px rgba(255, 255, 255, 0.25)",

  "& .MuiSlider-thumb": {
    width: "10px",
    height: "10px",
    backgroundColor: "white", //color of thumbs
  },

  "& .MuiSlider-rail": {
    // color: "#03001663", ////color of the slider outside  teh area between thumbs
    background: "#F6CF7D",
  },
}));

const Component1 = () => {
  return (
    <>
      <div>
        <div className="my-5" style={{ width: "90%", margin: "auto" }}>
          <div className="d-flex">
            <div className="d-flex align-items-center flex-wrap ">
              <div className="">
                <div className="">
                  <img src={Filter} alt="" />
                  <span className="ms-3">
                    <b>Filter</b>
                  </span>
                </div>
                <select
                  name=""
                  id=""
                  className="form-select"
                  style={{ minWidth: "165px" }}
                >
                  <option value="daily">Daily</option>
                </select>
              </div>
              <div className="text-center mt-4 mx-4">
                <b>: :</b>
              </div>
              <div>
                <div className="">
                  <b>From</b>
                </div>
                <input
                  type="date"
                  id="startDate"
                  placeholder="DD/MM/YY"
                  className=" form-control"
                  style={{
                    border: "1px solid gray",
                    borderRadius: "6px",
                    padding: "10px",
                  }}
                />
              </div>
              <div className="text-center mt-4 ms-4">
                <b>-</b>
              </div>
              <div className="mx-4">
                <div className="">
                  <b> to</b>
                </div>
                <input
                  type="date"
                  id="endDate"
                  placeholder="DD/MM/YY"
                  className=" form-control"
                  style={{
                    border: "1px solid gray",
                    borderRadius: "6px",
                    padding: "10px",
                  }}
                />
              </div>
              <button
                className="btn btn-primary mt-4 "
                style={{
                  color: "#2B78FF",
                  borderColor: "#2B78FF",
                  backgroundColor: "white",
                }}
              >
                Apply Filter
              </button>
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col-lg-3 col-md-6 mt-3">
              <div
                className="p-3"
                style={{
                  backgroundColor: "#FFF0E6",
                  minHeight: "80px",
                  borderRadius: "8px",
                }}
              >
                <div>
                  <p
                    className="mb-0"
                    style={{
                      color:
                        "var(--text-color-in-text-box-40, rgba(0, 0, 0, 0.40))",
                      padding: "5px",
                    }}
                  >
                    Total Leads
                  </p>
                </div>
                <div className="d-flex d-inline-flex justify-content-between w-100">
                  {" "}
                  <p style={{ fontSize: "24px" }}>
                    <b>200</b>
                  </p>
                  <div style={{ color: "#377E36" }}>
                    <p
                      style={{ backgroundColor: "#E0F0E4", padding: "5px" }}
                      className="mb-0"
                    >
                      +2,5%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-3">
              <div
                className="p-3"
                style={{
                  backgroundColor: "#ECEAFE",
                  minHeight: "80px",
                  borderRadius: "8px",
                }}
              >
                <div>
                  <p
                    className="mb-0"
                    style={{
                      color:
                        "var(--text-color-in-text-box-40, rgba(0, 0, 0, 0.40))",
                      padding: "5px",
                    }}
                  >
                    Total Applied Leads
                  </p>
                </div>
                <div className="d-flex d-inline-flex justify-content-between w-100">
                  {" "}
                  <p style={{ fontSize: "24px" }}>
                    <b>150</b>
                  </p>
                  <div style={{ color: "#B12F30" }}>
                    <p
                      style={{ backgroundColor: "#FEECEB", padding: "5px" }}
                      className="mb-0"
                    >
                      -1,2%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-3">
              <div
                className="p-3"
                style={{
                  backgroundColor: "#FEECEB",
                  minHeight: "80px",
                  borderRadius: "8px",
                }}
              >
                <div>
                  <p
                    className="mb-0"
                    style={{
                      color:
                        "var(--text-color-in-text-box-40, rgba(0, 0, 0, 0.40))",
                      padding: "5px",
                    }}
                  >
                    Total Disbursed Leads
                  </p>
                </div>
                <div className="d-flex d-inline-flex justify-content-between w-100">
                  {" "}
                  <p style={{ fontSize: "24px" }}>
                    <b>50</b>
                  </p>
                  <div style={{ color: "#377E36" }}>
                    <p
                      style={{ backgroundColor: "#E0F0E4", padding: "5px" }}
                      className="mb-0"
                    >
                      +2,5%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-3">
              <div
                className="p-3"
                style={{
                  backgroundColor: "#E0F0E4",
                  minHeight: "80px",
                  borderRadius: "8px",
                }}
              >
                <div>
                  <p
                    className="mb-0"
                    style={{
                      color:
                        "var(--text-color-in-text-box-40, rgba(0, 0, 0, 0.40))",
                      padding: "5px",
                    }}
                  >
                    Total Cost Utilised (Till Date)
                  </p>
                </div>
                <div className="d-flex d-inline-flex justify-content-between w-100">
                  {" "}
                  <p style={{ fontSize: "24px" }}>
                    <b>18K</b>
                  </p>
                  {/* <div style={{color:"#377E36"}}>
                  <p style={{backgroundColor:"#E0F0E4", padding:"5px"}} className="mb-0">+2,5%</p>
                </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-12 col-xl-6">
              <div className="bg-white p-4 shadow totalcount">
                <div className="d-flex flex-column justify-content-around">
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex align-item-center">
                      <h5 className="totalcount1 card-heading">
                        <b>Daily lead Received </b>
                      </h5>
                    </div>
                  </div>

                  <div className="totalcount5">
                    <ResponsiveContainer height={"90%"}>
                      <AreaChart
                        width={730}
                        height={250}
                        data={Totalleads}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <defs>
                          <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#FFEFF299"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="#FFEFF299"
                              stopOpacity={0}
                            />
                          </linearGradient>
                          <linearGradient
                            id="colorPv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#DDECFF"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="#DDECFF"
                              stopOpacity={0}
                            />
                          </linearGradient>
                          <linearGradient
                            id="colorMv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#DDECFF"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="#DDECFF"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="Daily lead"
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis axisLine={false} tickLine={false} />
                        <CartesianGrid vertical={false} strokeDasharray="8 3" />
                        <Area
                          type="monotone"
                          dataKey="Rejected"
                          stroke="#5B8FF9"
                          fillOpacity={1}
                          fill="#DDECFF"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="bg-white p-4 shadow totalcount">
                <div className="d-flex flex-column justify-content-around">
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex align-item-center">
                      <h5 className="totalcount1 card-heading">
                        <b>Count of Leads on Each Loan Stage </b>
                      </h5>
                    </div>
                  </div>

                  <div className="totalcount5">
                    <ResponsiveContainer>
                      <BarChart width={730} height={320} data={Totalcount}>
                        <defs>
                          <linearGradient
                            id="barlower"
                            x1="1"
                            y1="1"
                            x2="0"
                            y2="0"
                          >
                            <stop
                              offset="0"
                              stopColor="#8061DB"
                              stopOpacity={0.94}
                            />
                            <stop
                              offset="1"
                              stopColor="#8061DB"
                              stopOpacity={0.39}
                            />
                          </linearGradient>
                        </defs>
  
                        <CartesianGrid
                          vertical={false}
                          strokeDasharray="8 12"
                        />
                        <XAxis
                          dataKey="Loan Stage"
                          axisLine={false}
                          tickLine={false}
                          interval={"preserveStartEnd"}
                        />
                        <YAxis
                          dataKey="Approved"
                          axisLine={false}
                          tickLine={false}
                          interval={"preserveStartEnd"}
                        />
                        <Tooltip
                              content={<CustomTooltip />}
                              cursor={{ fill: "transparent" }}
                              shared={true}
                            />
                        <Bar
                          dataKey="Approved"
                          fill="url(#barlower)"
                          radius={4}
                          stackId="a"
                          barSize={25}
                        />
                        <Bar
                          dataKey="Rejected"
                          fill="#F6F4FE"
                          radius={4}
                          stackId="a"
                          barSize={25}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row " style={{ minHeight: "90px" }}>
            <div className="col-lg-4 mt-4">
              <div
                className="bg-white p-4 shadow "
                style={{ borderRadius: "16px", minHeight: "310px" }}
              >
                <div className="d-flex flex-column justify-content-around">
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex align-item-center">
                      <h5 className="totalcount1 card-heading">
                        <b>Budget Breakup</b>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="row budget">
                  <div className=" position-relative d-flex flex-column justify-content-center bottom-0 left-0">
                    <img src={Budeget} alt="" className="position-absolute" />
                    <div className="d-inline-flex justify-content-center">
                      <h4 className="text-center">
                        <b>&#8377; 3,00,000</b>
                      </h4>
                      <span className="ms-2" style={{ color: "#377E36" }}>
                        <p
                          style={{
                            backgroundColor: "#E0F0E4",
                            padding: "5px",
                            width: "50px",
                          }}
                          className="mb-0"
                        >
                          +2,5%
                        </p>
                      </span>
                    </div>
                    <p className="text-center">
                      <b>Budgeted Amount</b>
                    </p>
                  </div>
                </div>

                <div className="row mt-2 gap-2">
                  <div className="col pe-2 p-0">
                    <div className="sm-budget">
                      <p className="text-center">
                        <b>Amount Utilized</b>
                      </p>
                      <h4 className="text-center">
                        <b>&#8377; 1,50,000</b>
                      </h4>
                    </div>
                  </div>
                  <div className="col pe-2 p-0">
                    <div className="sm-budget">
                      <p className="text-center">
                        <b>Remaining Amount</b>
                      </p>
                      <h4 className="text-center">
                        <b>&#8377; 1,50,000</b>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-4">
              <div
                className="bg-white p-4 shadow "
                style={{ borderRadius: "16px", minHeight: "310px" }}
              >
                <div className="d-flex flex-column justify-content-around">
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex align-item-center">
                      <h5 className="totalcount1 card-heading">
                        <b>Conversion Ratio</b>
                      </h5>
                    </div>
                    <div>
                      <p>Last 7 Days</p>
                    </div>
                  </div>
                </div>

                <div className="d-inline-flex justify-content-center">
                  <p className="ms-2 mb-0" style={{ fontSize: "48px" }}>
                    <b>85%</b>
                  </p>
                  <span className="ms-2" style={{ color: "#377E36" }}>
                    <p
                      style={{
                        backgroundColor: "#E0F0E4",
                        padding: "5px",
                        width: "50px",
                        borderRadius: "5px",
                      }}
                      className="mb-0 mt-4"
                    >
                      +3.4%
                    </p>
                  </span>
                </div>

                <div className="container">
                  <CustomSlider
                    min={0}
                    max={100}
                    value={85}
                    valueLabelDisplay="auto"
                  />
                </div>

                <div className="row">
                  <div className="col mt-2">
                    <div
                      className="p-3 shadow1"
                      style={{
                        // height: "93px",
                        borderRadius: "8px",
                      }}
                    >
                      <div className="d-inline-flex align-items-center">
                      <div className="totalloan5"></div>
                        <p
                          className="mb-0"
                          style={{
                            padding: "5px",
                          }}
                        >
                          <b>Good Leads</b>
                        </p>
                      </div>
                      <div className="d-flex d-inline-flex  w-100">
                        {" "}
                        <p style={{ fontSize: "24px" }}>
                          <b>65%</b>
                        </p>
                        <div style={{ color: "#377E36" }}>
                          <p
                            style={{
                              backgroundColor: "#E0F0E4",
                              padding: "5px",
                              borderRadius: "5px",
                            }}
                            className="mb-0"
                          >
                            +3.4%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col mt-2">
                    <div
                      className="p-3 shadow1"
                      style={{
                        // height: "93px",
                        borderRadius: "8px",
                      }}
                    >
                      <div className="d-inline-flex align-items-center">
                      <div className="totalloan5"></div>
                        <p
                          className="mb-0 "
                          style={{
                            padding: "5px",

                          }}
                        >
                         <b> Cold Leads</b>
                        </p>
                      </div>
                      <div className="d-flex d-inline-flex w-100">
                        {" "}
                        <p style={{ fontSize: "24px" }}>
                          <b>20%</b>
                        </p>
                        <div style={{ color: "#B12F30" }}>
                          <p
                            style={{
                              backgroundColor: "#FEECEB",
                              padding: "5px",
                              borderRadius: "5px",
                            }}
                            className="mb-0"
                          >
                            -1,2%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component1;
