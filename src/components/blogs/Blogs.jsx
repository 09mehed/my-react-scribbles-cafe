import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id} handleToBookmark={handleToBookmark} handleMarkAsRead={handleMarkAsRead} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;