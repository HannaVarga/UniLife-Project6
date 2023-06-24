import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import TopBanner from "./../../components/TopBanner/TopBanner";
import SearchForRooms from "../../components/SearchForRooms/SearchForRooms";
import PropertyCards from "../../components/PropertyCards/PropertyCards";
import testimonial from "../../assets/images/testimonial.png";


function CityDetails() {
  const { cityId } = useParams();
  const [cityData, setCityData] = useState([]);
  const [propertyCity, setPropertyCity] = useState("");

  const baseUrl = import.meta.env.VITE_BASE_URL;


  useEffect(() => {
    axios
      .get(`${baseUrl}/properties/city/${cityId}`)
      .then((res) => {
        console.log(res.data.response);
        console.log(res.data);
        
        setPropertyCity(res.data);
        setCityData(res.data.response);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div>
      <TopBanner
        title="Search Accommodation"
        subTitle="Whatever you’re after, we can help you find the right student accommodation for you. "
      />
      <SearchForRooms properties={cityData} setProperties={setCityData} cityId={cityId}/>

      <PropertyCards propertyCityDetails={cityData} propertyCity={propertyCity} cityId={cityId}/>

       {/* ---Testimonial-Banner */}
       <div className="testimonial-banner">
        <div className="left-Side">
          <h2>Being a student in <span>{propertyCity.city_name}</span></h2>
          <p>
            Leeds is a lively and multicultural city with a large student
            population. It is quite a compact city, so it is easy to get around
            and has a community feel. Leeds is the perfect mix of city and town
            life and has something to offer to anyone who calls it home.
          </p>
          <p>
            Leeds is home to three universities, the University of Leeds, Leeds
            Trinity University and Leeds Beckett University
          </p>
        </div>
        <div className="right-side">
          <img src={testimonial} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CityDetails;
