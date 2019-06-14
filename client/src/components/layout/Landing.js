import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
         <div style={{position: 'relative', top:'100px', width: '100%'}}>
         <h4 align="center">
           Please log in
         </h4>
         <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100%'}}>
            <br />
            <div align="center">
            <button>
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
                </Link>
              </button>
            </div>
            <div align="center">
              <button>
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Log In
                </Link>
              </button>
            </div>
          </div>
         </div>
    );
  }
}
export default Landing;
