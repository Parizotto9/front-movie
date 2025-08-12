import { useState } from "react";
import Movie from "@/components/Movie";
import { useMovies } from "@/hook/useMovies";
import Pagination from "@/components/Pagination";
import { Input } from "@/components/input";
import MovieCreateModal from "@/components/MovieCreateModal";

const Login = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [minDuration, setMinDuration] = useState(1);
  const [maxDuration, setMaxDuration] = useState(1000);
  const { data, isLoading, error } = useMovies({
    page,
    category,
    minDuration,
    maxDuration,
  });

  if (isLoading) return <div>Loading…</div>;
  if (error) return <div>Erro ao carregar</div>;

  return (
    <div className="min-h-screen ">
      <MovieCreateModal open={open} onClose={() => setOpen(false)} />
      <h2 className="text-2xl mt-2 font-bold text-[#57576CFF]">Filters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        <Input
          placeholder="Category"
          label="Category"
          value={category ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCategory(e.target.value || "")
          }
        />
        <Input
          type="number"
          label="Min duration"
          placeholder="Min duration"
          value={minDuration ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMinDuration(Number(e.target.value) || 0)
          }
        />

        <Input
          type="number"
          label="Max duration"
          placeholder="Max duration"
          value={maxDuration ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMaxDuration(Number(e.target.value) || 1000)
          }
        />
        <div className="flex flex-col justify-end">
          <button
            className="rounded-md bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
            onClick={() => setOpen(true)}
          >
            Create Movie
          </button>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(240px,1fr))] my-4">
        {data?.movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={Number(data?.totalPages)}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Login;
