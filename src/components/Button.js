function Button({ handleClick, text }) {
  return (
    <button className="btn btn-info btn-lg rounded-pill" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
