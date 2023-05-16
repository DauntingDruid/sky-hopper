import React, { useState } from 'react'

const SignupLoginCard = ({userType:string}) => {
  // useState for login or sign up
  // useState for client or admin

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rPassword, setrPassword] = useState('');


  return (
    <div className='flex justify-end items-end h-[90vh]'>
      {/* Card */}
        <div className=' w-1/2 h-full bg-[#62CDFF]'>
          {/* Header */}
          <div className='flex flex-col justify-center items-center h-[20%]'>
            <div>
              <div className='text-3xl text-white font-bold'>Hello!</div>
              <div className='text-3xl text-white font-bold'>We are glad to see you :)</div>
            </div>
            <div className='cursor-pointer flex justify-center items-center px-1 w-2/3 h-12 mt-4 rounded-full border-solid border-[1px] bg-[#5F9DF7] hover:bg-[#2f81fd] border-[#C9EEFF] transition-all duration-200 ease-linear'>
              <img className='w-8 h-8 mr-5' src='https://img.icons8.com/color/48/000000/google-logo.png' alt='google logo' />
              <div className=' cursor-pointer text-xl text-blue-700'>Sign up with Google</div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
              <div className='h-[1px] bg-[#dbeaff] w-1/3'/>
              <div className='w-24 text-white font-bold text-center'>Or</div>
              <div className='h-[1px] bg-[#dbeaff] w-1/3'/>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 h-[60%]">
            <div className='flex w-full h-full flex-col justify-center items-center'>
              <div className='text-2xl mb-5 text-white'>
                Name
              </div>
              <input className='bg-[#62CDFF] hover:scale-105 transition-all duration-200 ease-linear focus:transition-all focus:duration-200 focus:ease-linear focus:outline-blue-500 w-2/3 px-8 placeholder:text-white placeholder:text-opacity-50  h-16 text-white text-xl rounded-full border-solid border-2 border-[#C9EEFF]' type="text" name="name" placeholder='Name' />
            </div>
            <div className='flex w-full h-full flex-col justify-center items-center'>
              <div className='text-2xl mb-5 text-white'>
                Email
              </div>
              <input className='bg-[#62CDFF] hover:scale-105 transition-all duration-200 ease-linear focus:transition-all focus:duration-200 focus:ease-linear focus:outline-blue-500 w-2/3 px-8 placeholder:text-white placeholder:text-opacity-50  h-16 text-white text-xl rounded-full border-solid border-2 border-[#C9EEFF]' type="email" name="email" id="email" placeholder='email'/>
            </div>
            <div className='flex w-full h-full flex-col justify-center items-center'>
              <div className='text-2xl mb-5 text-white'>
                Password
              </div>
              <input className='bg-[#62CDFF] hover:scale-105 transition-all duration-200 ease-linear focus:transition-all focus:duration-200 focus:ease-linear focus:outline-blue-500 w-2/3 px-8 placeholder:text-white placeholder:text-opacity-50  h-16 text-white text-xl rounded-full border-solid border-2 border-[#C9EEFF]' type="password" name="password" id="password" placeholder='**********'/>
            </div>
            <div className='flex w-full h-full flex-col justify-center items-center'>
              <div className='text-2xl mb-5 text-white'>
                Repeat Password
              </div>
              <input className='bg-[#62CDFF] hover:scale-105 transition-all duration-200 ease-linear focus:transition-all focus:duration-200 focus:ease-linear focus:outline-blue-500 w-2/3 px-8 placeholder:text-white placeholder:text-opacity-50  h-16 text-white text-xl rounded-full border-solid border-2 border-[#C9EEFF]' type="password" name="rPassword" id="rPassword" placeholder='***********'/>
            </div>             
          </div>
          <div className='flex flex-col h-[20%] px-20'>
            <div className='cursor-pointer flex justify-center items-center px-1 w-1/3 h-12 mt-4 rounded-full border-solid border-[1px] bg-[#5F9DF7] hover:bg-[#2f81fd] border-[#C9EEFF] transition-all duration-200 ease-linear'>
              <div className=' cursor-pointer text-xl text-blue-700'>Sign Up</div>
            </div>
          </div>
        </div>
        {/* login info -> username, password */}
        {/* toggle */}
    </div>
  )
}


export default SignupLoginCard