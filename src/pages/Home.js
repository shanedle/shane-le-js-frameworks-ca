import React from "react";
import { Container } from "react-bootstrap";
import GameList from "../components/game/GameList";

const Home = () => {
    return (
        <>
            <Container>
                <GameList />
            </Container>
        </>
    );
}

export default Home;