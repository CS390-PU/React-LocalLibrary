// export default function Category1() {
//   return (
//     <div>
//       <h1>Category I</h1>
//       <p>This is the content for Category I.</p>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('/api/')

      // axios.get(`${import.meta.env.VITE_API_BASE_URL}/`)

      // axios.get('https://vigilant-computing-machine-v7r4p7v54w7cj9x-3000.app.github.dev/')

      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Local Library Home</h1>
      <p>
        Welcome to LocalLibrary, a very basic Express website developed as a
        tutorial example on the Mozilla Developer Network.
      </p>
      <h2>Dynamic content</h2>
      <p>The library has the following record counts:</p>
      <ul>
        <li>Books: {data.bookCount}</li>
        <li>Copies: {data.bookInstanceCount}</li>
        <li>Copies available: {data.bookInstanceAvailableCount}</li>
        <li>Authors: {data.authorCount}</li>
        <li>Genres: {data.genreCount}</li>
      </ul>
    </div>
  );
}

export default Home;
