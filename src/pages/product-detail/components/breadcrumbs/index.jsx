import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./breadCrumbs.css";

const Breadcrumbs = props => {
    const { productDetail = {} } = props;
    const { name = "", brand = "" } = productDetail;
    return (
        <Breadcrumb>
            <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
            <Breadcrumb.Item href='#/'>{brand}</Breadcrumb.Item>
            <Breadcrumb.Item href='#/'>Mobile Phone</Breadcrumb.Item>
            <Breadcrumb.Item active>{name}</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default Breadcrumbs;
