import MovieCard from "./MovieCard";


function CardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-lime-400 bg-ink-800">
      <div className="w-full animate-pulse bg-ink-700" />
      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 animate-pulse rounded bg-ink-700" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-ink-700" />
        <div className="h-9 w-full animate-pulse rounded-xl bg-ink-700" />
      </div>
    </div>
  );
}



const MovieGrid = ({ movies, loading, error, onSelect }) => {

    if (error) {
    return (
      <div className="rounded-2xl border border-lime-400 bg-crimson-500/5 px-6 py-10 text-center">
        <p className="font-display text-lg italic text-amber-400">Something went wrong</p>
        <p className="mt-2 text-sm text-amber-400">{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!movies.length) {
    return (
      <div className="rounded-2xl border border-lime-400 bg-ink-800 px-6 py-16 text-center">
        <p className="font-display text-xl italic">No titles found</p>
        <p className="mt-2 text-sm text-amber-400">
          Try a different title, or check the spelling and search again.
        </p>
      </div>
    );
  }




  return (
    <div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSelect={onSelect}></MovieCard>  
      ))}
    </div>
    </div>
  )
}

export default MovieGrid