import { useState, useEffect } from "react";

import Board from "./ui/molecules/Board";
import Title from "./ui/atoms/Title";

import "./App.scss";

const availableCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const initialCards = [...availableCards, ...availableCards];

// Fisher-Yates
function shuffleArray(inputArray) {
  for (var i = inputArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
  }
  return [...inputArray];
}

const App = () => {
  const [cards, setCards] = useState(initialCards);

  const handleShufle = () => {
    setCards(shuffleArray(cards));
  };

  useEffect(() => {
    setCards(shuffleArray(cards));
  }, []);

  return (
    <div id="App">
      <Title>
        <span>Ani</span>memory
      </Title>
      <Board cards={cards} handleShufle={handleShufle} />
    </div>
  );
};

export default App;
