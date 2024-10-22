import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/header'

function App() {
  const [bookmark, setBookmark] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleToBookmark = blog => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  }

  const handleMarkAsRead = (id, time) => {
      const newReadingTime = readingTime + time
      setReadingTime(newReadingTime);

      // remove the read blog
      // const remainingBookmarks = bookmark.filter()
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-5xl mx-auto'>
          <Blogs handleToBookmark={handleToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmark={bookmark} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
