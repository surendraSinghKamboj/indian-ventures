import React from 'react';
import './Industries.css';
import {MdCarRepair} from 'react-icons/md';
import {FaShoppingCart} from 'react-icons/fa';
import {GiMedicines} from 'react-icons/gi'
import {GiTakeMyMoney} from 'react-icons/gi'
import {BiMovie} from 'react-icons/bi'

import {BsPersonWorkspace} from 'react-icons/bs'
import {MdOutlineHomeWork} from 'react-icons/md'
import {GiFactory} from 'react-icons/gi'
import {GrYoga} from 'react-icons/gr'
import {BsShop} from 'react-icons/bs'
import {SiYourtraveldottv} from 'react-icons/si'
import {GrCloudSoftware} from 'react-icons/gr'
import {FaSchool} from 'react-icons/fa'
 import {BsCurrencyBitcoin} from 'react-icons/bs'
import {MdDeliveryDining} from 'react-icons/md'

const Industries = () => {
  return (
    <div className='parent'>
        <h1 className=' text-center text-2xl font-bold '>Industries We Serve</h1>
        <p className='text-center parent pb-6'>Being a mobile app/wab development company, we have 
                  been fortunate in serving clients from different Industries.
                  Here is the list of industries for whom we have provide Mobile/Web app development service.
        </p>
        <div className='cards'>
            <div className='card'>
                 <MdCarRepair className='text-7xl' />
                <p>Automobile</p>
            </div> 
            <div className='card'>
                 <FaShoppingCart className='text-7xl' />
                <p>E-commerce</p>
            </div>
            <div className='card'>
                 <GiMedicines className='text-7xl' />
                <p>Pharma</p>
            </div>
            <div className='card'>
               <GiTakeMyMoney className='text-7xl'/>
                <p>Finance</p>
            </div>
            <div className='card'>
                 <BiMovie className='text-7xl' />
                <p>Entertainment</p>
            </div>
            <div className='card'>
                 <BsPersonWorkspace className=' text-7xl ' />
                <p>Professional</p>
            </div>
            <div className='card'>
                 <GiFactory className=' text-7xl ' />
                <p>Manufacturing</p>
            </div>
            <div className='card'>
                 <MdOutlineHomeWork className=' text-7xl ' />
                <p>Real State</p>
            </div>
            <div className='card'>
                 <GrYoga className=' text-7xl ' />
                <p>Health</p>
            </div>
            <div className='card'>
                 <BsShop className=' text-7xl ' />
                <p>Retail Industry</p>
            </div>
            <div className='card'>
                 <SiYourtraveldottv className=' text-7xl ' />
                <p>Tourism</p>
            </div>
            <div className='card'>
                 <GrCloudSoftware className=' text-7xl ' />
                <p>Software</p>
            </div>
            <div className='card'>
                 <FaSchool className=' text-7xl ' />
                <p>School</p>
            </div>
            <div className='card'>
                 <BsCurrencyBitcoin className=' text-7xl ' />
                <p>Crypto Currency</p>
            </div>
            <div className='card'>
                 <MdDeliveryDining className=' text-7xl ' />
                <p>Food Delivery</p>
            </div>
        </div>

    </div>
  )
}

export default Industries
