import React from "react";
import "./color-picker.css";

const ColorPicker = props => {
    const { color, active } = props;

    return (
        <div className='color-picker'>
            <div
                className='color-picker-main'
                style={{ backgroundColor: color }}
            ></div>
            <div className={`color-picker-text ${active ? "pink-text" : ""}`}>
                {color}
            </div>
        </div>
    );
};

export default ColorPicker;
