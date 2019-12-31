import React from 'react'
import PropTypes from 'prop-types';
import Container from "@material-ui/core/Container"
import { Row, Col } from 'react-bootstrap'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import BuildIcon from '@material-ui/icons/Build';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

//importing widgets
import { PageHeader } from '../../widgets'

import Profile from './Profile';

// defining custom styles
const styles = theme => ({
    sidebar: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    content:{
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(3)
    },
    contentHeader:{
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
});

// create class component
class MyAccount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    openMenu = ()=>{
        this.setState({
            open: !this.state.open
        })
    }
    render(){
        const { classes } = this.props;
        return (
            <React.Fragment>
                <PageHeader title="MY ACCOUNT" />
                <div className="section-container bg-silver">
                    <Container>
                        <Row>
                            <Col sm={3}>
                                <Paper className={classes.sidebar}>
                                    <List
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"
                                        subheader={
                                            <ListSubheader component="div" id="nested-list-subheader">
                                                Account Information
                                            </ListSubheader>
                                        }
                                        >
                                        <ListItem button>
                                            <ListItemIcon>
                                                <AccountCircleSharpIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="My Profile" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <DashboardIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="My Properties" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <FavoriteIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="My Wishlist" />
                                        </ListItem>
                                        <ListItem button onClick={this.openMenu.bind()}>
                                            <ListItemIcon>
                                                <BuildIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Account Settings" />
                                            {this.state.open ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>
                                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                            <ListItem button className={classes.nested}>
                                                <ListItemIcon>
                                                
                                                </ListItemIcon>
                                                <ListItemText primary="Starred" />
                                            </ListItem>
                                            </List>
                                        </Collapse>
                                    </List>
                                </Paper>
                            </Col>
                            <Col sm={9}>
                                <BrowserRouter>
                                    <Switch>
                                        <Route path="/my-account" component={Profile} />
                                    </Switch>
                                </BrowserRouter>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

MyAccount.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAccount);