'use client';
import Head from "next/head";
import { useState } from "react";
import axios from 'axios';
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name_error, setName_Error] = useState("");
  const [email_error, setEmail_Error] = useState("");
  const [password_error, setPassword_Error] = useState("");
  const [login, setLogin] = useState(false); 
  const [formMessage, setFormMessage] = useState(""); // To store success or error message
  const router = useRouter()

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    // Validation
    if (!login && name === "") {
      setName_Error("Name is required");
      isValid = false;
    } else {
      setName_Error("");
    }

    if (!validateEmail(email)) {
      setEmail_Error("Please enter a valid email address");
      isValid = false;
    } else {
      setEmail_Error("");
    }

    if (password.length < 6) {
      setPassword_Error("Password must be at least 6 characters long");
      isValid = false;
    } else {
      setPassword_Error("");
    }

    if (isValid) {
      try {
        if (login) {
          // Handle login request
          const response = await axios.post('http://localhost:3000/api/user/login', {
            email,
            password
          });
          Cookies.set('token', response.data.token, { expires: 7, path: '/' });
          setFormMessage("Login successful!");
          console.log(response.data);
          router.back()
        } else {
          // Handle signup request
          const response = await axios.post('http://localhost:3000/api/user/register', {
            name,
            email,
            password
          });
          setFormMessage("Signup successful!");
          console.log(response.data);
        }
      } catch (error) {
        // Handle API error
        setFormMessage(error.response?.data?.message || "An error occurred");
        console.error(error);
      }
    }
  };

  // Function to toggle between login and signup modes
  const toggleMode = () => {
    setLogin(!login); // Toggle between login and signup
    setFormMessage(""); // Clear any previous message when switching modes
  };

  // Basic email validation
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <>
      <Head>
        <title>
          OYO : India's Best Online Hotel Booking Site For Sanitized Stay
        </title>
      </Head>
      <div className="flex h-auto justify-center items-center bg-gray-100 bg-login-background bg-no-repeat bg-cover brightness-90">
        <div className="absolute w-auto top-10 px-20 flex items-center text-white">
          <h2 className="text-5xl font-bold mr-5">OYO</h2>
          <p className="font-bold text-2xl">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className="flex justify-center w-10/12" style={{ marginTop: "100px" }}>
          <div className="w-9/12 mt-11 text-white">
            <p className="font-bold text-5xl text-justify">There's a</p>
            <p className="font-bold text-5xl text-justify mt-2 mb-2">
              smarter way to{" "}
            </p>
            <p className="font-bold text-5xl text-justify">OYO around</p>
            <p className="text-xl mt-5 text-justify">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners...
            </p>
          </div>

          <div className="w-9/12 ml-10 border-2 h-auto bg-white shadow-2xl rounded-lg">
            <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-500 to bg-pink-600 font-bold text-white">
              {login ? "Login to your account" : "Sign up & Get ₹500 OYO Money"}
            </p>
            <div className="px-10 py-8">
              <h3 className="text-4xl font-bold mb-6">{login ? 'Login' : 'Signup'}</h3>
              <p className="font-bold text-lg mb-4">
                Please enter your details to continue
              </p>

              {/* Form Input */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {
                  !login && (
                    <>
                      <input
                        type="text"
                        placeholder="Enter your name.."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                      {name_error && <p className="text-red-500">{name_error}</p>}
                    </>
                  )
                }

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {email_error && <p className="text-red-500">{email_error}</p>}

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {password_error && (
                  <p className="text-red-500">{password_error}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  {login ? 'Login' : 'Signup'}
                </button>
              </form>

              {/* Display API response message */}
              {formMessage && <p className="mt-4 text-center text-red-500">{formMessage}</p>}

              {/* Toggle Mode Link */}
              <p className="mt-4">
                <span>{login ? "Don't have an account?" : "Already have an account?"}</span>
                <span className="text-red-600 font-bold ml-2 cursor-pointer" onClick={toggleMode}>
                  {login ? "Signup" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
