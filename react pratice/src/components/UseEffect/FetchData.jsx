import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data ,setData] = useState([]);

    useEffect(()=>{
        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            
            setData(data);
        }


        getData();
    },[])
  return (
    <div>
      <h1>First Post Title: </h1>
      {data.length >0 ? <h2>{data[0].title}</h2> : <h2>Loading.....</h2>}
    </div>
  )
}

export default FetchData
