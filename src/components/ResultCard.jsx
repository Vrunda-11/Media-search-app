import { Bookmark, ArrowDownToLine } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addCollection, addedToast } from '../redux/features/collectionSlice';

const ResultCard = ({ item }) => {
  const dispatch = useDispatch()

  const addToCollection = (item) => {
    dispatch(addCollection(item))
    dispatch(addedToast())
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(item.src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = item.title || `download.${item.type === 'video' ? 'mp4' : 'jpg'}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  }

  return (
    <div className="group relative w-full rounded-2xl overflow-hidden mb-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer z-0">
      
      <div className='opacity-0 group-hover:opacity-100 flex gap-2 absolute top-3 right-3 text-white drop-shadow-md z-20 transition-opacity duration-200'>
        <button type='button' onClick={() => addToCollection(item)}
          className='flex cursor-pointer items-center justify-center w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 transition-transform duration-200 hover:scale-110'>
          <Bookmark className="w-5 h-5" />
        </button>
        <button type='button' onClick={handleDownload} aria-label='Download'
          className='flex cursor-pointer items-center justify-center w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 transition-transform duration-200 hover:scale-110'>
          <ArrowDownToLine className="w-5 h-5" />
        </button>
      </div>

      <a target='_blank' rel="noreferrer" className='block w-full h-auto z-10' href={item.url}>
        {item.type === 'photo' && <img className="w-full h-auto block object-cover" src={item.src} alt="" />}
        {item.type === 'video' && <video className="w-full h-auto block object-cover" autoPlay muted loop src={item.src}></video>}
        {item.type === 'gif' && <img className="w-full h-auto block object-cover" src={item.src} alt="" />}
      </a>

      <div className='opacity-0 group-hover:opacity-100 flex justify-between gap-3 items-center w-full 
          px-4 py-4 absolute bottom-0 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-200 pointer-events-none z-20'>
        <h2 className='text-sm font-medium capitalize truncate w-full'>{item.title}</h2>
      </div>
    </div>
  )
}

export default ResultCard;