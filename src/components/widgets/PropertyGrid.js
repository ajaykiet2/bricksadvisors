import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';

import ListTile from './ListTile'
import ListCard from './ListCard'
import SkeletonListTile from './SkeletonListTile'

const useStyles = makeStyles(theme => ({
    grid:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    marginLess:{
        marginLeft: -5,
        marginRight: -5,
        marginTop: -5,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
}));

const PropertyGrid = (props) => {
    const [cards, setCards] = useState([])
    const [properties, setProperties] = useState(props.properties)
    const [loading, setLoading] = useState(props.loading)
    const [view, setView] = useState(props.view)
    const [onLoaded, setOnLoaded] = useState(props.onLoaded)
    const classes = useStyles();
    let data = props

    
    
    useEffect(()=>{
        
        const createCard = (id, property, view) => {
            return view == 'list' 
                ? <ListTile key={id} data={property}/>
                : <ListCard key={id} data={property}/>
        };

        if(properties){
            if (!loading) {
                properties.forEach((property,idx) => {
                    cards.push(createCard(idx,property,view))
                });
                props.onLoaded();
            } else {
                cards.push([1,2,3].map(idx => <SkeletonListTile key={idx}/>))
            }
        }
        
    },[properties]);

    return (
        <div className={props.view == 'list'? classes.grid : classes.marginLess}>
            {cards}
        </div>
    );
}

export default PropertyGrid
