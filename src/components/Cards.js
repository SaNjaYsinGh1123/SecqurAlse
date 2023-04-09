import { getDocs,query,where } from 'firebase/firestore';
import React, { useEffect, useState,useContext } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { movieRef } from '../firebase/firebase';
import Filter from '../components/Filter';
import {Appstate} from "../App"
const Cards = () => {
  const useAppstate = useContext(Appstate);
  const [data,setData] = useState([]);
  const [form,setForm] = useState({
    ID :'EVT0050',
    Name : 'Female01',
    Location: 'Bangalore',
    Date: '09-jan-23',
    Time: '13:32:13',
    Gender: 'Female'
  });
  const [imageUrl,setImageUrl] = useState('Female01.jpg');
   const [loading,setLoading] = useState(true);
   const [flag,setFlag] = useState(true);
   const [filter,setFilter] = useState({
      Location:'',
      Gender:'',
      Date:''
   })
   const setinfo = (e)=>{
    setImageUrl(`${e.Name}.jpg`);
    form.Name = e.Name;
    form.ID = e.ID;
    form.Location = e.Location;
    form.Date = e.Date;
    form.Time = e.Time;
    form.Gender = e.Gender;
   }
  useEffect(()=>{
     async function getData(){
      var countMale = 0,countFemale = 0;
      if(filter.Location == '' && filter.Gender == '' & filter.Date == '')
      {
       var q = query(movieRef);
      }
      else if(filter.Location !== '' && filter.Gender !== '' && filter.Date !== ''){

        var q = query(movieRef, where("Location", "==", filter.Location),where("Gender", "==", filter.Gender));
      }
      else if(filter.Location == '')
      {
        if(filter.Gender == '')
        {
          var q = query(movieRef,where("Date", "==", filter.Date));    
        }
        else{
          if(filter.Date == ''){

            var q = query(movieRef,where("Gender", "==", filter.Gender));    
          }
          else{

            var q = query(movieRef, where("Date", "==", filter.Date),where("Gender", "==", filter.Gender));
          }
        }
      }
      else if(filter.Gender == '')
      { 
          if(filter.Date == ''){

            var q = query(movieRef,where("Location", "==", filter.Location));    
          }
          else{
          var q = query(movieRef, where("Location", "==", filter.Location),where("Date", "==", filter.Date));

          }
          
        }else
        {
          var q = query(movieRef, where("Location", "==", filter.Location),where("Gender", "==", filter.Gender));
        }
             
        const dataFromfirebase = await getDocs(q);
        setData([]);
        dataFromfirebase.forEach((doc)=>{
            if(doc.data().Gender == 'Male'){
              countMale++;
            
            }
            else{
              countFemale++;
            }
            setData((previous)=> [...previous,{...(doc.data()),id: doc.id}]);
          });
        useAppstate.setUser({noOfFemale:countFemale,noOfMale:countMale});
        var count = countMale + countFemale;
        if(count === 0){
          setFlag(false)
        }
        else{
          setFlag(true)
        }  
        setLoading(false);
      }
      
     getData();
  },[filter]);
  return (
    <div className='flex flex-col w-full md:flex-row justify-between px-1 mt-2 h-5/6'>
       {loading ? <div className='w-full h-96 flex flex-col items-center'><ThreeDots color='blue' height={40} /></div>:
        
        <>
          <div className=' hidden  md:flex flex-col justify-between items-center p-1 h-full  bg-sky-400 w-1/12'>
             <div>
              <img  className='h-12' src={'../Images/berger.png'}/>
             </div>
            <div>
              <img  className='h-4 mb-4' src={'../Images/move.png'}/>
            </div>           
          </div>
          <div className='flex h-3/5 md:h-full w-full p-1 md:w-2/5'>
            <div className=''>
                  <div className='mb-1 '>
                  <h1>{form.ID}</h1>
                  <h3>Person Detected</h3>
                  </div>
                  <div className='mb-1 text-black'>
                    <p>Name: {form.Name}</p>
                    <p>Location: {form.Location} </p>
                    <p>Date: {form.Date} </p>
                    
                  </div>
                  <div className='mb-1'>
                    <p>Description</p>
                    <p>{form.Gender} detected at</p>
                    <p>{form.Location} on {form.Date}</p>    
                  </div>
            </div>
            <div className='h-full w-3/5 md:w-3/5'>
                  <p className='mb-1 h-8 flex text-center font-medium text-xl'>{form.Gender}</p>
                  <img src= {`../Images/${imageUrl}`}
                  alt='pic'
                  className='pi w-full'/>
             </div>
          </div>
          <div className='flex border-8 border-slate-300 md:w-2/5 w-full h-full flex-col'>
          <div className='flex h-16 w-full p-1 border-4 border-cyan-50 bg-slate-100'>
              <h1 className='font-bold text-xl pl-1'>Events</h1>
              <Filter setFilter ={setFilter}/>
            </div>
             <div className='overflow-y-scroll h-full no-scrollbar  w-full'>
                {flag ? (data.map((e,i)=>{
                    return (
                      <button key={i} className='w-full' onClick={()=>setinfo(e)}>
                      <div  className='flex flex-col text-sm md:text-lg h-18 w-full p-1 lg:px-2 border-4 border-cyan-50 bg-slate-300 focus:outline-none hover:bg-slate-400'>
                          <div className='flex justify-evenly  w-full'>
                            <div>{`${e.ID}: ${e.Location}`}</div>
                            <div>{`${e.Date}`}</div>
                          </div>
                          <div className='flex justify-start w-full'>
                             Person detected
                          </div>
                        </div>
                        </button>
                        )
                    }) ):
                    <img className='h-full' src='https://i.pinimg.com/564x/ac/70/60/ac70602b36fa577cd5e563a958cd6b7e.jpg'/>
                }     
             </div>            
          </div>
          
        </>
        
        }
       
    </div>
  )
}

export default Cards