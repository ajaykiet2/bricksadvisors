import React from 'react'
import PropertyCard from './PropertyCard'
import {Container} from '@material-ui/core'
import {ToggleButton,ToggleButtonGroup} from '@material-ui/lab'
import {Link} from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton';

class CategoryListing extends React.Component{
    render(){
        return (
            <div className="section-container bg-silver">
            <Container>
                <h4 className="section-title clearfix">
                    <ToggleButtonGroup size="small" className="pull-right">
                        <ToggleButton size="small" value="view-all">
                            VIEW ALL
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <span className="text-theme-gradient">Recommended Projects</span>
                    <small>Shop and get your favourite phone at amazing prices!</small>
                </h4>
                <div className="category-container">
                    <div className="category-sidebar">
                        <ul className="category-list">
                            <li className="list-header">Top Projects</li>
                            <li><Link to="/">Cherry County <i className="fa fa-chevron-right pull-right"></i></Link></li>
                            <li><Link to="/">Nirala Estate <i className="fa fa-chevron-right pull-right"></i></Link></li>
                            <li><Link to="/">Arihant Arden <i className="fa fa-chevron-right pull-right"></i></Link></li>
                            <li><Link to="/">Steller Jeevan <i className="fa fa-chevron-right pull-right"></i></Link></li>
                            <li><Link to="/">Panchsheel Green <i className="fa fa-chevron-right pull-right"></i></Link></li>
                            <li><Link to="/">Steller One <i className="fa fa-chevron-right pull-right"></i></Link></li>
                            <li><Link to="/">WTC CBD Noida <i className="fa fa-chevron-right pull-right"></i></Link></li>
                            <li><Link to="/">Spectrum Metro <i className="fa fa-chevron-right pull-right"></i></Link></li>
                            <li><Link to="/">Cyberthum <i className="fa fa-chevron-right pull-right"></i></Link></li>
                            <li><Link to="/">Central Plaza <i className="fa fa-chevron-right pull-right"></i></Link></li>
                        </ul>
                    </div>
                    <div className="category-detail">
                        <Link to="/" className="category-item full">
                            <div className="item">
                                <div className="item-cover">
                                    <img src="/images/product/category.jpg" alt="" />
                                </div>
                                <div className="item-info bottom">
                                    <h4 className="item-title">Project details and some basic information</h4>
                                    <p className="item-desc">Tagline of your project</p>
                                    <div className="item-price">34.50 Lakh</div>
                                </div>
                            </div>
                        </Link>
                        <div className="category-item list">
                            <div className="item-row">
                              <PropertyCard />
                              <PropertyCard />
                              <PropertyCard />
                            </div>
                            <div className="item-row">
                              <PropertyCard />
                              <PropertyCard />
                              <PropertyCard />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        )
    }
}

export default CategoryListing;