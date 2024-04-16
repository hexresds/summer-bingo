import React, { useState, useEffect } from 'react';

import Square from './Square';
import Header from './Header';
import Button from './Button';
import { summerActivities } from '../summerActivities';
import audioEffect from '../assets/effect.mp3';

import './Game.css';

function Game() {
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem('bingoHistory')) || [12]
  );
  const [matchedCombinations, setMatchedCombinations] = useState([]);
  const [isBingo, setIsBingo] = useState(false);

  const bingoAudio = new Audio(audioEffect);

  const handleClick = (number) => {
    const newHistory = [...history, number];
    setHistory(newHistory);
    setIsBingo(false);
    checkLine(newHistory);
  };

  const onResetGame = () => {
    setHistory([12]);
    window.location.reload(false);
  };

  const horizontalCombos = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
  ];

  const verticalCombos = [
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
  ];

  const diagonalCombos = [
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ];

  const checkLine = (history) => {
    horizontalCombos.forEach((combo) => {
      if (
        combo.every((num) => history.includes(num)) &&
        !matchedCombinations.some((prevCombo) =>
          prevCombo.every((num) => combo.includes(num))
        )
      ) {
        setMatchedCombinations([...matchedCombinations, combo]);
        setIsBingo(true);
        bingoAudio.play();
      }
    });

    verticalCombos.forEach((combo) => {
      if (
        combo.every((num) => history.includes(num)) &&
        !matchedCombinations.some((prevCombo) =>
          prevCombo.every((num) => combo.includes(num))
        )
      ) {
        setMatchedCombinations([...matchedCombinations, combo]);
        setIsBingo(true);
        bingoAudio.play();
      }
    });

    diagonalCombos.forEach((combo) => {
      if (
        combo.every((num) => history.includes(num)) &&
        !matchedCombinations.some((prevCombo) =>
          prevCombo.every((num) => combo.includes(num))
        )
      ) {
        setMatchedCombinations([...matchedCombinations, combo]);
        setIsBingo(true);
        bingoAudio.play();
      }
    });
  };

  useEffect(() => {
    localStorage.setItem('bingoHistory', JSON.stringify(history));
  }, [history]);

  return (
    <div className="container">
      <Header isBingo={isBingo} />
      <div className="board">
        {summerActivities.map((activity) => (
          <Square
            number={activity.id}
            text={activity.activity}
            onClick={handleClick}
            isSquareClicked={history.includes(activity.id)}
            url={activity.url}
          />
        ))}
      </div>
      <Button className="reset-button" onClick={onResetGame}>
        RESET BOARD
      </Button>
    </div>
  );
}

export default React.memo(Game);
