import React from 'react';
import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Search({ handleSearch }) {
    return (
        <InputGroup className="search">
            <FormControl
                placeholder="Search Game By Name..."
                onChange={event => handleSearch(event)}
            />
        </InputGroup>
    );
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

export default Search;