import React from "react";
import PropTypes from "prop-types";

const GameDetailPlatform = ({ platforms }) => {
    return (
        <>
            {platforms
                .map((platform, i) => (<span key={i}>{platform.platform.name}</span>))
                .reduce((prev, curr) => [prev, ', ', curr])}
        </>
    );
}

GameDetailPlatform.propTypes = {
    platforms: PropTypes.array.isRequired
};

export default GameDetailPlatform;
