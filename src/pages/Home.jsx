import { Link, NavLink } from "react-router";



const navLinkClasses = ({ isActive }) =>
  `text-sm transition-colors ${
    isActive ? "text-amber-300" : "text-lime-500 hover:text-amber-300"
  }`;

const Home = () => {

  

  return (
    
    <div>
      <header className="sticky top-0 z-40 border-b bg-taupe-900 backdrop-blur">
        <div className="max-w-content mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        
          <span className="font-display text-lg text-amber-300 tracking-tight">
            Movie<span className="italic text-lime-500">Explorer</span>
          </span>
       
          
        <nav className="flex items-center gap-6 text-lime-500">
          <NavLink to="/" className={navLinkClasses} end>
             Home
            </NavLink> 
           
          
          <NavLink 
          to="/MovieList" 
          className={navLinkClasses}>
            Movies
          </NavLink>
          
        </nav>
      </div>
      </header>

      <div>
        <section className="grain relative overflow-hidden">
      {/* layered cinematic gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 10%, rgba(193,68,58,0.20), transparent 60%), radial-gradient(50% 50% at 15% 90%, rgba(227,178,60,0.14), transparent 60%), linear-gradient(180deg, #0B0D12 0%, #12151C 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-content mx-auto px-5 sm:px-8 py-20 sm:py-30">
        <p className="text-xs tracking-wide text-amber-300 mb-5">
          Live from TVMaze
        </p>

        <h1 className="font-display text-4xl sm:text-6xl leading-[1.08] max-w-2xl text-amber-300">
          Discover stories
          <br />
          <span className="italic text-gold-400">worth watching.</span>
        </h1>

        <p className="mt-6 max-w-md text-lime-500 text-base sm:text-lg leading-relaxed">
          Explore thousands of titles from around the world, search for an old
          favorite, and dig into the details before you press play.
        </p>

        <div className="mt-10">
          <Link
            to="/MovieList"
            
            className="inline-flex items-center rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold text-ink-950 shadow-glow hover:bg-amber-400 transition-colors"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </section>
      </div>

      <div>
        <footer className="grain relative border-t border-amber-950/20 bg-taupe-900">
      <div className="relative max-w-content mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg text-amber-300">
            Movie<span className="italic text-lime-500">Explorer</span>
          </p>
          <p className="mt-2 text-sm text-amber-400">
             Data provided by the TVMaze <span className="text-lime-400">© MovieExplorer 2026</span>
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-orange-800 hover:text-orange-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.tvmaze.com/api"
            target="_blank"
            rel="noreferrer"
            className="text-orange-800 hover:text-orange-400 transition-colors"
          >
            TVMaze 
          </a>
        </div>
      </div>
    </footer>
      </div>
     
        
    </div>
  )
}

export default Home