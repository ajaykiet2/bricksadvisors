import React from 'react'
import InfiniteLoader from '../core/InfiniteLoader'
import { PageHeader, AdvanceSearchWidget } from '../widgets'
import { queryToObject } from '../../utils';
import Property from '../../models/Property'
import { withStyles, Container, Grid, Paper, Divider, Tooltip, IconButton } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AppsIcon from '@material-ui/icons/Apps';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import ListTile from '../widgets/ListTile'
import SkeletonListTile from '../widgets/SkeletonListTile'

// defining custom styles
const styles = theme => ({
    container: {
        flexGrow: 1, 
    },
    loader:{
        marginTop: theme.spacing(1)
    },
    sidebar: {
        flexGrow: 1,
        padding: theme.spacing(2),
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
    menu:{
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuItem:{
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 5,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    margin:{
        marginTop: theme.spacing(4),
    },
    gridWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    listWrapper: {
        display: 'flex',
        flexFlow: 'row',
        flexDirection: 'column',
        alignItems: 'center'
    },
});
class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            hasMoreItems: true,
            view: 'grid',
            properties:[]
        }
        this.handleChangeView = this.handleChangeView.bind(this);
        this.searchProperties = this.searchProperties.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        this.searchProperties(queryToObject(this.props.location.search));
    }

    componentWillReceiveProps(props) {
        this.searchProperties(queryToObject(props.location.search));
    }

    searchProperties(filters) {
        this.setState({loading: true});
        Property.search(filters).then(data => this.setState({properties:data.properties, loading:false}));
    }

    loadMore(){
        this.setState({loading: true});
        Property.search(queryToObject(this.props.location.search))
        .then(data => {
            let properties = this.state.properties.concat(data.properties);
            this.setState({properties,loading:false})
        })
    }

    renderCards() {
        const { properties, view } = this.state;

        return properties.length 
            ? properties.map((property, i) => <ListTile key={i} view={view} data={property}/>)
            :[1,2,3].map(idx=><SkeletonListTile key={idx}/>);
    }

    handleChangeView() {
        let view = this.state.view === 'list' ? 'grid' : 'list';
        this.setState({view});
    }

    render(){
        const {classes} = this.props;
        const {view} = this.state;
        return (
            <React.Fragment>
                <PageHeader title="Search Results" />
                <div className="section-container bg-silver">
                    <Container maxWidth="lg">
                        <Grid container className={classes.container} spacing={2}>
                            <Grid key="sidebar" item xs={12} sm={12} md={4} lg={3}>
                                <Paper className={classes.sidebar}>
                                    <AdvanceSearchWidget filters={queryToObject(this.props.location.search)}/>
                                </Paper>
                            </Grid>
                            <Grid key="content" item xs={12} sm={12} md={8} lg={9}>
                                <Paper className={classes.menu}>
                                    <div className={classes.menuItem}>CUSTOMIZATION & SORTING</div>
                                    <div className={classes.menuItem}>
                                        <Tooltip title="Latest Properties">
                                            <IconButton className={classes.iconButton} aria-label="menu">
                                                <LaunchIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Divider className={classes.divider} orientation="vertical" />
                                        <IconButton disabled className={classes.iconButton}>
                                            <AccountBalanceWalletIcon />
                                        </IconButton>
                                        <Tooltip title="Decreasing Price">
                                            <IconButton className={classes.iconButton}>
                                                <ArrowUpwardIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Increasing Price">
                                            <IconButton className={classes.iconButton}>
                                                <ArrowDownwardIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Divider className={classes.divider} orientation="vertical" />
                                        <Tooltip title={view === 'list' ? "Grid View" : "List View"}>
                                            <IconButton className={classes.iconButton} onClick={this.handleChangeView}>
                                                {view === 'list' ? <AppsIcon /> : <FormatListBulletedIcon />}
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                </Paper>
                                <div className={classes.margin}>
                                    <div className={view === 'list' ? classes.listWrapper : classes.gridWrapper}>
                                        {this.renderCards()}
                                    </div>
                                    {
                                        this.state.loading 
                                            ? <div className="progress">
                                                <div className="indeterminate"></div>
                                                </div>
                                            : ''
                                    }
                                    <div>
                                        <InfiniteLoader jsx="true" onVisited={ () => this.loadMore() } />
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                
            </React.Fragment>
        )
    }
}


  
export default withStyles(styles)(SearchResult);