const API_KEY = process.env.API_KEY

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchAction: {
    title: "Action",
    url: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedy: {
    title: "Comdey",
    url: `discover/movie?api_key=${API_KEY}&with_genres=35`,

  },

  fetchHorror: {
    title: "Horror",
    url: `discover/movie?api_key=${API_KEY}&with_genres=27`,

  },
  fetchRomance: {
    title: "Romance",
    url: `discover/movie?api_key=${API_KEY}&with_genres=10749`,

  },
  fetchMystry: {
    title: "Mystry",
    url: `discover/movie?api_key=${API_KEY}&with_genres=9648`,

  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `discover/movie?api_key=${API_KEY}&with_genres=878`,

  },
  fetchAnimation: {
    title: "Animation",
    url: `discover/movie?api_key=${API_KEY}&with_genres=16`,

  },
  
  fetchTVmovie: {
    title: "TV Movie",
    url: `discover/movie?api_key=${API_KEY}&with_genres=10770`,

  },
  fetchWestern: {
    title: "Western",
    url: `discover/movie?api_key=${API_KEY}&with_genres=37`,

  },
};
