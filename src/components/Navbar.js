import { Component } from "react";
import "./stylesNavbar.css";
// import Image from "./logo.png";
import Image1 from "./logo1.png";
// import Footer from "./navbarFooter";

// function Navbar() {
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <img className="logo" src={Image1} alt="logo.png" />

          {/* <h1 class="clubName">Enquire</h1> */}
          <div>
            <ul
              id="Navbar"
              className={this.state.clicked ? "#Navbar active" : "#Navbar"}
            >
              <li>
                <a className="active" href="index.html">
                  Events
                </a>
              </li>
              <li>
                <a href="index.html">Quiz</a>
              </li>
              <li>
                <a href="index.html">Login</a>
              </li>
              <li>
                <a href="index.html">SignUp</a>
              </li>
            </ul>
          </div>

          {/* <div id="Mobile">
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
          </div> */}

          <div id="Mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
