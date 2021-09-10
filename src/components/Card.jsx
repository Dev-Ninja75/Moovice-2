import React, { Component } from 'react'
import styled from 'styled-components';

export default class Card extends Component {
    render() {
        const StyledCard = styled.div`
            width: 18rem;
            transition: 0.5s;
        `;

        const {film, handleClick} = this.props;
        return (
            <button onClick={() => handleClick(film.id)}>
                <StyledCard className="card my-3 rounded" /*style={{ width: "18rem"}}*/>
                    <img src={"https://image.tmdb.org/t/p/w300" + film.poster_path/*`https://image.tmdb.org/t/p/w300${film.poster_path}`*/} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{film.title}</h5>
                        <p className="card-text">{film.overview}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{film.release_date}</li>
                    </ul>
                </StyledCard>
            </button>
        )
    }
}
