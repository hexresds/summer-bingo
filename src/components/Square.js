import { useState } from 'react';

import './Square.css';

function Square({ number, onClick, text, url, isSquareClicked }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      key={number}
      onClick={() => onClick(number)}
      disabled={isSquareClicked}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`square ${isSquareClicked ? 'clicked' : ''}`}
    >
      {!isHovered ? <img src={url} alt="icon" /> : <h4>{text}</h4>}
    </button>
  );
}

export default Square;
