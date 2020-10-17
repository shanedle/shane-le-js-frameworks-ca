import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import GameItem from './GameItem';
import Search from './GameSearch';
import { BASE_URL } from '../../constants/api';

function GameList() {
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setGames(json.results);
                setFilteredGames(json.results);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    const filterGames = function (e) {
        console.log(e.target.value)
        const searchValue = e.target.value.toLowerCase();

        const filteredArray = games.filter(function (gm) {
            const lowerCaseName = gm.name.toLowerCase();

            if (lowerCaseName.match(searchValue)) {
                return true;
            }
            return false;
        });

        setFilteredGames(filteredArray);
    };

    if (loading) {
        return <Spinner animation="border" className="spinner" />;
    }

    return (
        <>
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
        </>
    );
}

export default GameList;