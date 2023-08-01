import React from 'react';
import './Footer.css';
import Logo from "../../../assets/Logo.jpeg";
import {FaFacebook} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BiMap} from 'react-icons/bi';
import {BsTelephoneFill} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {AiFillLinkedin} from 'react-icons/ai'
import '../../../index.css' 

const Footer = () => {
  return (
    <div className='pb-11 pt-10 defBgClr'>
         <div className=' flex items-center justify-center flex-wrap gap-1'>
            <div className='dimensions'>
                <img src={Logo} alt="Company Logo" className=' h-16 rounded-md mt-8 ml-5 mb-8' />
                <p className=' ml-5 mr-4 text-xl defTextClr'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil voluptatem officiis accusantium quas autem est vitae obcaecati ipsum eligendi similique.
                </p>
            </div>
            <div className='dimensions'>
                <h1 className='mt-8 ml-5 text-3xl font-bold hover:text-blue-700 mb-8 defTextClr' >SERVICES</h1>
                 <h3 className=' ml-5 mr-4 text-xl hover:text-blue-700 mb-3 defTextClr'><a href="#">App Development</a></h3>
                 <h3 className=' ml-5 mr-4 text-xl hover:text-blue-700 mb-3 defTextClr'><a href="#">Web Developmant</a></h3>
                 <h3 className=' ml-5 mr-4 text-xl hover:text-blue-700 mb-3 defTextClr'><a href="#">Digital Marketing</a></h3>
                 <h3 className=' ml-5 mr-4 text-xl hover:text-blue-700 mb-3 defTextClr'><a href="#">Graphic Designing</a></h3>
            </div>
            <div className='dimensions'>
                 <h1 className='mt-8 ml-5 text-3xl font-bold  hover:text-blue-700 mb-8 defTextClr'>USEFULL LINKS</h1>
                 <h3 className=' ml-5 mr-4 text-xl hover:text-blue-700 mb-3 defTextClr'><a href="#">Your Account</a></h3>
                 <h3 className=' ml-5 mr-4 text-xl hover:text-blue-700 mb-3 defTextClr'><a href="#">About Us</a></h3>
                 <h3 className=' ml-5 mr-4 text-xl hover:text-blue-700 mb-3 defTextClr'><a href="#">FAQ's</a></h3>
                 <h3 className=' ml-5 mr-4 text-xl hover:text-blue-700 mb-3 defTextClr'><a href="#">Privacy Policy</a></h3>
                 <h3 className=' ml-5 mr-4 text-xl hover:text-blue-700 mb-3 defTextClr'><a href="#">Terms & Conditions</a></h3>
            </div>
            <div className='dimensions'>
                 <h1 className='mt-8 ml-5 text-3xl font-bold  hover:text-blue-700 mb-8 defTextClr'>CONTACT</h1>
                 <h3 className=' ml-5 mr-4 text-xl mb-3 flex items-center hover:text-blue-700 defTextClr'> <BiMap className='mr-2'/>Address</h3>
                 <h3 className=' ml-5 mr-4 text-xl mb-3 flex items-center hover:text-blue-700 defTextClr'><BsTelephoneFill className='mr-2'/> Phone</h3>
                 <h3 className=' ml-5 mr-4 text-xl mb-3 flex items-center hover:text-blue-700 defTextClr'><HiOutlineMail className='mr-2'/> Email</h3>
                 <h1 className='ml-5 mr-4 text-xl mt-5 font-bold defTextClr'>Follow Us</h1>
                 <div className='flex gap-5 ml-5 mt-5 '>
                    <a href="#"><FaFacebook className='hover:text-blue-500 defIconClr' style={{fontSize:"30px"}}/></a>
                    <a href="#"><FiInstagram className='hover:text-blue-500 defIconClr' style={{fontSize:"30px"}}/></a>
                    <a href="#"><AiOutlineTwitter className='hover:text-blue-500 defIconClr' style={{fontSize:"30px"}}/>
                    </a><a href="#"><AiFillLinkedin className='hover:text-blue-500 defIconClr' style={{fontSize:"30px"}}/></a>
                 </div>

            </div>
         </div>
    </div>
  )
}

export default Footer