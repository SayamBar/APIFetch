import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const API = "https://jsonplaceholder.typicode.com";

function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState("")
  
  // using promises
  
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => setData(res.data))
  //   .catch((error) => setError(error.message))
  // },[])

  // using async await

  const getApiData = async(url) => {
    try {
      const res = await axios.get(url)
      setData(res.data);
    } catch(error) {
      setError(error.message);
    }
  };

  useEffect(() => { 
    getApiData(`${API}/posts`);
  },[])

  return (
    <>
      <h2>API</h2>
      {error != "" && <h2>{error}</h2>}
      {data.map((item, i) => {
        const {id,title,body} = item;
        return (
          <>
            <h2>{id}</h2>
            <h2>{title}</h2>
            <p>{body}</p>
          </>
        )
      })}
    </>
  )
}

export default App
