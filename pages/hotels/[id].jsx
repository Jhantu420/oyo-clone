"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Cookies from "js-cookie";

function SingleHotel({ hotel }) {
  const [auth, setAuth] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Check authentication status on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = Cookies.get("token");
      setAuth(!!token);
    }
  }, []);

  // Image slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % hotel.gallery.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [hotel.gallery.length]);

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + hotel.gallery.length) % hotel.gallery.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hotel.gallery.length);
  };

  return (
    <>
      <Head>
        <title>{hotel.name}</title>
      </Head>
      <div className="w-full sm:w-11/12 md:w-8/12 mx-auto my-5 px-4">
        {/* Slideshow */}
        <div className="relative h-72 sm:h-96 my-5">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between z-10">
            {/* Previous and Next Arrows */}
            <button
              onClick={prevImage}
              className="bg-black bg-opacity-30 hover:bg-opacity-60 text-white p-2 sm:p-3 rounded-full mx-2 transition-all duration-300"
            >
              &#10094;
            </button>
            <button
              onClick={nextImage}
              className="bg-black bg-opacity-30 hover:bg-opacity-60 text-white p-2 sm:p-3 rounded-full mx-2 transition-all duration-300"
            >
              &#10095;
            </button>
          </div>
          <Image
            src={hotel.gallery[currentImageIndex]}
            alt={`Gallery Image ${currentImageIndex + 1}`}
            width={2000}
            height={2000}
            className="h-full w-full object-cover transition-all duration-700 ease-in-out"
          />
          {/* Dots for Image Indicators */}
          <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center space-x-2">
            {hotel.gallery.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  index === currentImageIndex ? "bg-white" : "bg-gray-400"
                } opacity-75 transition duration-300`}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold">{hotel.name}</h3>
          <p className="text-base sm:text-lg my-5 text-justify">
            {hotel.description}
          </p>
          <button className="w-32 sm:w-40 h-8 sm:h-10 rounded-lg bg-blue-400 text-base sm:text-lg shadow-lg mr-6 hover:bg-blue-600 hover:text-white">
            Price: &#8377; {hotel.price || "N/A"}
          </button>

          <p className="text-xl sm:text-2xl font-bold my-5">Facilities</p>
          {/* Adjust facilities to a grid for responsive layout */}
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-base sm:text-lg">
            {hotel.facilities.map((facility) => (
              <li key={facility._id} className="flex flex-col items-center">
                <Image
                  src={facility.img}
                  alt={facility.name}
                  width={50}
                  height={50}
                />
                {facility.name}
              </li>
            ))}
          </ul>

          {/* Conditional rendering for Book Now button or Login prompt */}
          {auth ? (
            <Link href={`/payment/${hotel?._id}`}>
              <button className="w-32 sm:w-40 h-8 sm:h-10 rounded-lg bg-red-400 text-base sm:text-lg shadow-lg mr-6 hover:bg-red-600 hover:text-white my-5">
                Book Now
              </button>
            </Link>
          ) : (
            <div className="bg-yellow-100 p-3 sm:p-4 rounded-lg my-5 text-center">
              <p className="text-base sm:text-lg font-semibold text-red-600">
                Please{" "}
                <Link
                  href="/login"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  login
                </Link>{" "}
                to get offers!
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Sign in to enjoy exclusive discounts and offers for members.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  // Fetch all hotels first
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hotels?id=${id}`);
  const data = await res.json();

  // Find the specific hotel by id from the list of hotels
  const hotel = data.hotels.find((h) => h._id === id);

  // If the hotel is not found, return a 404 page
  if (!hotel) {
    return {
      notFound: true,
    };
  }

  // Pass the single hotel as a prop
  return {
    props: {
      hotel,
    },
  };
}

export default SingleHotel;
