
import React, { useRef, useState } from "react";

export default function Filter({setFilter}) {
    const [toggle,setToggle] = useState(true);
    const hiden = useRef(null);
    const [form,setForm] = useState({
        Location:'',
        Gender: '',
        Date: ''
    });
    const hide =()=>{
        setToggle(!toggle);
      if(toggle)
      {
          hiden.current.style.display = 'block' 
      }
      else
      {
          hiden.current.style.display = 'none' 
      }
    }
    const filterApply =()=>{
        console.log('d',form.Date);
        setFilter({
            Location: form.Location,
            Gender : form.Gender,
            Date: form.Date
        })
        hide();
        
    }

    return (
        <div className="inline-flex bg-white border rounded-md">
            <div
               onClick={hide}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
            >
              <img className='h-8'  src='https://cdn-icons-png.flaticon.com/512/6590/6590958.png'/>      
            </div>

            <div className="relative mt-5">
                

                <div ref={ hiden} className="absolute hidden right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                    <div className="p-2">
                        <div
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Location
                            <div className="relative w-full lg:max-w-sm">
                            <select defaultValue={''} onChange={(e)=>setForm({...form,Location:e.target.value})}
                                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                            >
                                <option value={'Bangalore'}>Bangalore</option>
                                <option value={'Chennai'}>Chennai</option>
                                <option value={'Hyderabad'}>Hyderbad</option>
                                <option  value={''}>All</option>
                            </select>
                        </div>
                        </div>
                        <div
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Gender
                            <div className="relative w-full lg:max-w-sm">
                            <select defaultValue={''} onChange={(e)=>setForm({...form,Gender:e.target.value})}

                                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                            >
                                <option value={'Male'}>Male</option>
                                <option value={'Female'}>Female</option>
                                <option value={''}>All</option>
                            </select>
                        </div>
                        </div>
                        <div
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Date
                            <div className="relative w-full lg:max-w-sm mt-1">
                            <input type='date' onChange={(e)=>setForm({...form,Date:e.target.value})}/>
                            </div>
                        </div>
                        <div
                            className="flex justify-center text-center text-xl px-4 py-2 bg-blue-900 text-red-500 rounded-lg hover:bg-blue-950 hover:text-red-700"
                        >
                            <div
                             onClick={filterApply} 
                            className="relative w-full lg:max-w-sm mt-1">
                              Done
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    );
}