import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';

export default class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={API_KEY}")
        .then(res => res.json())
        .then(results => this.setState({
            movies: results.results
        }));
    }

    render() {
        const Container = styled.div`
            background-color: blue;
            margin: 20;
        `;
        return (
            <Container>
                <h1>Popular</h1>
                <div className="d-flex flex-wrap justify-content-around">
                    {this.state.movies.map(movie => (
                        <Card key={movie.id} film={movie} />
                    ))}
                </div>
            </Container>
        )
    }
}
