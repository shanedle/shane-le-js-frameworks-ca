import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, Button, Image, ResponsiveEmbed } from "react-bootstrap";
import { BASE_URL } from "../../constants/api";
import Spinner from "../layout/Spinner";
import GameDetailGenre from "./GameDetailGenre";
import GameDetailPlatform from "./GameDetailPlatform";

const GameDetail = () => {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    let { id } = useParams();
    const URL = BASE_URL + "/" + id;

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(json => setDetail(json))
            .catch(error => {
                console.log(error);
                setError(true);
            })
            .finally(() => setLoading(false));
    }, [URL]);

    return (
        <>
            {error && <div>Something went wrong. Please refresh the page or try again later.</div>}

            {loading ? (
                <Spinner />) : (
                    <div>
                        <Breadcrumb className="mt-3">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>{detail.name}</Breadcrumb.Item>
                        </Breadcrumb>

                        <div className="detail mb-3">
                            <ResponsiveEmbed aspectRatio="16by9">
                                <Image className="detail__image" src={detail.background_image} fluid />
                            </ResponsiveEmbed>

                            <div className="detail__text">
                                <strong>Name:  </strong>
                                {detail.name}
                            </div>
                            <div className="detail__text">
                                <strong>Metacritic Score:  </strong>
                                {detail.metacritic}
                            </div>
                            <div className="detail__text">
                                <strong>User Rating:  </strong>
                                {detail.rating}
                            </div>
                            <div className="detail__text">
                                <strong>Released:  </strong>
                                {detail.released}
                            </div>
                            <div className="detail__text">
                                <strong>Genres:  </strong>
                                <GameDetailGenre genres={detail.genres} />
                            </div>
                            <div className="detail__text">
                                <strong>Platforms:  </strong>
                                <GameDetailPlatform platforms={detail.platforms} />
                            </div>
                            <div className="detail__text">
                                <strong>About:  </strong>
                                {detail.description_raw}
                            </div>

                            <div className="mt-3">
                                <Button href={detail.website} className="detail__button" target="_blank" rel="noopener noreferrer" block>Website</Button>
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
}

export default GameDetail;