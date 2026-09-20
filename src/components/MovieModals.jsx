import { useEffect } from "react";


function formatDate(dateStr) {
  if (!dateStr) return "Unknown";
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}


const MovieModals = (movie, onClose) => {
   

    
    // close on Escape, lock background scroll while open
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!movie) return null;

  const backdropImg = movie.image?.original || movie.image?.medium;
  const rating = movie.rating?.average ?? "N/A";
  const genres = movie.genres?.length ? movie.genres.join(", ") : "Not specified";
  const network = movie.network?.name || movie.webChannel?.name || "Independent / streaming";
  const runtime = movie.runtime ? `${movie.runtime} min` : "N/A";

  





  return (
    <div>
        <div
      role="dialog"
      aria-modal="true"
      aria-label={`${movie.name} details`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-taupe-800 backdrop-blur-sm p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-lime-600 bg-taupe-950/40 shadow-card"
      >
        <button
          type="button"
           onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center cursor-pointer text-amber-500 hover:text-lime-600  transition-colors"
        >
          ✕
        </button>

        <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-ink-700">
          {backdropImg ? (
            <img
              src={backdropImg}
              alt={`${movie.name} backdrop`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-display text-4xl italic text-amber-500">{movie.name}</span>
            </div>
          )}
          <div className="absolute inset-0 from-ink-800 via-transparent to-transparent" />
        </div>

        <div className="p-6 sm:p-8">
          <h2 className="font-display text-2xl sm:text-3xl leading-tight">{movie.name}</h2>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-amber-400">
            <span>⭐ Rating: {rating}</span>
            <span>📅 Release: {formatDate(movie.premiered)}</span>
            <span>⏱ {runtime}</span>
          </div>

          <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl border border-lime-400 bg-ink-900 p-4 text-sm">
            <div>
              <dt className="text-amber-500">Genre</dt>
              <dd className="mt-1 text-lime-600">{genres}</dd>
            </div>
            <div>
              <dt className="text-amber-500">Network</dt>
              <dd className="mt-1 text-lime-600">{network}</dd>
            </div>
            <div>
              <dt className="text-amber-500">Status</dt>
              <dd className="mt-1 text-lime-600">{movie.status || "Unknown"}</dd>
            </div>
            <div>
              <dt className="text-amber-500">Language</dt>
              <dd className="mt-1 text-lime-600">{movie.language || "Unknown"}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-lime-600">Overview</h3>
            {movie.summary ? (
              <div
                className="summary-copy mt-2 text-sm leading-relaxed text-amber-500"
                dangerouslySetInnerHTML={{ __html: movie.summary }}
              />
            ) : (
              <p className="mt-2 text-sm text-amber-500">No overview available for this title.</p>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MovieModals