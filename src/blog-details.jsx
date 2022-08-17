import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const {data: blogs, isPending, error} = useFetch("http://localhost:5000/blogs/" + id);
    const history = useHistory()

    const handleDelete = () => {
        
        fetch("http://localhost:5000/blogs/" + id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/')
        })
    }


    return ( 
        <div>
            {isPending && <div>Loading details....</div>}
            <h1>{blogs.title}</h1>
            <h5>{blogs.body}</h5> <br />
            <p>{blogs.author}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
 
export default BlogDetails;