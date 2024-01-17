import React, { useContext } from 'react';
import { ImageContext } from "../../store/ImageContext";

const Image = ({ data }) => {
  const { setFavoriteList } = useContext(ImageContext);
  const handleFavorite = () => {
    setFavoriteList(data);
  };
  
  return (
    <div className="relative mb-6 before:content-[''] before:absolute before:inset-0">
      <div className="icon" onClick={handleFavorite}>
        {(data.isFav && data.isFav === true) ? (
          <svg
            className="h-8 w-8 text-red-500"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        ) : (
          <svg
            className="h-8 w-8 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        )}
      </div>
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img
          className="w-full shadow-md"
          src={data.urls.small}
          alt={data.alt_description}
        />
      </a>
    </div>
  );
};
export default Image;
