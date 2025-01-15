import React from "react";
import "./BookLayout.css";

const BookLayout = () => {
  return (
    <div className="book-container">
      <div className="book">
        <div className="page left">
          <p>
            Once upon a time in a magical forest, hidden away from the world,
            there existed a book filled with enchanting stories of adventure and
            mystery. Each page held a tale more captivating than the last.
          </p>
        </div>
        <div className="page right">
          <img
            src="https://via.placeholder.com/300x400.png?text=Magical+Scene"
            alt="Magical Scene"
            className="book-image"
          />
        </div>
      </div>
    </div>
  );
};

export default BookLayout;