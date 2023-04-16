import React, { useEffect, useState } from "react";
import Footer from "../../common/components/footer";
import Header from "../../common/components/header";
import NavbarMain from "../../common/components/navbar-main";
import ShareButton from "../../common/components/share-button";
import Breadcrumbs from "./components/breadcrumbs";
import ProductDetailSection from "./components/product-detail-section";
import ProductPictures from "./components/product-pictures";
import "./product-detail.css";
import { useParams } from "react-router-dom";
import { SAMPLE_PHONES_PRODUCTS_LIST } from "../../common/constants/product-list.js";

const ProductDetail = () => {
    const params = useParams();
    const { productId } = params;
    const [productDetail, setProductDetail] = useState({});

    const getProductDetails = productId => {
        const matchingProduct = SAMPLE_PHONES_PRODUCTS_LIST.find(phoneData => {
            return phoneData.id === productId;
        });
        setProductDetail(matchingProduct);
    };

    useEffect(() => {
        getProductDetails(productId);
    }, [productId]);

    return (
        <div className='product-detail-main'>
            <Header />
            <NavbarMain />

            <div className=' body-main'>
                <div className='container'>
                    <Breadcrumbs productDetail={productDetail} />

                    <div className='product-section'>
                        <div className='row'>
                            <div className='col-md-5'>
                                <ProductPictures />
                            </div>
                            <div className='col-md-6 paddingLeft30'>
                                <ProductDetailSection
                                    productDetail={productDetail}
                                />
                            </div>
                            <div className='col-md-1'>
                                <ShareButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
export default ProductDetail;
