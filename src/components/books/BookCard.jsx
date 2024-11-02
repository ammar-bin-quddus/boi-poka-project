import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { image, author, bookName, bookId, rating, category } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-red-100 w-96 shadow-xl p-6">
        <figure>
          <img src={image} className="h-80 w-[85%]" alt={bookName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating}{" "}
              <i className="fa-solid fa-star text-orange-400 text-xs"></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
