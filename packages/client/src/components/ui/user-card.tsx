import React from "react";
import "@/css/users.css";
import { useNavigate } from "react-router-dom";

interface CardProps {
  name: string;
  nickname: string;
}

const Card: React.FC<CardProps> = ({ name, nickname }) => {
  const id = name.split(" ").at(-1);
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate(`/users/${id}`);
        }}
      >
        <section className="card">
          <img src="/polo.jpg" alt="Polo" className="card-img" />
          <div className="card-text">{nickname}</div>
          <div className="card-title">
            <h3>{name}</h3>
          </div>
        </section>
      </button>
    </>
  );
};

export default Card;
