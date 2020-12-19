import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputGroup } from "react-bootstrap";

const Search = ({ handleSearch }) => {
    return (
        <InputGroup className="mb-1 mt-3">
            <FormControl
                placeholder="Filter game here"
                onChange={event => handleSearch(event)}
            />
        </InputGroup>
    );
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

export default Search;