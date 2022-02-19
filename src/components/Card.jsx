import React from "react";
import qrCodeImg from "../assets/image-qr-code.png";
import "./Card.css";

function Card() {
  return (
    <>
      <div className="card__conatiner">
        <div className="card__qr-container">
          <img class="qr__image" src={qrCodeImg} alt="qr-code" />
        </div>
        <div className="card__description">
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
