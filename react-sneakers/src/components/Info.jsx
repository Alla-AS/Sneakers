import React from "react";
import AppContext from "../context";

const Info = ({title, description, image}) => {
  const {setCardOpened} = React.useContext(AppContext);

    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
                className="mb-20"
                width="120px"
                src={image}
                alt="empty"
            />
            <h2>{title}</h2>
            <p className="opasity-6">{description}</p>
            <button onClick={() => {setCardOpened(false)}} className="greenButton">
                <img src="/img/icon-arrow.svg" alt="arrow"/>
                Вернуться назад
            </button>
        </div>
    )
}

export default Info;