import React, { useEffect, useState } from 'react'
import { useTheme } from '../context/useTheme'
import Card from './Card'
import axios from 'axios'
import { supabase } from "../supabase";

const MainPage = () => {
  const { dark } = useTheme()
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchMeals()
  }, [])

  const fetchMeals = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
      )
      setMeals(response.data.meals || [])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const searchMeal = async (e) => {
    e.preventDefault()
    if (!search) return

    setLoading(true)

    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      )

      setMeals(res.data.meals || [])

      // 🔥 Save search term to Supabase
      const { error } = await supabase
        .from("search_history")
        .insert([{ food_name: search }])

      if (error) {
        console.log("Insert Error:", error)
      } else {
        console.log("Saved to Supabase ✅")
      }

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
      setSearch("")
    }
  }

  return (
    <div className={`min-h-screen w-screen text-center transition-all duration-300 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>

      {/* Title */}
      <div className='py-12'>
        <h1 className='text-5xl font-semibold'>
          <span className='text-orange-500'>The</span> Recipe Craft
        </h1>
        <p className={`${dark ? "text-gray-400" : "text-gray-600"} text-xl mt-5`}>
          Search Your Favourite Meal
        </p>
      </div>

      {/* Search Section */}
      <form onSubmit={searchMeal} className='relative w-96 mx-auto'>
        <input
          value={search}
          placeholder='Search Your Meal [Ex: Burger]'
          onChange={(e) => setSearch(e.target.value)}
          name='search'
          type="text"
          className={`border border-orange-400 w-full outline-none px-5 pr-28 py-3 rounded-full transition-all duration-300
          ${dark 
            ? "bg-black text-white placeholder-gray-400 caret-white" 
            : "bg-white text-black placeholder-gray-500 caret-black"}`}
        />
        <button
          type="submit"
          className='bg-orange-500 px-5 py-2 rounded-full cursor-pointer absolute right-2 top-1 text-white hover:scale-105 transition-all duration-200'
        >
          Search
        </button>
      </form>

      {/* Meals Section */}
      <div className='mt-12 mx-auto'>
        {loading && (
          <p className='text-center text-lg'>Loading....</p>
        )}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-12'>
          {!loading && meals.map((meal) => (
            <Card key={meal.idMeal} meal={meal} dark={dark} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainPage
