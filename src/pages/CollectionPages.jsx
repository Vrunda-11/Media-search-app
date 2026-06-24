import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from '../redux/features/collectionSlice'
import { Link } from "react-router-dom"

const CollectionPage = () => {
  const collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch()

  const clearAll = () => {
    dispatch(clearCollection())
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-8 rounded-4xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Collection</p>
              <h1 className="text-3xl font-semibold text-slate-900 mt-1">Saved Pins</h1>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={clearAll} 
                className="mt-2 shrink-0 inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-700 active:scale-95 cursor-pointer"
              >
                Clear Collection
              </button>
            </div>
          </div>
        </div>

        {collection.length > 0 ? (
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 p-4 [column-fill:balance]">
            {collection.map((item, idx) => (
              <div key={item.id ?? idx}>
                <CollectionCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-4xl border border-dashed border-slate-300 bg-white p-16 text-center text-slate-500 shadow-sm">
            <h2 className="text-3xl font-semibold">Collection is Empty</h2>
            <p className="m-3 text-slate-600">Add something from the home page search results to see it here.</p>

            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-700 active:scale-95"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default CollectionPage