import { useQuery, keepPreviousData, useMutation } from "@tanstack/react-query";
import { getMovies, createMovieReq } from "@/service/movie";
import type { MoviesFilters, MoviePayload } from "@/Types/movie";

export function useMovies(filters: MoviesFilters) {
  return useQuery({
    queryKey: ["movies", filters],
    queryFn: () => getMovies(filters),
    placeholderData: keepPreviousData,
  });
}

export function useCreateMovie() {
  return useMutation({
    mutationFn: (payload: MoviePayload) => createMovieReq(payload),
  });
}
