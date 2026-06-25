import { useSelector } from 'react-redux'
import ResultGrid from '../components/ResultGrid'
import SearchBar from '../components/SearchBar'
import SideBar from '../components/SideBar'
import Tabs from '../components/Tabs'
import RandomMedia from '../components/RandomMedia'

const HomePage = () => {
    const { query } = useSelector((store) => store.search)

    return (
        <div className="flex w-full min-h-screen bg-gray-50">
            <SideBar />

            <div className="flex-1 pl-20 p-5 space-y-4">
                <SearchBar />
                
                {query !== '' ? (
                    <div className="space-y-4">
                        <div className="flex items-center justify-end gap-4">
                            <Tabs />
                        </div>
                        <ResultGrid />
                    </div>
                ) : (
                    <div className="space-y-4">
                        <RandomMedia />
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage