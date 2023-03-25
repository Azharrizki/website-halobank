import React from 'react'

const Button = ({ styles }) => {
  return (
    <button className={`font-poppins font-medium rounded-md text-[18px] text-primary py-4 px-6 bg-blue-gradient outline-none hover:scale-110 ease-out duration-300 ${styles}`} type="button">
      Get Started
    </button>
  )
}

export default Button