
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGIFs } from '../api/mediaApi'
import { setLoading, setErrors, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {

    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    useEffect(function () {
        if (!query) return
        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = []
                if (activeTab == 'photos') {
                    let response = await fetchPhotos(query)                    
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url:item.links.html
                    }))
                }
                if (activeTab == 'videos') {
                    let response = await fetchVideos(query)
                    

                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url:item.url
                    }))
                }
                if (activeTab == 'gif') {
                    let response = await fetchGIFs(query);

                    data = response.data.map((item) => ({
                        id: item.id,
                        title: item.title || 'GIF',
                        type: 'gif',
                        thumbnail: item.images.fixed_width_small.url,
                        src: item.images.original.url,
                        url: item.url
                    }));
                }
                dispatch(setResults(data))

            } catch (err) {
                dispatch(setErrors(err.message))
            }
        }
        getData()
    }, [query, activeTab,dispatch])

    if (loading) {
        return <div className="p-10 text-center text-lg">Loading featured media...</div>
    }

    if (error) {
        return <div className="p-10 text-center text-red-600">{error}</div>
    }

    return (
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 p-4 [column-fill:balance]">
            {results.map((item, idx) => {
                return <div key={idx}>
                    <ResultCard item={item} />
                </div>
            })}
        </div>
    )
}

export default ResultGrid
