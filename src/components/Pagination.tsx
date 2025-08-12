type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: number[] = [];
  const start = Math.max(1, currentPage - 1);
  const end = Math.min(totalPages, currentPage + 1);

  if (start > 1) pages.push(1);
  for (let p = start; p <= end; p++) pages.push(p);
  if (end < totalPages) pages.push(totalPages);

  return (
    <nav className="flex items-center justify-center gap-2 text-sm">
      <button
        className="rounded px-3 py-2 border disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        Prev
      </button>

      {pages.map((p, i) => {
        const prev = i > 0 ? pages[i - 1] : null;
        const hasGap = prev !== null && p - (prev as number) > 1;

        return (
          <span key={`p-${p}-${i}`} className="flex items-center">
            {hasGap && <span className="px-2 select-none">…</span>}
            <button
              className={`rounded px-3 py-2 border ${
                p === currentPage
                  ? "bg-blue-500 text-white border-blue-500"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => onPageChange(p)}
              aria-current={p === currentPage ? "page" : undefined}
            >
              {p}
            </button>
          </span>
        );
      })}

      <button
        className="rounded px-3 py-2 border disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
}
