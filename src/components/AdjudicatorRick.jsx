import { useState, useEffect } from "react";

const AdjudicatorRick = ({ cardClicked }) => {
  const [data, setData] = useState({
    characterName: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/8",
      );

      const data = await response.json();

      setData({
        characterName: data.name,
        imageUrl: data.image,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="card" id="adjudicatorRick" onClick={cardClicked}>
      <img src={data.imageUrl} alt={data.characterName} />
      <p>{data.characterName}</p>
    </div>
  );
};

export default AdjudicatorRick;
