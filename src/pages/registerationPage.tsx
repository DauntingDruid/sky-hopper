import React from "react";
import Footer from "../components/footer";
import SignUpCard from "../components/signupLoginCard";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const RegisterationPage = () => {
  // get the state from the link in navbar
  let { state } = useLocation();

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      className="flex-row justify-between w-screen h-screen"
    >
      <SignUpCard userType={"client"} selectedOption={state} />
      <Footer />
    </motion.div>
  );
};

export default RegisterationPage;
