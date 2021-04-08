import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  // 외부에 async 를 쓰고 내부에 await을 쓰게되면 await을 붙은 부분의 답이 끝나기를 기다린다. -> axios 가 항상 빠르진 않기 떄문에 비동기 제어를 한 것
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("http://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false })
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class = "loader">
            <span class = "loader__text">Loading...</span>
          </div>) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                year={movie.year} 
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
