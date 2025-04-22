// PaymentSuccess.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updatePayment } from "../../State/Payment/Action";
import Navigation from '../Navigation/Navigation';
import { getUser } from "../../State/Auth/Action";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const { houseId, userId } = useParams(); // Add userId
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentId = urlParams.get("razorpay_payment_id");
    const paymentStatus = urlParams.get("razorpay_payment_link_status");
    setPaymentId(paymentId);
    setPaymentStatus(paymentStatus);
  }, []);

  useEffect(() => {
    if (jwt && auth.jwt !== jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);

  useEffect(() => {
    if (auth.user && paymentId) {
      const data = { houseId, paymentId, userId }; // Pass userId
      dispatch(updatePayment(data));
    }
  }, [auth.user, houseId, paymentId, userId, dispatch]); // Add userId

  return (
    <div>
      <Navigation />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-white p-6 md:mx-auto">
        <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
          <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
          <p className="text-gray-600 my-2">Congrats, your home booked Successfully</p>
          <p>Have a great day!</p>
          <div className="py-10 text-center">
            <a href="/" className="px-12 bg-green-600 hover:bg-green-600 text-white font-semibold py-3">
              GO BACK
            </a>

          </div>
        </div>

        <div className="pt-16">
          <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">What our customers say</h2>
            <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
              {/* Testimonial 1 */}
              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
                <div className="h-full flex flex-col justify-center space-y-4">
                  <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                  <p className="text-gray-600 md:text-xl"><span className="font-serif">"</span>I stumbled upon this rental website while searching for a new place to live, and I couldn't be happier with my experience. The process was smooth, the listings were comprehensive, and the support team was incredibly helpful. I found my dream apartment within days, thanks to this platform!<span className="font-serif">"</span></p>
                  <div>
                    <h6 className="text-lg font-semibold leading-none">John Doe</h6>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
                <div className="h-full flex flex-col justify-center space-y-4">
                  <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                  <p className="text-gray-600 md:text-xl"><span className="font-serif">"</span>As a busy professional, finding the perfect rental home seemed like a daunting task. However, this website made it easy and stress-free. The search filters were intuitive, allowing me to narrow down my options quickly. Plus, the customer reviews provided valuable insights. I highly recommend this platform to anyone in search of their next home!<span className="font-serif">"</span></p>
                  <div>
                    <h6 className="text-lg font-semibold leading-none">Sarah Smith</h6>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
                <div className="h-full flex flex-col justify-center space-y-4">
                  <img className="w-20 h-20 mx-auto rounded-full" src="https://plus.unsplash.com/premium_photo-1661304704888-542933309d4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZWlnbiUyMG1hbGUlMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D" alt="user avatar" height="220" width="220" loading="lazy" />
                  <p className="text-gray-600 md:text-xl"><span className="font-serif">"</span>I've been using this rental website for several months now, and it has exceeded my expectations. Not only are the listings up-to-date and accurate, but the customer service is top-notch. Anytime I had a question or needed assistance, the team was responsive and knowledgeable. Thanks to this website, I found a fantastic apartment in a great location!<span className="font-serif">"</span></p>
                  <div>
                    <h6 className="text-lg font-semibold leading-none">Michael Johnson</h6>
                  </div>
                </div>
              </div>
              {/* Testimonial 4 */}
              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
                <div className="h-full flex flex-col justify-center space-y-4">
                  <img className="w-20 h-20 mx-auto rounded-full" src="https://media.istockphoto.com/id/1157741177/photo/portrait-of-a-young-adult-asian-woman-in-venice.webp?b=1&s=170667a&w=0&k=20&c=5Td-yCCVm6yn06tUWhR2l7kUF487B7aM_eHH1RnqDu0=" alt="user avatar" height="220" width="220" loading="lazy" />
                  <p className="text-gray-600 md:text-xl"><span className="font-serif">"</span>I recently relocated to a new city and was overwhelmed by the rental market. Thankfully, I discovered this website, and it made all the difference. The user interface is clean and user-friendly, making it easy to navigate. I appreciated the variety of listings available and the detailed descriptions provided. Thanks to this platform, I found a beautiful home that fits my needs perfectly. I couldn't be happier with my decision!<span className="font-serif">"</span></p>
                  <div>
                    <h6 className="text-lg font-semibold leading-none">Emily Brown</h6>
                  </div>
                </div>
              </div>
            </div>

           

          </div>
        </div>

       

      </div>
    </div>
  );
};

export default PaymentSuccess;
