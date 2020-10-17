import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { BASE_URL } from '../../constants/api';

function GameDetail() {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();
    const url = BASE_URL + "/" + id;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setDetail(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [url]);

    if (loading) {
        return <Spinner animation="border" className="spinner" />;
    }

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>{detail.name}</Breadcrumb.Item>
            </Breadcrumb>

            <Row>
                <Image className="detailImage" src={detail.background_image} />
                <Col className="detailCol">
                    <h3>{detail.name}</h3>
                    <p>{detail.description_raw}</p>
                    <Button href={detail.website} target="_blank" rel="noopener noreferrer">Website</Button>
                </Col>
            </Row>
        </>
    );
}

export default GameDetail;