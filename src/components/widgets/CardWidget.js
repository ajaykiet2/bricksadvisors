import React from 'react';
import ListTile from './ListTile'
import ListCard from './ListCard'

export default function CardWidget(props) {
    return props.view == 'list' ? <ListTile data={props.property}/> : <ListCard data={props.property}/>;
}