import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [addBlog, setAddBlog] = useState(false)
  const history = useHistory()

  const handleClick = (e) => {
    setAddBlog(true)
    e.preventDefault();
    const blog = {title, body, author}
    fetch("http://localhost:5000/blogs", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        setAddBlog(false)
        history.push('../')
    })
  }

  return (
    <div className="create">
      <label>Blog Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Blog Body:</label>
      <textarea
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <select
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      >
        <option value="Sam">Sam</option>
        <option value="Ada">Ada</option>
        <option value="Obinna">Obinna</option>
        <option value="Abuchi">Abuchi</option>
        <option value="Mavelous">Mavelous</option>
        <option value="Jokpa">Jokpa</option>
        <option value="Mario">Mario</option>
        <option value="Praise">Praise</option>
      </select>
      {addBlog && <button onClick={handleClick}>Adding blog.....</button> } 
      {!addBlog && <button onClick={handleClick}>Add blog</button> } 
     
    </div>
  );
};

export default Create;
