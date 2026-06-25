import { useDispatch } from 'react-redux';
import { Trash2 } from 'lucide-react'
import { removeCollection, removeToast } from '../redux/features/collectionSlice';

const CollectionCard = ({ item }) => {
    const dispatch = useDispatch()

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }

    return (
        <article className="group relative w-full rounded-2xl overflow-hidden mb-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer bg-slate-50 z-0">
            
            <div className="opacity-0 group-hover:opacity-100 flex gap-2 absolute top-3 right-3 text-white drop-shadow-md z-20 transition-opacity duration-200">
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        removeFromCollection(item);
                    }}
                    aria-label="Remove from collection"
                    className="flex cursor-pointer items-center justify-center w-9 h-9 rounded-full bg-black/50 hover:bg-red-600 transition-all duration-200 hover:scale-110 text-white"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            <a target="_blank" rel="noreferrer" className="block w-full h-auto z-10" href={item.url}>
                {item.type === 'photo' && (
                    <img className="w-full h-auto block object-cover" src={item.src} alt={item.title || ''} />
                )}
                {item.type === 'video' && (
                    <video className="w-full h-auto block object-cover" autoPlay loop muted src={item.src}></video>
                )}
                {item.type === 'gif' && (
                    <img className="w-full h-auto block object-cover" src={item.src} alt={item.title || ''} />
                )}
            </a>

            <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-end gap-1 items-start w-full px-4 py-4 absolute bottom-0 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-200 pointer-events-none z-20">
                <h2 className="text-sm font-medium capitalize truncate w-full">
                    {item.title || `Untitled ${item.type}`}
                </h2>
            </div>
        </article>
    )
}

export default CollectionCard