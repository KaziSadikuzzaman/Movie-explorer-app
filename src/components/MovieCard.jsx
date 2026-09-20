
function getYear(dateStr) {
  if (!dateStr) return "—";
  return new Date(dateStr).getFullYear();
}

function getInitials(name = "") {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}


const MovieCard = ({ movie, onSelect }) => {
    const poster = movie.image?.medium;
  const rating = movie.rating?.average;


  return (
    <div>
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-amber-500 bg-ink-800 shadow-card transition-transform duration-200 hover:-translate-y-1">
      <div className="relative w-full overflow-hidden bg-ink-700">
        {poster ? (
          <img
            src={poster}
            alt={`${movie.name} poster`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-3xl italic text-amber-500">
              {getInitials(movie.name)}
            </span>
          </div>
        )}

        {rating && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-ink-950/80 px-2.5 py-1 text-xs font-medium text-amber-500 backdrop-blur">
            ⭐ {rating}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-amber-600 leading-snug line-clamp-2">{movie.name}</h3>
        <p className="mt-1.5 text-xs text-lime-500">
          ⭐ {rating ?? "N/A"} &nbsp;•&nbsp; 📅 {getYear(movie.premiered)}
        </p>

        <button
          type="button"
          onClick={() => onSelect(movie)}
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-amber-400 py-2.5 text-sm font-medium text-lime-600 hover:bg-amber-500 hover:text-lime-700 transition-colors"
        >
          See Details
        </button>
      </div>
    </article>
    </div>
  )
}

export default MovieCard