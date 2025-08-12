export type MovieType = {
  id: string;
  title: string;
  description: string;
  releaseDate: string;
  category: string;
  imageUrl: string;
  originalTitle: string;
  budget: number;
  duration: number;
};

export type MoviesFilters = {
  page?: number;
  category?: string;
  minDuration?: number;
  maxDuration?: number;
};

export type MoviesResponse = {
  movies: MovieType[];
  totalPages: number;
};

export type MoviePayload = {
  title: string;
  originalTitle: string;
  description: string;
  releaseDate: string;
  category: string;
  budget: number;
  duration: number;
  userId: string;
  image: File | undefined;
};
