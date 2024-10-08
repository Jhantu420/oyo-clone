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
      <div className="bg-gradient-to-r from-red-600 to-red-500 h-auto md:h-60 p-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white text-center font-bold">
            Over 157,000 hotels and homes across 35 countries
          </h2>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-3 my-5 w-full justify-center">
            <input
              type="text"
              placeholder="Search....."
              className="h-12 md:h-16 px-3 text-base md:text-lg border-r-0 md:border-r-2 border-gray-400 flex-grow"
              onChange={(e) => { setCity(e.target.value); }}
            />
            <button
              type="button"
              onClick={handleSearch}
              className="h-12 md:h-16 px-3 py-2 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-lg md:text-xl text-white"
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
