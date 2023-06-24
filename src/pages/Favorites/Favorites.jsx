import React from "react";
import "./Favorites.css";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { FavoriteContext } from "./../../context/favoriteContext";

function Favorites() {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  useEffect(() => {
    const favStored = localStorage.getItem("favoritesItems");
    if (favStored !== null) {
      setFavorites(JSON.parse(favStored));
    }
  }, []);

  console.log(favorites);

  return (
    <div className="favorite-container">
      <h2>My Favorites</h2>
      <div className="favorite-details">
        {favorites?.map((favorite) => (
          <div key={favorite?.id}>
            <img src={favorite?.images[0]} />

            <div className="price-accommodation">
              <div>
                <p>${favorite.rent}</p>
                <p>Included Bills</p>
              </div>
              <div className="accommodation-icons">
                <BiBed />
                <span>{favorite?.bedroom_count}</span>
                <FaBath />
                <span>{favorite.bathroom_count}</span>
              </div>
            </div>

            <div className="furnished">
              <p>{favorite.property_type}</p>
              <p>{favorite.furnished}</p>
            </div>

            <div className="address">
              <MdLocationPin />
              <p>{favorite.address.street}</p>
              <p>{favorite.address.city}</p>
              <p>{favorite.address.postcode}</p>
            </div>

            <Link to={`/homeDetails/${favorite._id}`} className="viewHome-btn">
              <AiOutlineHome />
              <p>View Home</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
