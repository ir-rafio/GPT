import React from "react";
import "@/css/users.css";

interface CardProps {
  name: string;
  nickname: string;
}

const Card: React.FC<CardProps> = ({ name, nickname }) => {
  return (
    <>
      <section className="card">
        <img src="/polo.jpg" alt="Polo" className="card-img" />
        <div className="card-text">{nickname}</div>
        <div className="card-title">
          <h3>{name}</h3>
        </div>
      </section>
    </>
  );
};

export default Card;
