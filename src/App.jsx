import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/1"
      );

      const data = await response.json();

      setData(data.image);
    };

    fetchData();
  }, []);

  return (
    <div>
      <img src={data} />
    </div>
  );
}

export default App;
