import Hotel from "@/components/Hotel";
import Header1 from "@/components/Header1";
import Filters from "@/components/Filters";
import { useState, useEffect } from "react";
import axios from "axios";

function Hotels({ hotels }) {
  const [price, setPrice] = useState(3500);
  const [list, setList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  const handleCheckList = async () => {
    try {
      if (checkedList.length > 0) {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/facilities/search?val=${checkedList.join(',')}` // Pass checkedList values
        );
        if (data?.hotels) {
          setList(data.hotels);
        }
      } else {
        // If no facilities are selected, we need to refetch hotels based on the price range
        handlePrice();
      }
    } catch (error) {
      console.error("Error fetching hotels by facilities:", error);
    }
  };

  const handlePrice = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/facilities/range?price=${price}`
      );
      if (data?.hotels) {
        setList(data.hotels);
      }
    } catch (error) {
      console.error("Error fetching hotels by price range:", error);
    }
  };

  // Trigger handlePrice whenever the price changes
  useEffect(() => {
    handlePrice();
  }, [price]);

  // Trigger handleCheckList whenever checkedList changes
  useEffect(() => {
    handleCheckList();
  }, [checkedList]);

  return (
    <>
      <Header1 />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Filters 
            price={price} 
            setPrice={setPrice} 
            checkedList={checkedList} 
            setCheckedList={setCheckedList} 
          />
        </div>
        <div className="col-span-9">
          {list.length > 0 ? (
            list.map((e) => (
              <div className="m-5 col-span-8" key={e._id}>
                <Hotel e={e} />
              </div>
            ))
          ) : hotels && hotels.length > 0 ? (
            hotels.map((e) => (
              <div className="m-5 col-span-8" key={e._id}>
                <Hotel e={e} />
              </div>
            ))
          ) : (
            <div className="m-5">
              <h2>No hotels found for the selected filters</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { city } = context.query; // Get the city from the query parameters

  let res;

  if (city) {
    // If a city is provided, fetch hotels based on city
    res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hotels?city=${city}`);
  } else {
    // If no city is provided, fetch all hotels
    res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hotels`);
  }

  const data = await res.json();

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}

export default Hotels;
