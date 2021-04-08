import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  }

  // 외부에 async 를 쓰고 내부에 await을 쓰게되면 await을 붙은 부분의 답이 끝나기를 기다린다. -> axios 가 항상 빠르진 않기 떄문에 비동기 제어를 한 것
  getMovies = async () => {
    const movies = await axios.get("http://yts-proxy.now.sh/list_movies.json")
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are Ready"}</div>
  }
}

export default App;
