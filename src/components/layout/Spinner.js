import React from "react";
import { Spinner } from "react-bootstrap";

export default () => {
    return (
        <div className="spinner-container">
            <Spinner animation="border" className="spinner" />
        </div>
    );
};
