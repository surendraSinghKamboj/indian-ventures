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
            <div className='card boderBlack'>
                 <MdCarRepair className='text-7xl iconClr' />
                <p className='textClrWhite'>Automobile</p>
            </div> 
            <div className='card'>
                 <FaShoppingCart className='text-7xl iconClr' />
                <p className='textClrWhite'>E-commerce</p>
            </div>
            <div className='card'>
                 <GiMedicines className='text-7xl iconClr' />
                <p className='textClrWhite'>Pharma</p>
            </div>
            <div className='card'>
               <GiTakeMyMoney className='text-7xl iconClr'/>
                <p className='textClrWhite'>Finance</p>
            </div>
            <div className='card'>
                 <BiMovie className='text-7xl iconClr' />
                <p className='textClrWhite'>Entertainment</p>
            </div>
            <div className='card'>
                 <BsPersonWorkspace className='text-7xl iconClr' />
                <p className='textClrWhite'>Professional</p>
            </div>
            <div className='card'>
                 <GiFactory className='text-7xl iconClr' />
                <p className='textClrWhite'>Manufacturing</p>
            </div>
            <div className='card'>
                 <MdOutlineHomeWork className='text-7xl iconClr' />
                <p className='textClrWhite'>Real State</p>
            </div>
            <div className='card'>
                 <TbYoga className='text-7xl iconClr' />
                <p className='textClrWhite'>Health</p>
            </div>
            <div className='card'>
                 <BsShop className='text-7xl iconClr' />
                <p className='textClrWhite'>Retail Industry</p>
            </div>
            <div className='card'>
                 <SiYourtraveldottv className='text-7xl iconClr' />
                <p className='textClrWhite'>Tourism</p>
            </div>
            <div className='card'>
                 <SiBmcsoftware className='text-7xl iconClr' />
                <p className='textClrWhite'>Software</p>
            </div>
            <div className='card'>
                 <FaSchool className='text-7xl iconClr' />
                <p className='textClrWhite'>School</p>
            </div>
            <div className='card'>
                 <BsCurrencyBitcoin className='text-7xl iconClr' />
                <p className='textClrWhite'>Crypto Currency</p>
            </div>
            <div className='card'>
                 <MdDeliveryDining className='text-7xl iconClr' />
                <p className='textClrWhite'>Food Delivery</p>
            </div>
        </div>

    </div>
  )
}

export default Industries
