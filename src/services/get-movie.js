const BASE_URL = "https://api.tvmaze.com";

// Fetch the full show index
export async function getMovies(page = 0) {
  const res = await fetch(`${BASE_URL}/shows?page=${page}`);
  if (!res.ok) {
    throw new Error(`Failed to load shows (status ${res.status})`);
  }
  return res.json();
}

// Search shows by title.
export async function searchShows(query) {
  const res = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`);
  if (!res.ok) {
    throw new Error(`Search failed (status ${res.status})`);
  }
  const data = await res.json();
  return data.map((entry) => entry.show);
}

//Fetch a single show by id
export async function getShowById(id) {
  const res = await fetch(`${BASE_URL}/shows/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to load show ${id} (status ${res.status})`);
  }
  return res.json();
}
