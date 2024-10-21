import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/header'

function App() {
  const [bookmark, setBookmark] = useState([])

  const handleToBookmark = blog => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-5xl mx-auto'>
          <Blogs handleToBookmark={handleToBookmark}></Blogs>
          <Bookmarks bookmark={bookmark}></Bookmarks>
      </div>
    </>
  )
}

export default App
