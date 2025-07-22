import React from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosStats } from "react-icons/io";
import { GrCycle } from "react-icons/gr";
import { FaBox } from "react-icons/fa";
import LineGraph from '../global/LineGraph';

const Card = [
  {
    icon: <FaPeopleGroup />,
    total: "39,354",
    percent: "-4 %"
  },
  {
    icon: <FaBox />,
    total: "4,354",
    percent: "+24 %"
  },
  {
    icon: <IoIosStats />,
    total: "49,354",
    percent: "+38 %"
  },
  {
    icon: <GrCycle />,
    total: "39,354",
    percent: "-14 %"
  }
]

const Hero = () => {
  return (
    <div className=''>
      <div className='flex justify-center gap-12 bg-[#f9fcea] shadow-xl shadow-gray-200 mx-48 mt-1.5 rounded-2xl'>
        <div>
          <div className='m-10 text-center'>
            <p className='text-3xl text-gray-600'>Earnings</p>
            <p className='text-4xl'>$64,448.78</p>
          </div>
          <button className='bg-blue-900 p-3 ml-20 rounded-2xl hover:bg-blue-600 ease-in-out transition-all text-white font-bold'>
            Download
          </button>
        </div>
        <img src="Images/using-smartphone-woman.png" alt="image" className='h-65' />
      </div>
      <div className='flex justify-around p-4'>
        {Card.map((item, index) => (
          <div key={index} className='mt-7 bg-white p-4 rounded-lg shadow-md 
          w-60 h-20 flex justify-between px-10 items-center gap-4'>
            <div className='text-3xl'>{item.icon}</div>
            <div className='flex gap-2'>
              <p className='text-lg font-bold'>{item.total}</p>
              <p className={item.percent.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                {item.percent}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-10'>
        <div className='flex justify-between px-8'>

          <p className='text-3xl font-bold'>Revenue Updates</p>
          <div className='flex gap-2 items-center justify-center text-center text-xl'>
            <label htmlFor='Expense'>Expense</label>
            <input name='Expense' type="radio" />
            <label htmlFor='Budget'>Budget</label>
            <input name='budget' type="radio" />
          </div>
        </div>


        <div className='grid grid-cols-2 mt-10 mx-48'>
          <div className='pl-20 flex flex-col justify-center'>
            <span className='text-2xl font-bold h-20 p-4 w-30 '>
              <div className='flex gap-4 items-center'>
                <p className=''>$93,438</p>
                <p className='text-sm font-normal bg-green-600 rounded-[50%] p-1 '>23%</p>
              </div>
              <p className='text-sm font-light'>    Budget
              </p>
            </span>
            <span className='text-2xl font-bold h-20 p-4 w-30 mb-5'>
              <p>$43,438</p>
              <p className='text-sm font-light'>    Expense
              </p>
            </span>
            <LineGraph/>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero