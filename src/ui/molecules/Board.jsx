import { useState, useEffect } from "react";
import { Button } from "../atoms/Button";

import Card from "../atoms/Card";

const VISIBILITY_TIME = 1500;

const Board = ({ cards, handleShufle }) => {
  const [active, setActive] = useState([]);
  const [develed, setDeveled] = useState([]);
  useEffect(() => {
    if (active.length == 2) {
      if (cards[active[0]] === cards[active[1]]) {
        setDeveled([...develed, ...active]);
      }
      setTimeout(() => {
        setActive([]);
      }, VISIBILITY_TIME);
    }
  }, [active]);

  const handleClick = (number) => {
    if (develed.includes(number)) return false;
    if (active.length < 2) {
      if (!active.includes(number)) {
        setActive([...active, number]);
      }
    }
  };

  const resetGame = () => {
    handleShufle();
    setDeveled([]);
    setActive([]);
  };

  return (
    <>
      <div className="Board">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            number={card}
            position={idx}
            handleClick={handleClick}
            develed={develed.includes(idx)}
            active={active.includes(idx)}
          />
        ))}
      </div>
      {develed.length === cards.length ? (
        <div className="you-win">You win!</div>
      ) : null}
      <br />
      <div className="actions-bottom">
        <Button onClick={resetGame}>Reset game</Button>
      </div>
    </>
  );
};

export default Board;
