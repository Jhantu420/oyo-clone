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
    <div className=" flex justify-between border-b-2 border-gray-300 items-center h-24 px-10">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className=" w-28 h-28 "
      />
      <div className=" h-full flex">
        <Block title={"Become a member"} para={"Additional 0% off on stays."} />
        <Block
          title={"OYO for business"}
          para={"Trusted by 5000 corporates."}
        />
        <Block title={"List your property"} para={"Start earning in 30 min."} />
        <Block title={"987654321"} para={"Call us to book now."} />
        <div className="flex items-center px-3 ">
          <Image
            src={"/demo.svg"}
            alt="demo"
            width={200}
            height={200}
            className=" w-10 h-10 rounded-full mr-5"
          />
          {isLoggedIn ? (
            <button onClick={handleLogout} className="font-bold text-red-500">
              Logout
            </button>
          ) : (
            <Link href={"/login"}>
              <h3>Login/Signup</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
