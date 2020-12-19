import React from "react";
import PropTypes from "prop-types";

const GameDetailGenre = ({ genres }) => {
    return (
        <>
            {genres
                .map((genre, i) => (<span key={i}>{genre.name}</span>))
                .reduce((prev, curr) => [prev, ', ', curr])}
        </>
    );
}

GameDetailGenre.propTypes = {
    genres: PropTypes.array.isRequired
};

export default GameDetailGenre;
