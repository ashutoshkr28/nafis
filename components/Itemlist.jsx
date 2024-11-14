import { item_data } from '@/assets/assets'
import React from 'react'
import Item from './Item'

const Itemlist = () => {
  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button className='bg-black text-white py-1 px-4 rounded-sm'>All</button>
            <button>Model Paper</button>
            <button>Notes</button>
            <button>Latest Update</button>
            <button>Test Quiz</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {item_data.map((item)=> {
                return <Item image = {item.image} title = {item.title} description={item.description} category={item.category} />

            })}
        </div>
    </div>
  )
}

export default Itemlist
