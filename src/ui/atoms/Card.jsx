const Card = ({ number, active, handleClick, position, develed }) => {
  return (
    <div
      className={`Card ${active ? "active" : ""} ${develed ? "develed" : ""}`}
      onClick={() => handleClick(position)}
    >
      <div className="Card__inner">
        <div className="Card__inner__front">?</div>
        <div className="Card__inner__back">
          <img src={`/images/${number}.png`} alt="image" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Card;
