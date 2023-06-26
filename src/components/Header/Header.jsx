import React,{useState} from 'react'

import "./Header.css";
import logo from "../../assets/images/Vector.svg";
import { BsSuitHeart, BsEnvelope } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import mailIcon from "../../assets/images/mailIcon.png";

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: { background: "rgba(1, 1, 1, 0.6)" },
  };

  Modal.setAppElement(document.getElementById("root"));

  return (
    <>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
          <span>UniLife</span>
        </Link>

        <div className="header-box">
          <Link to='/favorites' className="shortlist">
            <BsSuitHeart />
            <span>Favorites</span>
          </Link>
          <div className="contact">
            <BsEnvelope />
            <span onClick={() => setModalIsOpen(true)}>Contact Us</span>
          </div>
        </div>

        <div className={toggle ? "header-box-mobile" : "hide"}>
          <Link to='/favorites' className="shortlist-mobile">
            <BsSuitHeart />
            <span>Favorites</span>
          </Link>
          <div className="contact-mobile">
            <BsEnvelope />
            <span onClick={() => setModalIsOpen(true)}>Contact Us</span>
          </div>
        </div>
        <GiHamburgerMenu  onClick={toggleMenu} className="mobile-menu"/>


        <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="modal">
          <div className="modal-box">
            <div className="modal-header">
              <div className="contactUs">
                <h2>Contact us</h2>
                <img src={mailIcon} alt="" />
              </div>
              <p>
                Feel free to contact us if you have any questions. Looking
                forward to hear from you.
              </p>
            </div>

            <form className="contact-form">
              <div className="form-left-side">
                <div className="item">
                  <label htmlFor="name">Name</label>
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="item">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" placeholder="Enter your Phone number" />
                </div>
                <div className="item">
                  <label htmlFor="areyou">Are you a...</label>
                  <select type="text" className="employed">
                    <option>Student</option>
                    <option>Unemployeed</option>
                    <option>Self-Employeed</option>
                    <option>Employeed</option>
                  </select>
                </div>
              </div>

              <div className="form-right-side">
                <div className="item">
                  <label htmlFor="email">Email</label>
                  <input type="text" placeholder="Enter your email address" />
                </div>
                <div className="item">
                  <label htmlFor="message">Message</label>
                  <textarea
                    type="text"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  className="submit-btn"
                  onClick={() => setModalIsOpen(false)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Header
