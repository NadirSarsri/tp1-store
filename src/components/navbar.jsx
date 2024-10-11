import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand  mb-0">
            <span className="me-3">My Store</span>
            <span
              className="position-relative"
              style={{ cursor: "pointer" }}
              onClick={this.props.onShowCart}
            >
              Cart
              <small className="badge text-bg-primary top-0 start-100 translate-middle position-absolute rounded-pill">
                {this.props.totalItems}
              </small>
            </span>
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
