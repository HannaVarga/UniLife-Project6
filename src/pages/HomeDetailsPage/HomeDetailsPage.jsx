import React from "react";
import "./HomeDetailsPage.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BiBed } from "react-icons/bi";
import { MdOutlineKingBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineCheck } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import Modal from "react-modal";
import houseIcon from "../../assets/images/houseIcon.png";
import { FavoriteContext } from './../../context/favoriteContext';


function HomeDetailsPage() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const {favorites, addToFavorites, removeFromFavorites} = useContext(FavoriteContext)
  const [homeDetails, setHomeDetails] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mainImage, setMainImage] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const { detailsId } = useParams();

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


  useEffect(() => {
    axios
      .get(`${baseUrl}/properties/${detailsId}`)
      .then((res) => {
        console.log(res.data);
        setHomeDetails(res.data);
        setMainImage(res.data.images[0]);
      })
      .catch((error) => console.log(error));
  }, []);


  useEffect(() => {
  setIsFavorite(favorites.find((item)=> item?.id === homeDetails.id));
  }, [favorites]);


  return (
    <main className="homeDetails-container">
      <Link to={`/cityDetails/${homeDetails?.city_id?._id}`} className="back-search">
        <AiOutlineLeft />
        <p>Back to Search</p>
      </Link>

      <div className="superior-description-container">
        {/* --left-side */}
        <div className="photos-container">
          <div className="photo-top">
            <img src={mainImage} alt="" />
          </div>

          <div className="photo-bottom">
            {homeDetails?.images?.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setMainImage(item)}
                alt=""
              />
            ))}
          </div>
        </div>

        {/* --Right-side */}
        <div className="home-details-container">
          <div className="address-details">
            <p>
              {homeDetails.address?.street}, {homeDetails.address?.city},{" "}
              {homeDetails.address?.postcode}
            </p>
          </div>

          <div className="home-details">
            <div className="items">
              <span>Bedrooms</span>
              <div className="bedrooms">
                <MdOutlineKingBed />
                {homeDetails.bedroom_count}
              </div>
            </div>

            <div className="items">
              <span>Bathrooms</span>
              <div className="bathrooms">
                <FaBath />
                {homeDetails.bathroom_count}
              </div>
            </div>

            <div className="items">
              <span>Property Type</span>
              <div className="prop-type">{homeDetails.property_type}</div>
            </div>

            <div className="items">
              <span>Price</span>
              <div className="price">${homeDetails.rent}</div>
            </div>

            <div className="items">
              <span>Furnished Type</span>
              <div className="furnished">{homeDetails.furnished}</div>
            </div>

            <div className="items">
              <span>Available from</span>
              <div className="available">{homeDetails.availability}</div>
            </div>
          </div>
          <div className="buttons">
            <button>
            {isFavorite ? (
              <AiFillHeart style={{ color: "var(--secondary)" ,fontSize:"23px" }} onClick={()=>removeFromFavorites(homeDetails?.id)} />
              ) : (
              <BsSuitHeart style={{ color: "var(--secondary" ,fontSize:"23px"  }} onClick={()=>addToFavorites(homeDetails)}/>
            )}
              Favorites
            </button>
            <button onClick={() => setModalIsOpen(true)}>
              Booking Viewing
            </button>
          </div>
        </div>
      </div>

      <div className="inferior-description-container">
        <div className="leftSide">
          <div>
            <h2>Description</h2>
            <p>{homeDetails.property_description}</p>
          </div>
          <div className="inferior-features">
            <h2>Key Features</h2>
            <p>
              {homeDetails.key_features?.map((item, index) => (
                <p key={index}>
                  {" "}
                  <AiOutlineCheck /> {item}
                </p>
              ))}
            </p>
          </div>
        </div>

        <div className="rightSide">
          <h2>Bedroom Price</h2>
          <div className="bedrooms-price">
            <div className="bed1">
              <p>Bedroom 1</p>
              <p>${homeDetails?.bedroom_prices?.bedroom_one} per week</p>
            </div>
            <div className="bed1">
              <p>Bedroom 2</p>
              <p>${homeDetails?.bedroom_prices?.bedroom_two} per week</p>
            </div>
            <div className="bed1">
              <p>Bedroom 3</p>
              <p>${homeDetails?.bedroom_prices?.bedroom_three} per week</p>
            </div>
            <div className="bed1">
              <p>Bedroom 4</p>
              <p>${homeDetails?.bedroom_prices?.bedroom_four} per week</p>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="modal">
        <div className="modal-box">
          <div className="modal-header">
            <div className="contactUs">
              <h2>Book a Viewing</h2>
              <img src={houseIcon} alt="" />
            </div>
            <p>
              {homeDetails.address?.street}, {homeDetails.address?.city},{" "}
              {homeDetails.address?.postcode}
            </p>
          </div>

          <form className="book-viewing-form">
            <div className="form-left-side">
              <div className="item">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="item">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Enter your email address" />
              </div>
              <div className="item">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your Phone number"
                ></input>
              </div>
            </div>

            <div className="for-right-side">
              <div className="item">
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                className="book-viewing-submit-btn"
                onClick={() => setModalIsOpen(false)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </main>
  );
}

export default HomeDetailsPage;
