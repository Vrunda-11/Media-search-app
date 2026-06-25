# Media Search & Collection Manager

A modern React application that allows users to search and save media content from multiple sources (photos, videos, and GIFs) with persistent collection management.

## ✨ Features

- **Multi-Source Media Search**
  - Search photos from Unsplash
  - Search videos from Pexels
  - Search GIFs from Giphy
  - Switch between sources with tab interface

- **Collection Management**
  - Add media to personal collection
  - Remove items from collection
  - Persistent storage with localStorage
  - View all saved media on collection page

- **User Experience**
  - Real-time search with loading states
  - Toast notifications for user actions
  - Responsive design with Tailwind CSS
  - Clean and intuitive UI

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Routing:** React Router v7
- **HTTP Client:** Axios
- **Icons:** Lucide React, React Icons
- **Notifications:** React Toastify
- **Linting:** ESLint

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- API keys for:
  - [Unsplash API](https://unsplash.com/developers)
  - [Pexels API](https://www.pexels.com/api/)
  - [Giphy API](https://developers.giphy.com/)

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/media-search-collection.git
   cd media-search-collection
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   VITE_UNPLASH_KEY=your_unsplash_api_key
   VITE_PEXELS_KEY=your_pexels_api_key
   VITE_GIPHY_KEY=your_giphy_api_key
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📂 Project Structure

```
src/
├── api/
│   └── mediaApi.js           # API calls to external services
├── components/
│   ├── CollectionCard.jsx    # Collection item card
│   ├── RandomMedia.jsx       # Random media display
│   ├── ResultCard.jsx        # Search result card
│   ├── ResultGrid.jsx        # Grid layout for results
│   ├── SearchBar.jsx         # Search input component
|   ├── SideBar.jsx           # Side Bar component
│   └── Tabs.jsx              # Tab navigation
├── pages/
│   ├── HomePage.jsx          # Main search page
│   └── CollectionPages.jsx   # Collection view page
├── redux/
│   ├── store.js              # Redux store configuration
│   └── features/
│       ├── searchSlice.js    # Search state management
│       └── collectionSlice.js # Collection state management
├── App.jsx                   # Main app component
├── main.jsx                  # Entry point
└── index.css                 # Global styles
```

## 🎯 Usage

1. **Search Media**
   - Navigate to the home page
   - Enter your search query in the search bar
   - Switch between Photos, Videos, and GIFs tabs
   - Results will appear in a grid layout

2. **Add to Collection**
   - Click the "Add" button on any media card
   - You'll see a success notification
   - Item is automatically saved to localStorage

3. **View Collection**
   - Click on the Collection page/link
   - See all your saved media items
   - Click "Remove" to delete items from collection

## 🔧 Redux State Management

### Search Slice

- `query` - Current search query
- `activeTab` - Selected media type (photos, videos, gifs)
- `results` - Array of search results
- `loading` - Loading state during API calls
- `error` - Error messages if search fails

### Collection Slice

- `items` - Array of saved media items
- Actions: `addCollection`, `removeCollection`, `clearCollection`
- Data persists in localStorage

## 🌐 API Integration

The app integrates with three major media APIs:

| API      | Purpose | Endpoint                                 |
| -------- | ------- | ---------------------------------------- |
| Unsplash | Photos  | `https://api.unsplash.com/search/photos` |
| Pexels   | Videos  | `https://api.pexels.com/videos/search`   |
| Giphy    | GIFs    | `https://api.giphy.com/v1/gifs/search`   |

## 🎨 Styling

The project uses Tailwind CSS for styling with a responsive design that works on:

- Desktop
- Tablet
- Mobile devices

## 💾 Data Persistence

Collections are automatically saved to the browser's localStorage, ensuring data persists across browser sessions. The data is stored as JSON and automatically parsed when the app loads.

## 🐛 Error Handling

- API errors are caught and logged to console
- User-friendly error messages via toast notifications
- Loading states prevent multiple simultaneous requests
- Null/undefined checks for API responses

## 🚀 Future Enhancements

- [ ] User authentication
- [ ] Cloud storage for collections
- [ ] Filter and sort options
- [ ] Advanced search with tags
- [ ] Export collection functionality
- [ ] Dark mode toggle
- [ ] Social sharing
- [ ] Favorites feature
- [ ] Search history

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

Created as a React & Redux learning project.

## 🤝 Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

**Happy Searching! 🎬📸**
