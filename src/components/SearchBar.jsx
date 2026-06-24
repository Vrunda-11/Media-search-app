import { useState } from "react"
import { useDispatch } from "react-redux"
import { setQuery } from "../redux/features/searchSlice"
import { Search } from 'lucide-react';
const SearchBar = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) =>{
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
  }
  return (
    <div className=" flex p-5 space-x-5 font-semibold text-xl">
      <input 
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Search"
        type="text"
        className="relative p-2 w-full pl-6 border-2 bg-gray-300 border-none rounded-full outline-none" />
        <button 
          onClick={submitHandler}
          className="absolute right-15 align-middle text-gray-500 py-2 px-5 rounded active:scale-95 cursor-pointer">
            <Search />
        </button>
    </div> 
  )
}

export default SearchBar
