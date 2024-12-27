import React, {  useEffect, useState } from "react";
import './App.css';
import Card from "./components/Card";

function App() {
  const [user,setUser] = useState(null);

  useEffect(()=>{
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
    .then((response)=>response.json())
    .then((data)=>{
      console.log("API Data:", data);
      setUser(data.results[0]);
    })
    .catch((error)=>console.log("Error Fetching Data :",error ));
  },[]);

  if(!user)return <div className="flex justify-center items-center h-screen"> Loading...</div>
  return (
   <Card user={user} />
  );
}

export default App;
