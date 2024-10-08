"use client";
import axios from "axios";
import { useState, useEffect } from "react";

function Filters({ price, setPrice, handlePrice, checkedList, setCheckedList }) {
  const [list, setList] = useState([]);

  const fetchFacilities = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/facilities`);
      const facilitiesData = response.data;
      if (facilitiesData?.facilities) {
        setList(facilitiesData.facilities);
      }
    } catch (error) {
      console.error("Error fetching facilities:", error);
    }
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  const handleCheckboxChange = (facility) => {
    if (checkedList.includes(facility)) {
      // Remove facility from checkedList
      setCheckedList(checkedList.filter((item) => item !== facility));
    } else {
      // Add facility to checkedList
      setCheckedList([...checkedList, facility]);
    }
  };

  return (
    <div className="border-2 rounded-md p-5 my-5 ml-5 bg-white shadow-lg">
      <label htmlFor="price" className="text-xl mr-3 font-bold">
        Price:
      </label>
      <div className="flex items-center">
        <input
          type="range"
          name="price"
          id="price"
          min={500}
          max={3000}
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
          className="flex-grow mx-2 accent-blue-500"
        />
        <span className="text-lg font-semibold text-gray-700">
          &#8377; {price}
        </span>
      </div>
      <div className="my-10">
        <h3 className="text-xl font-bold my-3">Filter by Facilities</h3>
        {list.map((facility, index) => (
          <div key={index} className="flex items-center my-3">
            <label
              htmlFor={`checkbox-${index}`}
              className="flex-grow text-gray-800"
            >
              {facility}
            </label>
            <input
              type="checkbox"
              name="checkbox"
              id={`checkbox-${index}`}
              className="w-5 h-5 ml-3"
              checked={checkedList.includes(facility)}
              onChange={() => handleCheckboxChange(facility)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;
