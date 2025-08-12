import { useState } from "react";
import { Input } from "@/components/input";
import Modal from "@/components/Modal";
import { authStore } from "@/stores/auth";
import { useCreateMovie } from "@/hook/useMovies";

type Props = { open: boolean; onClose: () => void };

export default function MovieCreateModal({ open, onClose }: Props) {
  const userId = authStore((s) => s.user?.id ?? "");
  const { mutate, isPending, error } = useCreateMovie();

  const [title, setTitle] = useState("");
  const [originalTitle, setOriginalTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState<number | "">("");
  const [duration, setDuration] = useState<number | "">("");
  const [image, setImage] = useState<File | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!userId) return;
    mutate(
      {
        title,
        originalTitle,
        description,
        releaseDate,
        category,
        budget: budget === "" ? 0 : budget,
        duration: duration === "" ? 0 : duration,
        userId,
        image: image ?? undefined,
      },
      {
        onSuccess: () => {
          onClose();
          setTitle("");
          setOriginalTitle("");
          setDescription("");
          setReleaseDate("");
          setCategory("");
          setBudget("");
          setDuration("");
          setImage(null);
        },
      }
    );
  }

  return (
    <Modal open={open} onClose={onClose} title="Create Movie">
      <form className="space-y-4" onSubmit={onSubmit}>
        <Input
          label="Title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <Input
          label="Original Title"
          value={originalTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setOriginalTitle(e.target.value)
          }
        />

        <Input
          label="Description"
          placeholder="Short synopsis…"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Input
            label="Release date"
            type="date"
            value={releaseDate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setReleaseDate(e.target.value)
            }
          />
          <Input
            label="Category"
            value={category}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCategory(e.target.value)
            }
          />
          <Input
            label="Duration (min)"
            type="number"
            min={0}
            value={duration}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDuration(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
        </div>

        <Input
          label="Budget (USD)"
          type="number"
          min={0}
          value={budget}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBudget(e.target.value === "" ? "" : Number(e.target.value))
          }
        />

        <div>
          <label className="mb-1 block font-bold text-[#57576CFF]">
            Movie poster
          </label>
          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border file:border-gray-300 file:bg-white file:px-3 file:py-2 hover:file:bg-gray-50"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setImage(e.target.files?.[0] ?? null)
            }
          />
        </div>

        {error && (
          <p className="text-sm text-red-600 text-center">
            Something went wrong
          </p>
        )}

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-1/2 rounded-md border px-4 py-2 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isPending || !userId}
            className="w-1/2 rounded-md bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 disabled:opacity-60"
          >
            {isPending ? "Creating..." : "Create Movie"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
