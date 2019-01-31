import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "87aa591779a5f94d60d533559d21c857",
    language: "en-US"
  }
});

// Network DownLoaded file = popular?api_key=87aa591779a5f94d60d533559d21c857&language=en-US
// axios.create로 설정한 정보와 밑의 "tv/popular" String을 조합하여 URL로 호출한다.
// api.baseURL                  api.get(String)    params.api_key                            params.langauge
// https://api.themoviedb.org/3/tv/popular?api_key=87aa591779a5f94d60d533559d21c857&language=en-US

// api.get("tv/popular");

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"), // GET Request URL은 API에서 이미 정해짐.
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () => api.get("tv/top_reated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
