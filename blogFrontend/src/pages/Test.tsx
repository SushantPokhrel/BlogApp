import React, { useEffect } from 'react';
import axios from 'axios';
const Test: React.FC = () => {
  useEffect( ()=>{
 axios.get("http://localhost:8001/dashboard",{
  withCredentials:true
 }).then((res)=>{
  console.log(res)
 })
 .catch(e=>console.log(e))
  },[])
  return (
    <div>
      Test
    </div>
  );
}

export default Test;