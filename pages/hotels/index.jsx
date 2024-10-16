import Hotel from "@/components/Hotel";
import Header1 from "@/components/Header1";
import Filters from "@/components/Filters";
import { useState, useEffect } from "react";
import axios from "axios";

function Hotels({ initialHotels, initialCity }) {
  const [price, setPrice] = useState(3500);  // Default price filter
  const [list, setList] = useState(initialHotels || []); // Initialize with city-based hotels
  const [checkedList, setCheckedList] = useState([]);
  const [city, setCity] = useState(initialCity || '');  // Store the selected city

  // Fetch hotels based on facilities and apply price filter within that city
  const handleCheckList = async () => {
    try {
      if (checkedList.length > 0) {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/facilities/search?city=${city}&val=${checkedList.join(',')}`
        );
        if (data?.hotels) {
          // Filter the hotels based on the price range as well after fetching the data
          const filteredHotels = data.hotels.filter(hotel => hotel.price <= price);
          setList(filteredHotels);
        }
      } else {
        // If no facilities are selected, apply the price filter to the city-based hotels
        handlePrice();
      }
    } catch (error) {
      console.error("Error fetching hotels by facilities:", error);
    }
  };

  // Fetch and filter hotels by price range within the selected city
  const handlePrice = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/hotels?city=${city}`
      );
      if (data?.hotels) {
        // Filter the hotels based on the selected price
        const filteredHotels = data.hotels.filter(hotel => hotel.price <= price);
        setList(filteredHotels);
      }
    } catch (error) {
      console.error("Error fetching hotels by price range:", error);
    }
  };

  // Apply price filter whenever the price changes
  useEffect(() => {
    handlePrice();
  }, [price]);

  // Apply facility filter whenever checkedList changes
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
    // Fetch hotels based on the city first
    res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hotels?city=${city}`);
  } else {
    // If no city is provided, fetch all hotels (or handle accordingly)
    res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hotels`);
  }

  const data = await res.json();

  return {
    props: {
      initialHotels: data.hotels || [],  // Pass initial hotels fetched by location
      initialCity: city || "",           // Pass the city to the component
    },
  };
}

export default Hotels;
