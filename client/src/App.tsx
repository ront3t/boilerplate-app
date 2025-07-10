import { useState, useEffect } from "react";
import API from "./api/api"

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await API.get('/');
        setMessage(response.data);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };

    fetchMessage();
  }, []);
  return (
    <>
      <h1> welcome!</h1>
      <p>{message}</p>
      <p>this is a boilerplate app</p>
      <p>you can use it to start your next project</p>
      <p>it has a server and a client</p>
      <p>the server is running on port 5000</p>
      <p>the client is running on port 5173</p>
    </>
  )
}

export default App
