import React from 'react'
import img from '../assets/images/banquets/kareng-1.jpg'

const ListingView = () => {
  return (
    <div className='mx-auto w-full max-w-6xl px-6 flex items-center justify-between gap-[2%]'>
        <div className='max-w-[49%] p-5'>
            <div className='relative'>
                <div className='absolute z-10 border-2 border-primary w-full h-[60vh] top-5 left-5' />
                <img src={img} alt="" className='h-[50vh] w-auto object-cover object-center' />
            </div>
            <div className='bg-white relative z-20 p-5 -mt-[15%] -translate-x-5 border-t-2 border-s-2 border-t-primary border-s-primary'>
                <span className='font-script text-medium leading-tight font-normal text-dark'>Luit Banquet Hall</span>
                <h2 className='mt-3 text-4xl leading-tight text-dark'>A Throughtfull Setting to Meet and Gather</h2>
                <span className='max-w-xl text-dark/60 text-md'>Luit Banquet Hall features a well-lit interior, warm wood-panelled pillars and soft drapes. Its chair-and-head-table arrangement can provide a suitable setting for a meeting, presentation or gathering. Contact our team to discuss the layout and arrangements that may work for your event.</span>
            </div>
        </div>
    </div>
  )
}

export default ListingView
