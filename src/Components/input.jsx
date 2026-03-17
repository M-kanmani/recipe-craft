import React from 'react'
// Input component for search functionality
const input = () => {
    return (
        <div className='relative w-100 mx-auto'>
            <input type="text" className='border border-orange-400 w-full outline-none px-5 pr-28 py-3 rounded-full' />
            <button className='bg-orange-500 px-5 py-1 rounded-full cursor-pointer absolute right-3 top-2'>Search</button>
        </div>
    )
}

export default input
