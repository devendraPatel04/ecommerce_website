import React from "react";
import "./products-main.css";
import { SAMPLE_PHONES_PRODUCTS_LIST } from "../../../../common/constants/product-list";
import PhoneProduct from "../../../../common/components/phone-product";
import Pagination from "react-bootstrap/Pagination";

const ProductsMain = () => {
    return (
        <div className='products-main'>
            <div className='all-products-list'>
                <div className='row'>
                    {SAMPLE_PHONES_PRODUCTS_LIST.map(phone => {
                        return (
                            <div className='col-md-3'>
                                <PhoneProduct
                                    productData={phone}
                                    key={phone.id}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='pagination'>
                <Pagination className='custom-pagination'>
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
            </div>
        </div>
    );
};

export default ProductsMain;
