import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Col, Card, ResponsiveEmbed, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";


const GameItem = ({ id, name, image, rating, released }) => {
    return (
        <Card className="cardd my-3">
            <ResponsiveEmbed aspectRatio="16by9">
                <Card.Img variant="top" src={image} />
            </ResponsiveEmbed>
            <Card.Body>
                <Card.Text className="cardd__title">{name}</Card.Text>
                <Row>
                    <Col>

                        <IconContext.Provider value={{ color: "orange", size: "1.5em", className: "card__rating" }}>
                            <div>
                                <Card.Text className="cardd__text"><FaStar className="mb-1 mr-2" />{rating}</Card.Text>
                            </div>
                        </IconContext.Provider>

                    </Col>
                    <Col>
                        <Card.Text className="cardd__text">{released}</Card.Text>
                    </Col>
                </Row>
                <Link to={"game/" + id}>
                    <Button className="cardd__button" block>Learn More</Button>
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