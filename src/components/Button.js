import './Button.css';

function Button({ onClick }) {
  return (
    <button className="reset-button" onClick={onClick}>
      RESET BOARD{' '}
    </button>
  );
}

export default Button;
