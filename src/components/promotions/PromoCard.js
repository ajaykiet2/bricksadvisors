import React from 'react'

const PromoCard = (props) => {
    let size = props.size ? 'promotion promotion-' +props.size :"promotion";
    let align = props.align ? "text-"+props.align : "";
    return (
        <div className={size}>
            <div className="promotion-image">
                <img src="/images/promotions/promo.jpg" alt="" />
            </div>
            <div className="overlay-box overlay-black"></div>
            <div className={"promotion-caption promotion-caption-inverse "+align}>
                <h4 className="promotion-title">Supertech Ltd</h4>
                <div className="promotion-price"><small>Starting from</small> 6500/sqft</div>
                <p className="promotion-desc">A big step for small.<br />A beloved design. Now with more to love.</p>
                <a href="/" className="promotion-btn">View More</a>
            </div>
        </div>
    );
};

export default PromoCard;