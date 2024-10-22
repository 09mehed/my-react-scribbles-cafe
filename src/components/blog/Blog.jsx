import PropTypes from 'prop-types';
const Blog = ({blog, handleToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='pt-5'>
            <img className='w-full rounded-xl mt-8' src={cover} alt="" />
            <div className='flex justify-between mt-4'>
                <div className='flex gap-5'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleToBookmark(blog)} className='ml-2'><i className="fa-regular fa-bookmark"></i></button>
                </div>
            </div>
            <h2 className='mt-4 text-4xl font-bold'>{title}</h2>
            <p className='mt-4 font-semibold'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                } 
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='pt-3 text-purple-600 font-bold underline'><a href="">Mark as read</a></button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;