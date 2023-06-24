import React from 'react'
import './SearchCity.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";


function SearchCity() {
  const [allCities, setAllCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const [cityId, setCityId] = useState("");
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${baseUrl}/cities?limit=20`)
      .then((res) => {
        setAllCities(res.data.response);
      })
      .catch((error) => console.log(error));
  }, []);


  const handleOptionClick = (e) => {
    setCityName(e.target.value);
   
   const matches = allCities.filter((item)=> item.name === e.target.value)
   setCityId(matches[0]._id)
  };

  
  return (
   
    <div className='searchBar-container'>
    <form className='searchCity-form'>
        <select 
        onChange={handleOptionClick} 
        type="text" > 
        <option selected>Search for city</option>
        {allCities.map((cities)=> (
         <option key={cities.id} className='options'>
          {cities.name}
         </option>
       ))}
        </select>
       <button onClick={()=>navigate(`/cityDetails/${cityId}`)}>Find Homes</button>
    </form>
    </div>
  )
}

export default SearchCity