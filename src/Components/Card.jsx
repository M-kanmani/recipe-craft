import React from 'react'
// Card component to display meal information
const Card = ({ meal }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
      {/* Image */}
      <div className="relative">
        <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal} 
          className="w-full h-48 sm:h-56 md:h-64 object-cover" 
        />
        {/* Overlay title on image */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-3">
          <h2 className="text-lg font-semibold">{meal.strMeal}</h2>
        </div>
      </div>

      {/* Optional description or info */}
      <div className="p-4">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {/* You can add meal category or instructions here if needed */}
          Delicious recipe to try at home!
        </p>
      </div>
    </div>
  )
}

export default Card
