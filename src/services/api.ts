import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDNlYjY0Nzk5NGY5YThkZThlNzIwNTkzMzEwZTE4MSIsInN1YiI6IjVmNzY5ZDIzZmVhMGQ3MDAzNTE2ZWI1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A3sKnVdFW1RQPyuUow3CfQqCYCaVhPWY2kmvV5mTEoQ",
  },
});
