import axios from "axios";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image"; // For the green tick image (optional)

const Payment = () => {
  const router = useRouter();
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Track payment status
  const [loading, setLoading] = useState(true); // Track loading state

  const makePayment = async () => {
    try {
      const val = {
        id: router.query?.id,
      };
      const { data } = await axios.post(`/api/razorpay`, val);

      const options = {
        key: process.env.RAZORPAY_KEY,
        name: "OYO",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for booking!",
        handler: function (response) {
          // Payment success handler
          setPaymentSuccess(true);
          setLoading(false);

          // Redirect to home page after 3 seconds
          setTimeout(() => {
            router.push("/");
          }, 3000);
        },
        prefill: {
          name: "OYO",
          email: "jhantu@gmail.com",
          contact: "8956412564",
        },
      };

      const paymentObj = new window.Razorpay(options);
      paymentObj.open();
    } catch (err) {
      setLoading(false);
      console.error("Payment failed", err);
    }
  };

  useEffect(() => {
    makePayment();
  }, []);

  return (
    <>
      <Script src="http://checkout.razorpay.com/v1/checkout.js" />
      <div className="flex flex-col items-center justify-center min-h-screen">
        {loading && !paymentSuccess && (
          <p className="text-xl">Processing your payment...</p>
        )}
        
        {paymentSuccess && (
          <div className="text-center">
            {/* Green Tick */}
            <Image
              src="/images/green-tick.png" // Replace with your green tick image path
              alt="Payment Successful"
              width={80}
              height={80}
            />
            <h2 className="text-2xl font-bold text-green-600 my-4">
              Booking Confirmed!
            </h2>
            <p className="text-lg">Redirecting you to the homepage...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Payment;
