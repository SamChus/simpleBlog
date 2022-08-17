import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setBlogs] = useState("");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(true)
        });
    }, 1000);
  }, [url]);

  return {data, isPending, error}
}
export default useFetch;
