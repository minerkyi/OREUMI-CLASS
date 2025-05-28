import React, { useEffect, useState } from 'react';

export default function App2() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=5`);

      const images = await response.json();

      setData(images);
    };

    fetchData();
  }, [page]);

  return (
    <div>
      <h1>picsum images!</h1>
      <p>hello images</p>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.download_url} alt={item.author} style={{width: '300px', height: '200px'}} />
            </li>
          );
        })}
      </ul>
    </div>
  )
}
