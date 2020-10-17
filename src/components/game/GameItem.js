import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

function GameItem({ id, name, image, rating, released }) {
    return (
        <Card>
            <ResponsiveEmbed aspectRatio="16by9">
                <Card.Img variant="top" src={image} />
            </ResponsiveEmbed>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text><span role="img" aria-label="star">⭐</span>{rating}</Card.Text>
                <Card.Text>{released}</Card.Text>
                <Link to={"game/" + id}>
                    <Button variant="dark" block>Learn More</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

GameItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    released: PropTypes.string.isRequired
};

export default GameItem;