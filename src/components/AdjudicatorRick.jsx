import { useState, useEffect } from "react";
import Fallback from "./Fallback";

const AdjudicatorRick = ({ cardClicked }) => {
  const [data, setData] = useState({
    characterName: "",
    imageUrl: "",
  });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character/8",
        );

        const data = await response.json();

        if (!data.error) {
          setData({
            characterName: data.name,
            imageUrl: data.image,
          });
        } else {
          throw new Error(data.error);
        }
      } catch (error) {
        setHasError(true);
      }
    };

    fetchData();
  }, []);

  if (hasError === false) {
    return (
      <div className="card" id="adjudicatorRick" onClick={cardClicked}>
        <img src={data.imageUrl} alt={data.characterName} />
        <p>{data.characterName}</p>
      </div>
    );
  } else {
    return (
      <div className="card" id="adjudicatorRick" onClick={cardClicked}>
        <Fallback />
      </div>
    );
  }
};

export default AdjudicatorRick;
