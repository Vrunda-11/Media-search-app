import { useState } from "react"
import { useDispatch } from "react-redux"
import { setQuery } from "../redux/features/searchSlice"
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <form onSubmit={submitHandler} className="relative flex items-center p-5 font-semibold text-xl w-full">
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search"
        type="text"
        className="p-3 w-full pl-6 pr-14 bg-gray-200 rounded-full outline-none transition-colors focus:bg-gray-200/80 text-base" 
      />
      <button 
        type="submit"
        className="absolute right-8 text-gray-500 hover:text-black p-2 rounded-full active:scale-95 cursor-pointer flex items-center justify-center transition-transform"
      >
        <Search size={20} />
      </button>
    </form> 
  )
}

export default SearchBar;