import React, { useState } from "react";
import "./product-pictures.css";
import phone1 from "../../../../common/assets/images/phone-1.svg";
import phone2 from "../../../../common/assets/images/phone-2.svg";
import phone3 from "../../../../common/assets/images/phone-3.svg";

const phonesImages = [phone1, phone2, phone3];

const ProductPictures = () => {
    const [selectedThumbnail, setSelectedThumbnail] = useState(0);

    return (
        <div className='product-pictures-main'>
            <div className='row'>
                <div className='col-md-2'>
                    {phonesImages.map((phoneImg, index) => {
                        return (
                            <div
                                key={phoneImg}
                                className={`product-thumbnail mb-3 ${
                                    selectedThumbnail === index
                                        ? "selected"
                                        : ""
                                } `}
                                onClick={() => {
                                    setSelectedThumbnail(index);
                                }}
                            >
                                <img
                                    src={phoneImg}
                                    className='img-fluid phone-img'
                                    alt='phone'
                                />
                            </div>
                        );
                    })}
                </div>
                <div className='col-md-10 phone-container'>
                    <img
                        src={phonesImages[selectedThumbnail]}
                        alt='phone main'
                        className='img-fluid phone-img'
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductPictures;
