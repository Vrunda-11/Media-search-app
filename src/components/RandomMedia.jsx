import { useEffect, useState } from 'react'
import { fetchPhotos, fetchVideos, fetchGIFs } from '../api/mediaApi'
import ResultCard from './ResultCard'

const randomQueries = [
  'nature',
  'space',
  'animals',
  'city',
  'travel',
  'food',
  'technology',
  'art',
  'ocean',
  'music',
  'dogs',
  'cats',
  'sweets',
  'discovery',
  'fruits',
  'books',
  'IT',
  'Coding',
  'Movie',
  'Hollywood Movies',
  'Harry Potter',
  'Horror',
  'series',
  'Asian',
]

const RandomMedia = () => {
  const [media, setMedia] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadRandomMedia = async () => {
      const query = randomQueries[Math.floor(Math.random() * randomQueries.length)]

      try {
        setLoading(true)
        setError(null)

        const [photoData, videoData, gifData] = await Promise.all([
          fetchPhotos(query, 1, 30), 
          fetchVideos(query, 50),
          fetchGIFs(query, 50),
        ])

        const items = []

        if (photoData?.results?.length) {
          items.push(
            ...photoData.results.slice(0, 30).map((item) => ({
              id: item.id,
              type: 'photo',
              title: item.alt_description || item.description || 'Photo',
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html,
            }))
          )
        }
        
        if (videoData?.videos?.length) {
          items.push(
            ...videoData.videos.slice(0, 50).map((item) => ({
              id: item.id,
              type: 'video',
              title: item.user.name || 'Video',
              thumbnail: item.image,
              src:
                item.video_files?.find((file) => file.quality === 'hd')?.link ||
                item.video_files?.[0]?.link ||
                '',
              url: item.url,
            }))
          )
        }

        if (gifData?.data?.length) {
          items.push(
            ...gifData.data.slice(0, 50).map((item) => ({
              id: item.id,
              type: 'gif',
              title: item.title || 'GIF',
              thumbnail: item.images.fixed_width_small.url,
              src: item.images.original.url,
              url: item.url,
            }))
          )
        }

        setMedia(items.sort(() => Math.random() - 0.5))
      } catch (err) {
        console.error(err)
        setError('Unable to load featured media. Please refresh the page.')
      } finally {
        setLoading(false)
      }
    }

    loadRandomMedia()
  }, [])

  if (loading) {
    return <div className="p-10 text-center text-lg">Loading featured media...</div>
  }

  if (error) {
    return <div className="p-10 text-center text-red-600">{error}</div>
  }

  return (
    <section className="px-10 py-6">
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 p-4 [column-fill:balance]">
        {media.map((item) => (
          <ResultCard key={`${item.id}-${item.type}`} item={item} />
        ))}
      </div>
    </section>
  )
}

export default RandomMedia