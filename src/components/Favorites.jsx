import React, { Component } from "react";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favIDs: this.getStorage() || [],
    };
  }

  getStorage = () => {
    return JSON.parse(localStorage.getItem("favorites"));
  };

  getMovie = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f96b314f8d7da1ceeabf34040aa20138`
    )
      .then((resu) => resu.json())
      .then((result) =>
        this.setState({
          movies: [...this.state.movies, result],
        })
      );
  };

  componentDidMount() {
    this.state.favIDs.forEach((id) => {
      this.getMovie(id);
    });
  }

  render() {
    console.log(
      localStorage.getItem("favorites"),
      this.state.favIDs,
      this.state.movies
    );
    return (
      <div>
        <h1>Favorites</h1>
      </div>
    );
  }
}
