import { useState } from "react";
import { useRouter } from "next/router";

function Header3() {
  const [city, setCity] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    const trimmedCity = city.trim();
    if (trimmedCity) {
      // Navigate to the hotels page with the selected city
      router.push(`/hotels?city=${trimmedCity}`);
    } else {
      // If no city is entered, navigate to hotels page without city parameter to show all hotels
      router.push(`/hotels`);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-red-600 to-red-500 h-60">
        <div className="max-10 p-5">
          <h2 className="text-4xl text-white text-center font-bold">
            Over 157,000 hotels and homes across 35 countries
          </h2>
          <div className="grid grid-cols-5 my-5 mx-20">
            <input
              type="text"
              placeholder="Search....."
              className="h-16 px-3 text-lg border-r-2 border-gray-400 col-span-2"
              onChange={(e) => { setCity(e.target.value); }}
            />
            <input
              type="text"
              placeholder="Search....."
              className="h-16 px-3 text-lg border-r-2 border-gray-400 col-span-1"
            />
            <input
              type="text"
              placeholder="Search....."
              className="h-16 px-3 text-lg border-r-2 border-gray-400 col-span-1"
            />
            <button
              type="button"
              onClick={handleSearch}
              className="h-16 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-xl text-white"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header3;
