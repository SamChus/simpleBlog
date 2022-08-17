
import BlogList from "./blog-list";
import useFetch from "./useFetch";

const Home = () => {
  const {data: blogs, isPending, error} = useFetch("http://localhost:5000/blogs");
    
    return (  
       <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {blogs && <BlogList blogs={blogs}/>}
       </div>
    );
}
 
export default Home;