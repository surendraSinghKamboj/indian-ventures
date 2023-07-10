import React from 'react';
import './Industries.css';
import {MdCarRepair} from 'react-icons/md';
import {FaShoppingCart} from 'react-icons/fa';
import {GiMedicines} from 'react-icons/gi'
// import {FaMoneyBillTrendUp} from 'react-icons/fa'


const Industries = () => {
  return (
    <div className='parent'>
        <h1 className=' text-center text-2xl font-bold '>Industries We Serve</h1>
        <p className='text-center parent'>Being a mobile app/wab development company, we have 
                  been fortunate in serving clients from different Industries.
                  Here is the list of industries for whom we have provide Mobile/Web app development service.
        </p>
        <div className='cards'>
            <div className='card'>
                 <MdCarRepair className=' text-7xl ' />
                <p>Automobile</p>
            </div>
            <div className='card'>
                 <FaShoppingCart className=' text-7xl ' />
                <p>E-commerce</p>
            </div>
            <div className='card'>
                 <GiMedicines className=' text-7xl ' />
                <p>Pharma</p>
            </div>
            <div className='card'>
                 {/* <FaMoneyBillTrendUp className=' text-7xl '/> */}
                <p>Finance</p>
            </div>
            <div className='card'>
                 <MdCarRepair className=' text-7xl ' />
                <p>Entertainment</p>
            </div>
            <div className='card'>
                 <MdCarRepair className=' text-7xl ' />
                <p>Professional</p>
            </div>
            <div className='card'>
                 <MdCarRepair className=' text-7xl ' />
                <p>Manufacturing</p>
            </div>
            <div className='card'>
                 <MdCarRepair className=' text-7xl ' />
                <p>Real State</p>
            </div>
            <div className='card'>
                 <MdCarRepair className=' text-7xl ' />
                <p>Health</p>
            </div>
            <div className='card'>
                 <MdCarRepair className=' text-7xl ' />
                <p>Retail Industry</p>
            </div>
            <div className='card'>
                 <MdCarRepair className=' text-7xl ' />
                <p>Tourism</p>
            </div>
            <div className='card'>
                 <MdCarRepair className=' text-7xl ' />
                <p>Software</p>
            </div>
            <div className='card'>
                 <MdCarRepair className=' text-7xl ' />
                <p>School</p>
            </div>
            <div className='card'>
                 <MdCarRepair className=' text-7xl ' />
                <p>Crypto Currency</p>
            </div>
            <div className='card'>
                 <MdCarRepair className=' text-7xl ' />
                <p>Food Delivery</p>
            </div>
        </div>

    </div>
  )
}

export default Industries
