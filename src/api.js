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
// https://api.themoviedb.org/3/tv/popular?api_key=87aa591779a5f94d60d533559d21c857&language=en-US
api.get("tv/popular");

export default api;
