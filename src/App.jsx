// import { fetchGIFs, fetchPhotos, fetchVideos } from "./api/mediaApi"
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPages'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/collection' element={<CollectionPage/>}/>
      </Routes>
      <ToastContainer/>

    </div>
  )
}

export default App
