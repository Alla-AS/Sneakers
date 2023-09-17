import React from "react";
import { Link } from "react-router-dom";

export const Info = ({title, description, image, onClickButton, link}) => {
    return (
        <div className="info-block d-flex align-center justify-center flex-column flex">
            <img
                className="mb-20"
                src={image}
                alt="image"
            />
            <h2 className="mb-5 mt-10">{title}</h2>
            <p className="mb-40">{description}</p>
            <div>
                <Link to={link} relative="path">
                    <button onClick={onClickButton} className="greenButton">
                        <img src="img/icon-arrow.svg" alt="arrow"/>
                        Вернуться назад
                    </button>
                </Link>
            </div>
        </div>
    )
}
