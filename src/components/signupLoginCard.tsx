import React, { useEffect, useState } from "react";
import { useLottie } from "lottie-react";
import aeroplane from "../assets/flight-around-globe.json";
import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupLoginCard = ({ userType, selectedOption }) => {
  // console.log("selectedOption",selectedOption)
  const [isLogin, setIsLogin] = useState(selectedOption.login);
  const [isClient, setIsClient] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setrPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [isHidden2, setIsHidden2] = useState(true);
  const [signed, setSigned] = useState(false);
  const [buttonText, setButtonText] = useState("Sign up");
  const [buttonText2, setButtonText2] = useState("Login");
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignUpLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // console.log("LOGGED USER : ",user)
      navigate("/");
      toast("Logged in!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log("ERROR LOGGING : ", error);
    }
  };

  const handleLoginWithEmailPassword = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      // console.log("LOGGED USER : ",user)
      navigate("/");
      toast("Logged in!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log("ERROR LOGGING : ", error);
    }
  };

  const handleSignUpWithLoginPassword = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      // console.log("LOGGED USER : ",user)
      setIsLogin(false);
      setSigned(true);
    } catch (error) {
      console.log("ERROR LOGGING : ", error);
    }
  };

  const planeOptions = {
    animationData: aeroplane,
    loop: true,
  };
  const { View } = useLottie(planeOptions);

  const handleLoginSignup = () => {
    setIsLogin(!isLogin);
  };
  const handleClient = () => {
    setIsClient(!isClient);
  };

  const handleAdminLogin = () => {
    // check if admin is in db
    // if yes -> login
    // if no -> error
    // T0D0: let user login as this is demo
  };

  useEffect(() => {
    console.log("run");
    if (isLogin) {
      setButtonText("Sign up");
      setButtonText2("Login");
      setIsHidden(true);
      setSigned(false);
    } else {
      setButtonText("Login");
      setButtonText2("Sign up");
      setIsHidden(false);
    }
    if (isClient) {
      setIsHidden2(true);
    } else {
      setIsLogin(false);
      setIsHidden2(false);
    }
    clearData();
  }, [isClient, isLogin]);

  const clearData = () => {
    setName("");
    setEmail("");
    setPassword("");
    setrPassword("");
  };

  return (
    <>
      <div className="flex h-[95vh] bg-[#62CDFF]">
        {/* Card */}
        <div className="xs:w-0 w-1/3 h-full flex grow justify-center ">
          {View}
        </div>
        <div className="xs:w-full w-2/3 h-full">
          {/* Header */}
          <div className="flex w-full mt-2 items-center justify-center">
            {/* toggle client / admin */}
            <div
              onClick={() => handleClient()}
              className="flex w-40 h-8 justify-between border-solid border-2 rounded-full border-blue-400 bg-[#18b6ff]"
            >
              <div
                className={
                  isClient
                    ? "bg-blue-400 h-full w-full flex justify-center items-center rounded-full text-center text-white cursor-pointer transition-all duration-200 ease-linear"
                    : "h-full w-full flex justify-center items-center rounded-full text-center text-white cursor-pointer transition-all duration-200 ease-linear"
                }
              >
                Client
              </div>
              <div
                className={
                  !isClient
                    ? "bg-blue-400 h-full w-full flex justify-center items-center rounded-full text-center text-white cursor-pointer transition-all duration-200 ease-linear"
                    : "h-full w-full flex justify-center items-center rounded-full text-center text-white cursor-pointer transition-all duration-200 ease-linear"
                }
              >
                Admin
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-[20%]">
            <div>
              <div className="text-3xl text-white text-center font-bold">
                {signed ? `` : `Hello!`}
              </div>
              <div className="text-3xl text-white text-center font-bold">
                {signed
                  ? `Signed up successfully! Please login`
                  : `We are glad to see you :)`}{" "}
              </div>
            </div>
            {isHidden2 ? (
              <div
                onClick={handleGoogleSignUpLogin}
                className="cursor-pointer flex justify-center items-center px-1 w-2/3 h-12 mt-4 rounded-full border-solid border-[1px] bg-[#5F9DF7] hover:bg-[#2f81fd] border-[#C9EEFF] transition-all duration-200 ease-linear active:scale-90"
              >
                <img
                  className="w-8 h-8 mr-5"
                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                  alt="google logo"
                />
                <div className=" cursor-pointer text-xl text-blue-700">
                  {buttonText} with Google
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          {isHidden2 ? (
            <div className="flex justify-center items-center">
              <div className="h-[1px] bg-[#dbeaff] w-1/3" />
              <div className="w-24 text-white font-bold text-center">Or</div>
              <div className="h-[1px] bg-[#dbeaff] w-1/3" />
            </div>
          ) : (
            <></>
          )}
          <div className="grid grid-cols-2 grid-rows-2 h-[60%]">
            {isHidden ? (
              <div className="flex w-full h-full flex-col justify-center items-center">
                <div className="text-2xl mb-5 text-white">Name</div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="bg-[#62CDFF] hover:scale-105 transition-all duration-200 ease-linear focus:transition-all focus:duration-200 focus:ease-linear focus:outline-blue-500 w-2/3 px-8 placeholder:text-white placeholder:text-opacity-50  h-16 text-white text-xl rounded-full border-solid border-2 border-[#C9EEFF]"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                />
              </div>
            ) : (
              <></>
            )}
            <div className="flex w-full h-full flex-col justify-center items-center">
              <div className="text-2xl mb-5 text-white">Email</div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="bg-[#62CDFF] hover:scale-105 transition-all duration-200 ease-linear focus:transition-all focus:duration-200 focus:ease-linear focus:outline-blue-500 w-2/3 px-8 placeholder:text-white placeholder:text-opacity-50  h-16 text-white text-xl rounded-full border-solid border-2 border-[#C9EEFF]"
                type="email"
                name="email"
                id="email"
                placeholder="jhondoe@xyz.com"
              />
            </div>
            <div className="flex w-full h-full flex-col justify-center items-center">
              <div className="text-2xl mb-5 text-white">Password</div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="bg-[#62CDFF] hover:scale-105 transition-all duration-200 ease-linear focus:transition-all focus:duration-200 focus:ease-linear focus:outline-blue-500 w-2/3 px-8 placeholder:text-white placeholder:text-opacity-50  h-16 text-white text-xl rounded-full border-solid border-2 border-[#C9EEFF]"
                type="password"
                name="password"
                id="password"
                placeholder="**********"
              />
            </div>
            {isHidden ? (
              <div className="flex w-full h-full flex-col justify-center items-center">
                <div className="text-2xl mb-5 text-white">Repeat Password</div>
                <input
                  onChange={(e) => setrPassword(e.target.value)}
                  value={rPassword}
                  className="bg-[#62CDFF] hover:scale-105 transition-all duration-200 ease-linear focus:transition-all focus:duration-200 focus:ease-linear focus:outline-blue-500 w-2/3 px-8 placeholder:text-white placeholder:text-opacity-50  h-16 text-white text-xl rounded-full border-solid border-2 border-[#C9EEFF]"
                  type="password"
                  name="rPassword"
                  id="rPassword"
                  placeholder="***********"
                />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            onClick={() =>
              isLogin
                ? handleSignUpWithLoginPassword(email, password)
                : handleLoginWithEmailPassword(email, password)
            }
            className="flex px-16"
          >
            <div className="cursor-pointer ml-10 flex justify-center items-center px-2 w-1/3 h-12 rounded-full border-solid border-[1px] bg-[#5F9DF7] hover:bg-[#2f81fd] border-[#C9EEFF] transition-all duration-200 ease-linear">
              <div className=" cursor-pointer text-xl text-blue-700">
                {buttonText}
              </div>
            </div>
            {isHidden2 ? (
              <div className="flex flexrow ml-6 justify-center items-center">
                <div className=" text-white text-center font-bold">
                  Already have an account?
                </div>
                <div
                  onClick={() => handleLoginSignup()}
                  className="ml-2 hover:text-blue-500 active:scale-90 transition-all ease-in-out duration-50 cursor-pointer text-white text-center font-bold underline animate-pulse underline-offset-2"
                >
                  {buttonText2}
                </div>
              </div>
            ) : (
              <div className="flex flexrow ml-6 justify-center items-center">
                <div className=" text-white text-center font-bold">
                  Continue as
                </div>
                <div
                  onClick={() => handleAdminLogin()}
                  className="ml-2 hover:text-blue-500 active:scale-90 transition-all ease-in-out duration-50 cursor-pointer text-white text-center font-bold underline animate-pulse underline-offset-2"
                >
                  <Link
                    className="hover:scale-110 transition-all ease-in-out duration-300"
                    to={{ pathname: "/admin" }}
                  >
                    Guest
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupLoginCard;
