import React, { useEffect } from 'react';
import {Routes,Route} from 'react-router-dom';
import  Footer from "./components/footer/Footer"
import Header  from "./components/header/Header"
import Cards  from "./components/Cards"
import Add  from "./components/Add"
// import  Home  from "./pages/home/Home"
// import  Login  from "./pages/login/Login"
// import Register  from "./pages/login/Register"


import {createContext,useState} from 'react'
const Appstate = createContext();
const App = ()=>{
 
  const [user,setUser] = useState({
    noOfFemale:'0',
    noOfMale : '0'
  });
  useEffect(()=>{

   
    
  },[user])

  return (
   <Appstate.Provider value={{user,setUser}}>
        <div className='h-screen'>
            <Header />
        <Routes>
              <Route  path='/' element={<Cards/>} />
              <Route  path='/add' element={<Add/>} />
              {/* <Route  path='/login' element={<Login/>} /> */}
              {/* <Route  path='/register' element={<Register/>} /> */}
              {/* <Route  path='/create' element={<Create/>} /> */}
              {/* <Route  path='/my-posts' element={<MyPosts/>} /> */}
              {/* <Route  path='/about' element={<About/>} /> */}
              {/* <Route  path='/contact' element={<Contact/>} /> */}
          </Routes>

        </div>
   </Appstate.Provider>
  )
}

export {Appstate};

export default App;
