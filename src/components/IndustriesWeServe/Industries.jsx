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
import {TbYoga} from 'react-icons/tb'
import {BsShop} from 'react-icons/bs'
import {SiYourtraveldottv} from 'react-icons/si'
import {SiBmcsoftware} from 'react-icons/si'
import {FaSchool} from 'react-icons/fa'
 import {BsCurrencyBitcoin} from 'react-icons/bs'
import {MdDeliveryDining} from 'react-icons/md'

const Industries = () => {
  return (
    <div className='parent'>
        <h1 className=' text-center text-2xl font-bold textClrWhite '>Industries We Serve</h1>
        <p className='text-center parent pb-6 textClr'>Being a mobile app/wab development company, we have 
                  been fortunate in serving clients from different Industries.
                  Here is the list of industries for whom we have provide Mobile/Web app development service.
        </p>
        <div className='cards'>
            <div className='card boderBlack industriesIcon'>
                 <MdCarRepair className='text-7xl' />
                <p className='textClrWhite'>Automobile</p>
            </div> 
            <div className='card industriesIcon'>
                 <FaShoppingCart className='text-7xl' />
                <p className='textClrWhite'>E-commerce</p>
            </div>
            <div className='card industriesIcon'>
                 <GiMedicines className='text-7xl' />
                <p className='textClrWhite'>Pharma</p>
            </div>
            <div className='card industriesIcon'>
               <GiTakeMyMoney className='text-7xl'/>
                <p className='textClrWhite'>Finance</p>
            </div>
            <div className='card industriesIcon'>
                 <BiMovie className='text-7xl' />
                <p className='textClrWhite'>Entertainment</p>
            </div>
            <div className='card industriesIcon'>
                 <BsPersonWorkspace className='text-7xl' />
                <p className='textClrWhite'>Professional</p>
            </div>
            <div className='card industriesIcon'>
                 <GiFactory className='text-7xl' />
                <p className='textClrWhite'>Manufacturing</p>
            </div>
            <div className='card industriesIcon'>
                 <MdOutlineHomeWork className='text-7xl' />
                <p className='textClrWhite'>Real State</p>
            </div>
            <div className='card industriesIcon'>
                 <TbYoga className='text-7xl' />
                <p className='textClrWhite'>Health</p>
            </div>
            <div className='card industriesIcon'>
                 <BsShop className='text-7xl' />
                <p className='textClrWhite'>Retail Industry</p>
            </div>
            <div className='card industriesIcon'>
                 <SiYourtraveldottv className='text-7xl' />
                <p className='textClrWhite'>Tourism</p>
            </div>
            <div className='card industriesIcon'>
                 <SiBmcsoftware className='text-7xl' />
                <p className='textClrWhite'>Software</p>
            </div>
            <div className='card industriesIcon'>
                 <FaSchool className='text-7xl' />
                <p className='textClrWhite'>School</p>
            </div>
            <div className='card industriesIcon'>
                 <BsCurrencyBitcoin className='text-7xl' />
                <p className='textClrWhite'>Crypto Currency</p>
            </div>
            <div className='card industriesIcon'>
                 <MdDeliveryDining className='text-7xl' />
                <p className='textClrWhite'>Food Delivery</p>
            </div>
        </div>

    </div>
  )
}

export default Industries
