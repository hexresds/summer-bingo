import './Button.css';

function Button({ onClick, children }) {
  return (
    <button className="reset-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
