import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    Container,
    Paper,
    Select,
    MenuItem,
    InputBase,
    Divider,
    IconButton,
    withStyles

} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import { serialize } from '../../utils'

const styles = theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '50px'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    select: {
        marginLeft: theme.spacing(1),
        flex: 1,
        border: 'none',
        '&:before': {
            border: 'none',
        },
        '&:hover':{
            border: 'none'
        },
        '&:focus':{
            border: 'none',
            backgroundColor: '#fff',
        },
        '&:after':{
            border: 'none'
        }
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    placeOver:{
        marginTop: -50,
        display: "block",
        position:"relative",
        zIndex: 999
    }
});

class SearchWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            transaction: '',
            property: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.history.push('/search-results?'+serialize(this.state));
    }

    render(){
        const { classes } = this.props;
        return (
            <Container className={classes.placeOver}>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        onChange={this.handleChange}
                        className={classes.input}
                        placeholder="Locality, Developer, Property detail"
                        value={this.state.term}
                        inputProps={{ 'aria-label': 'search property', name: 'term', id: 'term' }}
                    />
                    <Divider className={classes.divider} orientation="vertical" />
                    <Select 
                        displayEmpty 
                        value={this.state.transaction}
                        onChange={this.handleChange} 
                        inputProps={{ name: 'transaction',id: 'transaction'}}
                        className={classes.select}
                    >
                        <MenuItem disabled value="">Transaction Type</MenuItem>
                        <MenuItem value="any">ANY</MenuItem>
                        <MenuItem value="buy">BUY</MenuItem>
                        <MenuItem value="rent">RENT</MenuItem>
                    </Select>
                    <Divider className={classes.divider} orientation="vertical" />
                    <Select 
                        displayEmpty
                        value={this.state.property} 
                        onChange={this.handleChange} 
                        inputProps={{ name: 'property',id: 'property'}}
                        className={classes.select}
                    >
                        <MenuItem disabled value="">Property Type</MenuItem>
                        <MenuItem value="any">ANY</MenuItem>
                        <MenuItem value="residential">RESIDENTIAL</MenuItem>
                        <MenuItem value="commercial">COMMERCIAL</MenuItem>
                    </Select>
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={this.handleSubmit}>
                        <SearchIcon />
                    </IconButton>
                    </Paper>
            </Container>
          )
    }
}

export default withStyles(styles)(withRouter(SearchWidget));