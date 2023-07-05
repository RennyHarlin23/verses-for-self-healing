function Card(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{`${props.chapter_name} ${props.chapter}:${props.verse}`}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
