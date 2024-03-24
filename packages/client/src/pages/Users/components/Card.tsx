const Card = ({ name, nickname }) => {
  return (
    <>
      <section className="card">
        <img src="/polo.jpg" alt="Polo" className="card-img" />
        <div class="card-text">{nickname}</div>
        <div className="card-title">
          <h3>{name}</h3>
        </div>
      </section>
    </>
  );
};

export default Card;
