import React from "react";
import "./AllCities.css";
import banner from "../../assets/images/downtown.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import TopBanner from "../../components/TopBanner/TopBanner";

function AllCities() {
  const [allCities, setAllCities] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { cityId } = useParams();

  useEffect(() => {
    axios
      .get(`${baseUrl}/cities?limit=20`)
      .then((res) => {
        console.log(res.data.response);
        setAllCities(res.data.response);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <>
      <TopBanner
        title="Student Accommodation"
        subTitle="UniLife have student accommodation available across the UK. Whatever
            you’re after, we can help you find the right student accommodation
            for you."
      />

      <div className="allCities">
        <h3>Search by City</h3>
        
          <div className="allCities-grid">
            {allCities.map((cities) => (
              <Link to={`/cityDetails/${cities?._id}`} key={cities?.id} className="allCities-content">
                <p>{cities.name}</p>
              </Link>
            ))}
          </div>
      </div>
    </>
  );
}

export default AllCities;
