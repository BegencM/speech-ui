import React from "react";

interface IProps {
  image: string;
  onClick: () => void;
}

const MovieCard: React.FC<IProps> = (props) => {
  return (
    <img
      src={props.image}
      alt="movie"
      style={{
        width: "100%",
        height: "100px",
        objectFit: "cover",
      }}
      onClick={props.onClick}
    />
  );
};

export default MovieCard;
