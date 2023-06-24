import {useEffect, useState} from "react";
import "./SearchForRooms.css";
import axios from 'axios'

function SearchForRooms({ properties, setProperties, cityId}) {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [queryState, setQueryState] = useState('');

  const numCount = [1, 2, 3, 4, 5, 6]
  const maxPrice = [1000, 1500, 2000, 2500, 3000]
  const homeType = ["Detached", "Semi-Detached", "Apartment"]

  const filterBedroom = (bedroom)=>{ 
    const query={
      city_id: cityId,
      bedroom_count:bedroom,
  } 
  setQueryState(query)
  }

  const filterBathroom = (bathroom)=>{ 
  setQueryState({...queryState, bathroom_count: bathroom})
  }

  const filterRent = (rent)=>{ 
  setQueryState({...queryState, rent: rent})
  }

  const filterHomeType = (homeType)=>{ 
  setQueryState({...queryState, property_type: homeType})
  }


  useEffect(() => { console.log('useEffect running')
  console.log(queryState)
    axios
      .post(`${baseUrl}/properties/filter`,{"query": queryState})
      .then((res) => {
        console.log(res.data)
        if(res.data.status === 200){
          setProperties(res.data.response)
        }             
      })
      .catch((error) => console.log(error));
  }, [queryState]);
 


  return (
    <div className="searchForRooms-container">
      <div className="searchRoom">
        <div className="items">
          <label>Min Bedroom</label>
          <select onChange={(e)=>filterBedroom(e.target.value)} className='select-box'>
          <option selected>Min Bedroom</option>
          {numCount.map((item)=> <option key={item} className="allItems">{item}</option>)}
          </select>
        </div>
        <div className="items">
          <label>Min Bathroom</label>
          <select onChange={(e)=>filterBathroom(e.target.value)}>
          <option selected>Min Bathroom</option>
          {numCount.map((item)=> <option>{item}</option>)}
          </select>
        </div>
        <div className="items">
          <label>Max Price</label>
          <select onChange={(e)=>filterRent(e.target.value)}>
          <option selected>Max Price</option>
          {maxPrice.map((item)=> <option>{item}</option>)}
          </select>
        </div>
        <div className="items">
          <label>Home Type</label>
          <select onChange={(e)=>filterHomeType(e.target.value)}>
          <option selected>Home Type</option>
          {homeType.map((item)=> <option>{item}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchForRooms;
