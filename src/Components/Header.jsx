import React from 'react'
import { useTheme } from '../context/useTheme'
// Header component with dark/light mode toggle and save button
const Header = () => {
    const { dark, setDark } = useTheme()
// Debugging: Log the current theme state to verify it's working
    console.log("Context Change: ", dark)

    return (
        <header className={`flex flex-col md:flex-row justify-between items-center p-3 border-b border-orange-500 
            ${dark ? "bg-black text-white" : "bg-white text-black"}`}>

            {/* Logo Side */}
            <div className='text-center md:text-left mb-4 md:mb-0'>
                <h1 className='text-xl md:text-2xl font-semibold'>
                    <span className='text-orange-500'>Recipe</span> Craft
                </h1>
                <p className='text-sm md:text-base'>Discover & Save Recipes</p>
            </div>

            {/* Right Side */}
            <div className='flex gap-4 pr-7 items-center'>

                {/* Dark / Light Toggle Button */}
                <button
                    onClick={() => setDark(prev => !prev)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
                    ${dark 
                        ? "bg-white text-black hover:bg-gray-300" 
                        : "bg-black text-white hover:bg-gray-800"}`}
                >
                    {dark ? "Light" : "Dark"}
                </button>

                {/* Save Button */}
                <button
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all duration-300"
                >
                    Save
                </button>

            </div>
        </header>
    )
}
// Export the Header component as default
export default Header
