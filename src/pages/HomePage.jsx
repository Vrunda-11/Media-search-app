import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ResultGrid from '../components/ResultGrid'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import RandomMedia from '../components/RandomMedia'

const HomePage = () => {
    const { query } = useSelector((store) => store.search)

    return (
        <div className="w-full min-h-screen p-5">
            <SearchBar />
            
            {query !== '' ? (
                <div>
                    <div className="flex items-center justify-end">
                        <Link 
                            to="/collection" 
                            className="bg-[#ACB1D6] font-semibold uppercase text-white px-5 py-2 rounded hover:bg-[#8294C4] transition whitespace-nowrap"
                        >
                            View Collection
                        </Link>
                        <Tabs />
                    </div>
                    
                    <ResultGrid />
                </div>
            ) : (
                <div>
                    <div className="flex justify-end">
                        <Link 
                            to="/collection" 
                            className="bg-[#ACB1D6] text-white px-5 py-2 rounded hover:bg-[#8294C4] transition"
                        >
                            View Collection
                        </Link>
                    </div>
                    <RandomMedia />
                </div>
            )}
        </div>
    )
}

export default HomePage