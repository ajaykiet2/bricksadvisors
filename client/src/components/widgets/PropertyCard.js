import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class PropertyCard extends Component{    
    /*
        data: {
            link: "product_detail.html",
            image: "/images/builders/projects/floorplans/2bhk.jpg",
            status: "FRESH",
            title: "2 BHK + 2 Toilet",
            area: "1230 SQFT",
            projectName: "Supertech Eco Village - II",
            price: "₹ 34 L",
            rates: "₹ 3,100/SQFT"
        }
    */
    render(){
        let data = this.props.data || {
            link: "/",
            image: "/images/default.jpg",
            status: "#####",
            title: "##### ### #####",
            area: "####",
            projectName: "##### ## #### ## ###",
            price: "#####",
            rates: "########"
        };
        return (                          
            <div className="item item-thumbnail">
                <Link to={`/properties/${data.link}`} className="item-image">
                    <img src={data.image} alt=""/>
                    <div className="discount">{data.status}</div>
                </Link>
                <div className="item-info">
                    <h4 className="item-title">
                        <Link to={`/properties/${data.link}`}>{data.title}<br />{data.area}</Link>
                    </h4>
                    <p className="item-desc">{data.projectName}</p>
                    <div className="item-price">{data.price}</div>
                    <div className="item-desc">{data.rates}</div>
                </div>
            </div>
        )
    }
}

export default PropertyCard;