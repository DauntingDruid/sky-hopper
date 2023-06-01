import { useLottie } from "lottie-react";
import passportLottie from "../assets/lottie/passport.json";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BookingConfirmationPage = () => {
  const navigate = useNavigate();
  const passportAnimation = {
    animationData: passportLottie,
    loop: false,
  };
  const { View: passport } = useLottie(passportAnimation);

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col justify-between items-center h-screen w-screen">
        <div className="absolute z-0">{passport}</div>
        <div className="h-full w-full flex flex-col justify-between items-center z-10">
          <div className="h-1/3 flex flex-col justify-center items-center xs:px-4 text-4xl text-gray-600 ">
            <p>Your flight is booked and confirmed! </p>
            <p>We can't wait to serve you on board. Bon voyage!</p>
          </div>
          <div className="h-1/3 flex flex-col justify-center items-center xs:px-4 text-4xl text-gray-600 ">
            <button
              onClick={() => navigateHome()}
              className="w-fit h-fit p-3 rounded-3xl bg-blue-300 hover:bg-blue-400 active:bg-blue-500 transition-all duration-200 ease-in-out hover:scale-105 active:scale-95 "
            >
              Continue exploring
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingConfirmationPage;
