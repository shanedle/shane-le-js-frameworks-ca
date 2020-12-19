import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import GameItem from "./GameItem";
import Search from "./GameSearch";
import { BASE_URL } from "../../constants/api";
import Spinner from "../layout/Spinner";

const GameList = () => {
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setGames(json.results);
                setFilteredGames(json.results);
            })
            .catch(error => {
                console.log(error);
                setError(true);
            })
            .finally(() => setLoading(false));
    }, []);

    const filterGames = function (e) {
        console.log(e.target.value)
        const searchValue = e.target.value.toLowerCase();

        const filteredArray = games.filter(function (game) {
            const lowerCaseName = game.name.toLowerCase();

            if (lowerCaseName.match(searchValue)) {
                return true;
            }
            return false;
        });

        setFilteredGames(filteredArray);
    };

    return (
        <>
            {error && <div>Something went wrong. Please refresh the page or try again later.</div>}

            {loading ? (
                <Spinner />) : (
                    <div>
                        <Search handleSearch={filterGames} />
                        <Row>
                            {filteredGames.map(game => {
                                const { id, name, background_image, rating, released } = game;

                                return (
                                    <Col sm={6} md={4} xl={3} key={id}>
                                        <GameItem id={id} name={name} image={background_image} rating={rating} released={released} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                )}

        </>
    );
}

export default GameList;