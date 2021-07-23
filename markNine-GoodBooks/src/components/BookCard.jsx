import React from "react";

export default function BookCard({ book, stars, link }) {
  let star = [];
  for (let i = 0; i < stars && i < 5; i++) {
    star.push("⭐");
  }
  return (
    <div className="book-card">
      <h3>{book}</h3>
      {star} <a href={link}>View more</a>
    </div>
  );
}
