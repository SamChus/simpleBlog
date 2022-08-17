import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {
  if (blogs === {}) return <p>Can't be empty</p>

  return (
    
    <div>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
              <h1>{blog.title}</h1>
              <p>{blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
