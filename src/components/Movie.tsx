import React from "react";
import type { MovieType } from "@/Types/movie";

interface MovieProps {
  movie: MovieType;
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div className="w-full max-w-[300px] rounded-xl bg-white shadow-lg overflow-hidden ">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-900">{movie.title}</h2>
        <p className="text-sm text-gray-500 italic">
          Original: {movie.originalTitle}
        </p>
        <p className="text-sm text-gray-600 line-clamp-3">
          {movie.description}
        </p>

        <div className="text-xs text-gray-500 space-y-1 mt-2">
          <p>
            <span className="font-medium">Release:</span>{" "}
            {new Date(movie.releaseDate).toLocaleDateString()}
          </p>
          <p>
            <span className="font-medium">Category:</span> {movie.category}
          </p>
          <p>
            <span className="font-medium">Duration:</span> {movie.duration} min
          </p>
          <p>
            <span className="font-medium">Budget:</span> $
            {movie.budget.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
