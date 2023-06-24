import { useState, useEffect } from "react";
import "./PropertyCards.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";


function PropertyCards({ propertyCityDetails, propertyCity }) {


  return (
    <div className="propertyCity-container">
      <h2>
         Homes in <span className="city-name">{propertyCity.city_name}</span>
      </h2>

      <div className="propertyCity-details">
        {propertyCityDetails?.map((cityDetails) => (
          <div className="property-card" key={cityDetails?.id}>
            <img src={cityDetails?.images[0]} />

            <div className="price-accommodation">
              <div>
                <p>${cityDetails.rent}</p>
                <p>Included Bills</p>
              </div>
              <div className="accommodation-icons">
                <BiBed />
                <span>{cityDetails?.bedroom_count}</span>
                <FaBath />
                <span>{cityDetails.bathroom_count}</span>
              </div>
            </div>

            <div className="furnished">
              <p>{cityDetails.property_type}</p>
              <p>{cityDetails.furnished}</p>
            </div>

            <div className="address">
              <MdLocationPin />
              <p>{cityDetails.address.street}</p>
              <p>{cityDetails.address.city}</p>
              <p>{cityDetails.address.postcode}</p>
            </div>

            <Link to={`/homeDetails/${cityDetails._id}`} className="viewHome-btn">
              <AiOutlineHome />
              <p>View Home</p>
            </Link>
            
          </div>
        ))}
      </div>

    </div>
  );
}

export default PropertyCards;
