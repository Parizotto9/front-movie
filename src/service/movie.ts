import { api } from "./api";
import type {
  MoviesFilters,
  MoviesResponse,
  MoviePayload,
} from "@/Types/movie";

export async function getMovies(filters: MoviesFilters) {
  const { data } = await api.get<MoviesResponse>("/movie/filter", {
    params: filters,
  });
  return data;
}

export async function createMovieReq(payload: MoviePayload) {
  const fd = new FormData();
  fd.append("title", payload.title);
  fd.append("originalTitle", payload.originalTitle);
  fd.append("description", payload.description);
  fd.append("releaseDate", payload.releaseDate);
  fd.append("category", payload.category);
  fd.append("budget", String(payload.budget));
  fd.append("duration", String(payload.duration));
  fd.append("userId", payload.userId);
  if (payload.image) {
    fd.append("image", payload.image);
  }
  const { data } = await api.post("/movie", fd);
  return data;
}
