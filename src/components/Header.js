import './Header.css';

function Header({ isLineCompleted, isBingoCompleted }) {
  return (
    <div className="container">
      {isLineCompleted ? (
        <h1 className="animated">BINGO BINGO BINGO!..</h1>
      ) : (
        <h1>SUMMER BINGO!</h1>
      )}

      {isBingoCompleted ? (
        <h2>Congrats, you had the best summer ever!</h2>
      ) : (
        <h2>
          Click or tap on each activity you have completed this summer
        </h2>
      )}
    </div>
  );
}

export default Header;
