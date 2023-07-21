import { useState, useEffect } from "react";
import Fallback from "./Fallback";

const GeneralRick = ({ cardClicked }) => {
  const [data, setData] = useState({
    characterName: "",
    imageUrl: null,
  });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character/481",
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
      <div className="card" id="generalRick" onClick={cardClicked}>
        <img src={data.imageUrl} alt={data.characterName} />
        <p>{data.characterName}</p>
      </div>
    );
  } else {
    return (
      <div className="card" id="generalRick" onClick={cardClicked}>
        <Fallback />
      </div>
    );
  }
};

export default GeneralRick;
