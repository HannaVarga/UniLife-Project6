import React from 'react'
import './CityCards.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom'

function CityCards() {
const [cityCards, setCityCards] = useState([])
const baseUrl = import.meta.env.VITE_BASE_URL;


  useEffect(() => {
    axios.get(`${baseUrl}/cities?limit=9`)
    .then((res)=> {
      setCityCards(res.data.response)
    })
    .catch((error)=> console.log(error));
  }, []);


  return (
    <>
    <div className='city-grid'>
      {cityCards.map((cities)=> (
        <Link to={`/cityDetails/${cities?._id}`} key={cities.id} className='city-content'>
          <img src={cities.image_url} alt="cities" />
          <div className="city-info">
          <p>{cities.name}</p>
          <span>{cities.property_count} properties</span>
          </div>
        </Link>
      ))}
    </div>
    
    <Link to='/allCities'>
    <button className="all-cities-btn">
      See All Cities
    </button>
    </Link>
    </>
  )
}

export default CityCards