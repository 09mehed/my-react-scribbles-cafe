import PropTypes from "prop-types";
import Bookmark from "../blog/bookmark/Bookmark";

const Bookmarks = ({bookmark, readingTime}) => {
    return (
        <div className="md: w-1/3 bg-gray-300 mt-16 ml-2">
            <div>
                <h3 className="text-3xl">Reading time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center"> Bookmarks: {bookmark.length}</h2>
            {
                bookmark.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;