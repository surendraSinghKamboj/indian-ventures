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
    <div className='pb-11'>
         <div className=' flex items-center justify-center flex-wrap mt-14 gap-1'>
            <div className='dimensions textClr'>
                <img src={Logo} alt="Company Logo" className=' h-16 rounded-md mt-8 ml-5 mb-8' />
                <p className=' ml-5 mr-4 text-xl'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil voluptatem officiis accusantium quas autem est vitae obcaecati ipsum eligendi similique.
                </p>
            </div>
            <div className='dimensions'>
                <h1 className='mt-8 ml-5 text-3xl font-bold hover:underline mb-8 headClr ' >SERVICES</h1>
                 <h3 className=' ml-5 mr-4 text-xl hover:underline mb-3 textClr'><a href="#">App Development</a></h3>
                 <h3 className=' ml-5 mr-4 text-xl hover:underline mb-3 textClr'><a href="#">Web Developmant</a></h3>
                 <h3 className=' ml-5 mr-4 text-xl hover:underline mb-3 textClr'><a href="#">Digital Marketing</a></h3>
                 <h3 className=' ml-5 mr-4 text-xl hover:underline mb-3 textClr'><a href="#">Graphic Designing</a></h3>
            </div>
            <div className='dimensions'>
                 <h1 className='mt-8 ml-5 text-3xl font-bold hover:underline mb-8 headClr'>USEFULL LINKS</h1>
                 <h3 className=' ml-5 mr-4 text-xl hover:underline mb-3 textClr'><a href="#">Your Account</a></h3>
                 <h3 className=' ml-5 mr-4 text-xl hover:underline mb-3 textClr'><a href="#">About Us</a></h3>
                 <h3 className=' ml-5 mr-4 text-xl hover:underline mb-3 textClr'><a href="#">FAQ's</a></h3>
                 <h3 className=' ml-5 mr-4 text-xl hover:underline mb-3 textClr'><a href="#">Privacy Policy</a></h3>
                 <h3 className=' ml-5 mr-4 text-xl hover:underline mb-3 textClr'><a href="#">Terms & Conditions</a></h3>
            </div>
            <div className='dimensions'>
                 <h1 className='mt-8 ml-5 text-3xl font-bold hover:underline mb-8 headClr'>CONTACT</h1>
                 <h3 className=' ml-5 mr-4 text-xl mb-3 flex items-center textClr'> <BiMap className='mr-2'/>Address</h3>
                 <h3 className=' ml-5 mr-4 text-xl mb-3 flex items-center textClr'><BsTelephoneFill className='mr-2'/> Phone</h3>
                 <h3 className=' ml-5 mr-4 text-xl mb-3 flex items-center textClr'><HiOutlineMail className='mr-2'/> Email</h3>
                 <h1 className='ml-5 mr-4 text-xl mt-5 font-bold headClr'>Follow Us</h1>
                 <div className='flex gap-5 ml-5 mt-5 textClr'>
                    <a href="#"><FaFacebook style={{fontSize:"30px"}}/></a>
                    <a href="#"><FiInstagram style={{fontSize:"30px"}}/></a>
                    <a href="#"><AiOutlineTwitter style={{fontSize:"30px"}}/>
                    </a><a href="#"><AiFillLinkedin style={{fontSize:"30px"}}/></a>
                 </div>

            </div>
         </div>
    </div>
  )
}

export default Footer
