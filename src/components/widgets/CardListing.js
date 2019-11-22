import React from 'react';
import { connect } from 'react-redux';
import PropertyCard from './PropertyCard'
import { Container } from "@material-ui/core"
import Skeleton from '@material-ui/lab/Skeleton';
import {
  ToggleButton, 
  ToggleButtonGroup
} from "@material-ui/lab"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import { getProperties } from '../../store/actions/propertyActions';

class CardListing extends React.Component {
    
  constructor(props) { 
    super(props);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    this.getProperties();
  }

  getProperties() {
    this.props.getProperties(this.props.data.filters);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  getSkeleton(idx){
    return (
      <div className="item item-thumbnail" key={idx}>
        <Skeleton variant="rect" height={140}/>
        <div className="item-info">
          <Skeleton className="item-title" width={70} height={140}></Skeleton>
          <Skeleton className="item-desc" width={150}></Skeleton>
          <Skeleton className="item-price" width={100}></Skeleton>
          <Skeleton className="item-desc" width={90}></Skeleton>
        </div>
      </div>
    )
  }

  render(){
      const metaData = this.props.data || {
        title: "######### #####",
        description: "##### ############ ########## ##### ## #####",
        filters: {

        }
      }
      
      const speed = 1000;
      const settings = {
        dots: false,
        arrows: false,
        className: "slider variable-width",
        speed: speed,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        infinite: false,
        adaptiveHeight: true,
        beforeChange: (current, next) => setTimeout(() =>{ if (current < next) this.getProperties();}, speed),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              dots: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

      let items = this.props.properties.length ? this.props.properties.map((card, key)=>{
        return (<PropertyCard key={key} data={card}/>);
      }) : [1,2,3,4,5,6].map(idx =>{return this.getSkeleton(idx)});

      return (
        <div className="section-container bg-silver">
            <Container>
              <h4 className="section-title clearfix">
                <span className="text-theme-gradient">{metaData.title}</span>
                <small>{metaData.description}</small>
                <ToggleButtonGroup size="small" className="pull-right">
                  <ToggleButton value="left" onClick={this.previous}>
                    <KeyboardArrowLeft />
                  </ToggleButton>
                  <ToggleButton value="right" onClick={this.next}>
                    <KeyboardArrowRight />
                  </ToggleButton>
                </ToggleButtonGroup>
              </h4>
              <Slider ref={c => (this.slider = c)} {...settings}>
                {items}
              </Slider>
            </Container>
        </div>
      )
  }
}

const mapStateToProps = state => ({
  properties: state.properties.trendingProperties
});

export default connect(mapStateToProps, { getProperties })(CardListing);