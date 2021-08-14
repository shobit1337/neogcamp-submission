import React from "react";

export default function BookCard({ book, stars, link, discription }) {
  let star = [];
  for (let i = 0; i < stars && i < 5; i++) {
    star.push("⭐");
  }
  return (
    <div className="book-card">
      <span className="card-heading">{book}</span>
      {star}
      <p>{discription}</p>
      <a href={link} target="_blank">
        View more
      </a>
    </div>
  );
}
