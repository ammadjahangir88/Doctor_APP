import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import axiosInstance from "../../../utils/axios";
import loginBanner from "../../assets/images/login-banner.png";

const LoginContainer = (props) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');  // State to hold error message
  const history = useHistory();

  useEffect(() => {
    document.body.classList.add("account-page");
    return () => document.body.classList.remove("account-page");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/sign-in', credentials);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);  // Save the token to localStorage
        history.push('/patient/dashboard');  // Redirect to home page or dashboard
      } else {
        setError(response.data.message);  // Set error message from response
      }
      console.log('Login response:', response.data);
    } catch (error) {
      console.error('Login error:', error.response || error.message);
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <>
      <Header {...props} />
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img src={loginBanner} className="img-fluid" alt="Doccure Login" />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Login <span>Doccure</span></h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group form-focus">
                        <input
                          type="email"
                          name="email"
                          value={credentials.email}
                          onChange={handleChange}
                          className="form-control floating"
                          required
                        />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="password"
                          name="password"
                          value={credentials.password}
                          onChange={handleChange}
                          className="form-control floating"
                          required
                        />
                        <label className="focus-label">Password</label>
                      </div>
                      <div className="text-end">
                        <Link className="forgot-link" to="/pages/forgot-password">
                          Forgot Password?
                        </Link>
                      </div>
                      <button className="btn btn-primary w-100 btn-lg login-btn" type="submit">
                        Login
                      </button>
                      {error && <p>{error}</p>}  
                      {/* Other content omitted for brevity */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
};

export default LoginContainer;
