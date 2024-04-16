import './Header.css';

function Header({ isBingo }) {
  return (
    <div className="container">
      {isBingo ? (
        <h1 className="animated">BINGO BINGO BINGO!..</h1>
      ) : (
        <h1>BEST SUMMER BINGO!</h1>
      )}
    </div>
  );
}

export default Header;
