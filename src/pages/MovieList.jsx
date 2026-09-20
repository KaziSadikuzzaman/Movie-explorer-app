import { useCallback, useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid.jsx";
import MovieModals from "../components/MovieModals.jsx";
import { getMovies, searchShows } from "../services/get-movie.js";
import { NavLink } from "react-router";
import { Search, X } from 'lucide-react';



const MovieList = ({ onSearch, initialValue = "" }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const handle = setTimeout(() => {
      onSearch(value.trim());
    }, 350);
    return () => clearTimeout(handle);
  }, [value, onSearch]);
 

  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);


  
  

  
  // initial browse list
  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await getMovies();
        if (!cancelled) {
          setAllMovies(data);
          setMovies(data);
        }
      } catch (error) {
        if (!cancelled) setError(error.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  // handle search queries 
  const handleSearch = useCallback(
    async (term) => {
      setQuery(term);

      if (!term) {
        setMovies(allMovies);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const results = await searchShows(term);
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
    [allMovies]
  );

  return (

<div>
  
    <header className="sticky top-0 z-40 border-b bg-taupe-800 backdrop-blur">
        <div className="max-w-content mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        
            <span className="font-display text-lg text-amber-300 tracking-tight">
            Movie<span className="italic text-lime-500">Explorer</span>
          </span>
            <nav className="flex items-center gap-6 text-lime-500">
          <NavLink to="/" >
            Home
            </NavLink>  
            </nav>
        </div>
    </header>
  

    <div className=" flex relative overflow-hidden p-5 gap-5"
      style={{
          background:
            "radial-gradient(60% 60% at 80% 10%, rgba(193,68,58,0.20), transparent 60%), radial-gradient(50% 50% at 15% 90%, rgba(227,178,60,0.14), transparent 60%), linear-gradient(180deg, #0B0D12 0%, #12151C 100%)",
        }}
        aria-hidden="true">
      <div className='flex justify-between gap-5 w-full'>
          <button 
          type="button"
          onClick={() => handleSearch(value)}
          
          className='cursor-pointer text-amber-400'><Search /></button>
          
      
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for a movie..."
        aria-label="Search for a movie by title"
        className="w-full rounded-2xl border border-amber-400 bg-taupe-800 py-4 pl-12 pr-4 text-lime-400 placeholder:text-lime-400 outline-none focus:border-amber-400 transition-colors"
      />
      {value && (
        <button
          type="button"
          onClick={() => setValue("")}
          onSearch={handleSearch} 
          aria-label="Clear search"
          className="flex relative gap-5 right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-amber-400 hover:text-amber-500 transition-colors "
        >
          <X />
        </button>
      )}
      </div>
    </div>

    <div className="min-h-screen flex flex-col bg-ink-950">
      <main className="flex-1"
      style={{
          background:
            "radial-gradient(60% 60% at 80% 10%, rgba(193,68,58,0.20), transparent 60%), radial-gradient(50% 50% at 15% 90%, rgba(227,178,60,0.14), transparent 60%), linear-gradient(180deg, #0B0D12 0%, #12151C 100%)",
        }}
        aria-hidden="true">
        <section className="border-b border-b-lime-700">
          <div className="max-w-content mx-auto px-5 sm:px-8 py-10">
            <h1 className="font-display text-3xl sm:text-4xl text-amber-500">
              Browse <span className="italic text-lime-500">the catalog</span>
            </h1>
            <p className="mt-2 text-sm text-amber-400 max-w-lg">
              Search by title, or scroll the grid below to see what's playing.
            </p>

          </div>
        </section>

        <section className="max-w-content mx-auto px-5 sm:px-8 py-10">
          {query && !loading && !error && (
            <p className="mb-5 text-sm text-lime-500">
              {movies.length} result{movies.length === 1 ? "" : "s"} for
              <span className="text-amber-400"> “{query}”</span>
            </p>
          )}

          <MovieGrid
            movies={movies}
            loading={loading}
            error={error}
            onSelect={setSelectedMovie}
          />
        </section>
      </main>

      {selectedMovie && (
        <MovieModals movie={selectedMovie} onClose={() => setSelectedMovie(null)} >  </MovieModals> 
      )}
    </div>
</div>
  )
}

export default MovieList