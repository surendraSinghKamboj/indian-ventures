import React, { useState } from "react";
import '../index.css';


const Contact = () => {
    const [input,setInput] = useState({
        email:"",
        password:"",
        message:""
    });
    const inputChange= (event)=>{
        setInput({...input,[event.target.name]:event.target.value});
    }
    const HandleData = () =>{
        console.log(input);
    }
    
  return (
    <div className="bgClr">
     <hr/>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-col text-center w-full mb-3">
            <h1 className="sm:text-6xl text-2xl font-medium title-font mb-4 text-blue-600">
              Contact Us
            </h1>  
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto border-2 md:p-10 xl:p-16 p-2 bg-slate-300 rounded-xl">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600 headClr">
                    Name
                  </label>
                  <input
                    onChange={inputChange}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600 headClr">
                    Email
                  </label>
                  <input
                    onChange={inputChange}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600 headClr">
                    Message
                  </label>
                  <textarea
                    onChange={inputChange}
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={HandleData} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
              </div>
               
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;



