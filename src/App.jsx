import { useState } from "react";
import GeneralRick from "./components/ GeneralRick";
import AdjudicatorRick from "./components/AdjudicatorRick";
import EvilRick from "./components/EvilRick";
import LongHairRick from "./components/LongHairRick";
import RickSanchez from "./components/RickSanchez";
import RickDSanchez from "./components/RickDSanchez";
import DoofusRick from "./components/DoofusRick";
import SealRick from "./components/SealRick";
import SpyRick from "./components/SpyRick";
import UnknownRick from "./components/UnknownRick";
import YoungRick from "./components/YoungRick";
import RickPrime from "./components/RickPrime";
import { v4 as uuidv4 } from "uuid";
import "./styles/App.css";
import "./styles/Cards.css";

const initialComponents = [
  { item: GeneralRick, id: uuidv4() },
  { item: AdjudicatorRick, id: uuidv4() },
  { item: EvilRick, id: uuidv4() },
  { item: LongHairRick, id: uuidv4() },
  { item: RickSanchez, id: uuidv4() },
  { item: RickDSanchez, id: uuidv4() },
  { item: DoofusRick, id: uuidv4() },
  { item: SealRick, id: uuidv4() },
  { item: SpyRick, id: uuidv4() },
  { item: UnknownRick, id: uuidv4() },
  { item: YoungRick, id: uuidv4() },
  { item: RickPrime, id: uuidv4() },
];

// remember to test is fetch is called only on mount

function App() {
  const [components, setComponents] = useState(initialComponents);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [characters, setCharacters] = useState([
    { name: "generalRick", hit: false },
    { name: "adjudicatorRick", hit: false },
    { name: "evilRick", hit: false },
    { name: "longHairRick", hit: false },
    { name: "rickSanchez", hit: false },
    { name: "rickDSanchez", hit: false },
    { name: "doofusRick", hit: false },
    { name: "sealRick", hit: false },
    { name: "spyRick", hit: false },
    { name: "unknownRick", hit: false },
    { name: "youngRick", hit: false },
    { name: "rickPrime", hit: false },
  ]);

  return (
    <div className="App">
      <div className="header">
        <div className="title">
          <p>
            FantasyHeroes
            <br /> <span>Memory Game</span>
          </p>
        </div>
        <div className="scoreBoard">
          <p>
            Score: <span>{score}</span> | Best Score: <span>{bestScore}</span>
          </p>
        </div>
      </div>
      <div className="mainSection">
        <div className="playGround">
          {components.map((obj) => {
            let Component = obj.item;
            let uniqueId = obj.id;

            return <Component key={uniqueId} />;
          })}
        </div>
      </div>
      <div className="footer">copyright @ FantasyHeroes</div>
    </div>
  );
}

export default App;
