import React from "react"
// import logo from "../../assets/images/logo.svg"
// import logo from "../../assets/images/beast.png"
import "./header.css"
// import  User  from "./User"
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Appstate } from "../../App"
const Header = () => {
  const useAppState = useContext(Appstate);
   window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  }) 
  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='text-xl'>
            {/* <img src={''} alt='logo' width='100px' onClick={()=>useAppState.setCatName('')}/> */}
            SECQR<span className="text-red-900">AI</span>SE
          </div>
         
          <div className='account flexCenter '>
            <div className="h-7 w-7 bg-green-600 m-1 text-center text-lg">{useAppState.user.noOfFemale}</div>
            <div className="h-7 w-7 bg-red-700 m-1 text-center text-lg">{useAppState.user.noOfMale}</div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;

