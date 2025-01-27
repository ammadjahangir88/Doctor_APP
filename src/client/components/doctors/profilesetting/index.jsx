/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DoctorSidebar from "../sidebar/index";
import IMG01 from "../../../assets/images/doctor-thumb-02.jpg";
import IMG02 from "../../../assets/images/feature-01.jpg";
import IMG03 from "../../../assets/images/feature-02.jpg";
import ReactTagsInput from "./tags.jsx";
import Education from "./education";
import Experience from "./experience";
import Award from "./award";
import Memberships from "./membership";
import Registration from "./registration";
import Footer from "../../footer";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Header from "../../header";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";

const ProfileSetting = (props) => {
  const [dropzone, setDropzone] = useState({ files: [] });

  const MyDropzone = ({ onDrop }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });

    return (
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        <p>Drag & drop files here, or click to select files</p>
      </div>
    );
  };

  const handleChange = useCallback(
    (files) => {
      setDropzone({
        ...dropzone,
        files: files,
      });
    },
    [dropzone]
  );
  // const [gender, setGender] = useState([
  //   { id: 1, text: "Select" },
  //   { id: 2, text: "Male" },
  //   { id: 3, text: "Female" },
  // ]);

  return (
    <div>
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Profile Settings</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index-2">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Profile Settings
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DoctorSidebar />
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Basic Information</h4>
                  <div className="row form-row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="change-avatar">
                          <div className="profile-img">
                            <img src={IMG01} alt="User" />
                          </div>
                          <div className="upload-img">
                            <div className="change-photo-btn">
                              <span>
                                <i className="fa fa-upload"></i> Upload Photo
                              </span>
                              <input type="file" className="upload" />
                            </div>
                            <small className="form-text text-muted">
                              Allowed JPG, GIF or PNG. Max size of 2MB
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Username <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" readOnly />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Email <span className="text-danger">*</span>
                        </label>
                        <input type="email" className="form-control" readOnly />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          First Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Last Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Gender</label>
                        <select className="select form-control">
                          <option>Select</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-0">
                        <label>Date of Birth</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">About Me</h4>
                  <div className="form-group mb-0">
                    <label>Biography</label>
                    <textarea className="form-control" rows="5"></textarea>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Clinic Info</h4>
                  <div className="row form-row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Clinic Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Clinic Address</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Clinic Images</label>
                        <div>
                          <MyDropzone onDrop={handleChange} />
                        </div>
                      </div>
                      <div className="upload-wrap">
                        <div className="upload-images">
                          <img src={IMG02} alt="Upload Image" />
                          <Link
                            to="#"
                            className="btn btn-icon btn-danger btn-sm"
                          >
                            <i className="far fa-trash-alt"></i>
                          </Link>
                        </div>
                        <div className="upload-images">
                          <img src={IMG03} alt="Upload Image" />
                          <Link
                            to="#"
                            className="btn btn-icon btn-danger btn-sm"
                          >
                            <i className="far fa-trash-alt"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Contact Details</h4>
                  <div className="row form-row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Address Line 1</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Address Line 2</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">City</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">
                          State / Province
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Country</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Postal Code</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Pricing</h4>

                  <div className="form-group mb-0">
                    <div id="pricing_select">
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="price_free"
                          name="rating_option"
                          className="custom-control-input"
                          defaultValue="price_free"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="price_free"
                        >
                          Free
                        </label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="price_custom"
                          name="rating_option"
                          defaultValue="custom_price"
                          className="custom-control-input"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="price_custom"
                        >
                          Custom Price (per hour)
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    className="row custom_price_cont"
                    id="custom_price_cont"
                    style={{ display: "none" }}
                  >
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        id="custom_rating_input"
                        name="custom_rating_count"
                        defaultValue=""
                        placeholder="20"
                      />
                      <small className="form-text text-muted">
                        Custom price you can add
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card services-card">
                <div className="card-body">
                  <h4 className="card-title">Services and Specialization</h4>
                  <div className="form-group">
                    <label>Services</label>
                    <ReactTagsInput key="tag1" />
                  </div>
                  <div className="form-group mb-0">
                    <label>Specialization </label>
                    <ReactTagsInput key="tag2" />
                    <small className="form-text text-muted">
                      Note : Type & Press enter to add new specialization
                    </small>
                  </div>
                </div>
              </div>

              <Education />
              <Experience />
              <Award />
              <Memberships />
              <Registration />

              <div className="submit-section submit-btn-bottom">
                <button type="submit" className="btn btn-primary submit-btn">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default ProfileSetting;
