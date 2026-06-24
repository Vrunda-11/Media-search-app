import { useDispatch, useSelector } from "react-redux"
import { setActiveTabs } from "../redux/features/searchSlice"   

const Tabs = () => {
    const tabs = ['photos', 'videos', 'gif']

    const dispatch = useDispatch()

    const activeTab = useSelector((state)=>state.search.activeTab)

    return (
        <div className='flex gap-5 px-5 items-center justify-center rounded-full'>
            {tabs.map(function (elem, id) {
                return (
                    <button
                        className={`${(activeTab==elem?'bg-[#8294C4]':'bg-[#ACB1D6]')} transition cursor-pointer active:scale-95 text-white font-semibold px-5 py-2 rounded uppercase`}
                        key={id}
                        onClick={() => {
                            dispatch(setActiveTabs(elem))
                        }}
                    >
                        {elem}
                    </button>
                )
            })}
        </div>
    )
}

export default Tabs
