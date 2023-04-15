import React from "react";
import "./sort-by.css";
import Form from "react-bootstrap/Form";

const SortBy = () => {
    return (
        <div className='sort-by'>
            <span className='sort-by-label'>Sort by</span>
            <Form.Select size='sm'>
                <option value='Price-Low to High'>Price-Low to High</option>
                <option value='Price-Low to High'>Price-High to Low</option>
                <option value='Price-Low to High'>Popularity</option>
                <option value='Price-Low to High'>Ratings</option>
            </Form.Select>
        </div>
    );
};

export default SortBy;
