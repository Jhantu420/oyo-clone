import Hotel from "@/components/Hotel";
import Header1 from "@/components/Header1";

function Hotels({ hotels }) {
  return (
    <>
      <Header1 />
      {hotels && hotels.length > 0 ? (
        hotels.map((e) => (
          <div className="m-5" key={e._id}>
            <Hotel e={e} />
          </div>
        ))
      ) : (
        <div className="m-5">
          <h2>No hotels found for the selected city</h2>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const { city } = context.query; // Get the city from the query parameters

  let res;

  if (city) {
    // If a city is provided, fetch hotels based on city
    res = await fetch(`http://localhost:3000/api/hotels?city=${city}`);
  } else {
    // If no city is provided, fetch all hotels
    res = await fetch('http://localhost:3000/api/hotels');
  }

  const data = await res.json();

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}

export default Hotels;
