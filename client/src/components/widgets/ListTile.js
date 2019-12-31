import React from 'react'
import {withStyles} from '@material-ui/core'
const styles = theme => ({
    list: {
        background: '#fff',
        borderRadius: 4,
        boxSizing: 'border-box',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        display: 'flex',
        flex: 'auto',
        flexDirection: 'row',
        height: 200,
        marginBottom: 8,
        overflow: 'hidden',
        position: 'relative',
        transition: 'width .3s',
        width: '100%'
    },
    grid: {
        [theme.breakpoints.only('xs')]: {
            width: 'calc(50% - 8px)'
        },
        [theme.breakpoints.only('sm')]: {
            width: 'calc(33.33% - 8px)'
        },
        [theme.breakpoints.only('md')]: {
            width: 'calc(33.33% - 8px)',
        },
        [theme.breakpoints.only('lg')]: {
            width: 'calc(25% - 8px)',
        },
        transition: 'width .3s',
        position: 'relative',
        boxSizing: 'border-box',
        background: '#fff',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 8
    },
    listImageContainer: {
        padding: 10,
        height: '100%',
        width: 230
    },
    gridImageContainer:{
        height: 150,
        padding: 10,
        width: '100%'
    },
    details:{
        padding: 10,
    },
    image: {
        backgroundSize: 'cover',
        backgroundPosition: "center",
        background: 'url(/images/loading_image.jpg)',
        width: '100%',
        objectFit: 'cover',
        height: '100%'
    },
    title:{
        fontSize: 13,
        color: "#666",
        '&:hover': {
            color: '#348fe2'
        }
    },
    subtitle1:{
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#444'
    },
    subtitle2:{
        fontSize: 9
    },
    bold:{
        fontWeight: 600
    },
    subdetails:{
        display: 'flex',
        flexWrap: "wrap",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start'
    },
    chip: {
        padding: 5,
        paddingLeft:0,
        marginRight: 10,
        fontSize: 12,
        fontWeight:600
        
    },
    chipInfo:{
        fontSize: 9,
        fontWeight:400
    }
});

class ListTile extends React.Component {
    render(){
        const { classes, view, data } = this.props;
        return (
            <div className={classes[view]}>
                <div className={classes[view+'ImageContainer']}>
                    <a href={data.link} target="_BLANK" rel="noopener noreferrer">
                        <img 
                            alt={data.title}
                            title={`${data.title} ${data.type} ${data.subType} in ${data.location}`} 
                            className={classes.image} 
                            src={data.image}
                        />
                    </a>
                </div>
                <div className={classes.details}>
                    <div className={classes.title}>
                        <a 
                            title={`${data.title} in ${data.location}`} 
                            href={data.link} 
                            className={classes.title} 
                            target="_BLANK"
                            rel="noopener noreferrer"
                        >
                            {`${data.title} in `}<span className={classes.bold}>{data.location}</span>
                        </a>
                    </div>
                    <div className={classes.subtitle1}>
                        <a href={data.link} title="View Property Details">{data.project}</a>
                    </div>
                    <div className={classes.subdetails}>
                        <div className={classes.chip}>
                            <div>{data.price}</div>
                            <div className={classes.chipInfo}>{data.rates}</div>
                        </div>
                        <div className={classes.chip}>
                            <div>{data.area}</div>
                            <div className={classes.chipInfo}>{data.rates}</div>
                        </div>
                        <div className={classes.chip}>
                            <div>{data.bedroom}</div>
                            <div className={classes.chipInfo}>{data.bathroom}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ListTile);
