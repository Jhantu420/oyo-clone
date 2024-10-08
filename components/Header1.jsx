"use client";
import { useRouter } from "next/navigation"; // For redirecting after logout
import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Header1 = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in by checking for token in cookies
    const token = Cookies.get('token');
    setIsLoggedIn(!!token); // Set to true if token exists
  }, []);

  const handleLogout = () => {
    // Clear user token from Cookies
    Cookies.remove('token');

    // Optionally redirect the user to login page
    setIsLoggedIn(false);
    router.push("/login"); // Redirect user to login page
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-24 px-4 md:px-10 py-4 md:py-0 border-b-2 border-gray-300">
      {/* Logo */}
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className="w-20 h-20 md:w-28 md:h-28 mb-4 md:mb-0"
      />

      {/* Blocks and User Section */}
      <div className="flex flex-col md:flex-row items-center h-full">
        <Block title={"Become a member"} para={"Additional 0% off on stays."} />
        <Block
          title={"OYO for business"}
          para={"Trusted by 5000 corporates."}
        />
        <Block title={"List your property"} para={"Start earning in 30 min."} />
        <Block title={"987654321"} para={"Call us to book now."} />

        {/* User Section */}
        <div className="flex items-center mt-4 md:mt-0 md:ml-5">
          <Image
            src={"/demo.svg"}
            alt="demo"
            width={200}
            height={200}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-3"
          />
          {isLoggedIn ? (
            <button onClick={handleLogout} className="font-bold text-red-500">
              Logout
            </button>
          ) : (
            <Link href={"/login"}>
              <h3 className="font-bold text-blue-600">Login/Signup</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
