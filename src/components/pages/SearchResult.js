import React from 'react'
import InfiniteLoader from '../core/InfiniteLoader'
import { PageHeader, AdvanceSearchWidget } from '../widgets'
import { queryToObject } from '../../utils';
import Property from '../../models/Property'
import { Row, Col } from 'react-bootstrap'
import { withStyles, Container, Paper } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AppsIcon from '@material-ui/icons/Apps';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import ListTile from '../widgets/ListTile'
import SkeletonListTile from '../widgets/SkeletonListTile'

// defining custom styles
const styles = theme => ({
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
    gridRow: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start'
    }
});
class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            hasMoreItems: true,
            view: 'list',
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

        return properties.map((property, i) => <ListTile key={i} view={view} data={property}/>);
    }

    handleChangeView() {
        let view = this.state.view == 'list' ? 'grid' : 'list';
        this.setState({view});
    }

    render(){
        const {classes} = this.props;
        const {view} = this.state;
        return (
            <React.Fragment>
                <PageHeader title="Search Results" />
                <div className="section-container bg-silver">
                    <Container>
                        <Row>
                            <Col sm={3}>
                            <Paper className={classes.sidebar}>
                                <AdvanceSearchWidget filters={queryToObject(this.props.location.search)}/>
                            </Paper>
                            </Col>
                            <Col sm={9}>
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
                                    <Tooltip title={this.state.view == 'list' ? "Grid View" : "List View"}>
                                        <IconButton className={classes.iconButton} onClick={this.handleChangeView}>
                                            {this.state.view == 'list' ? <AppsIcon /> : <FormatListBulletedIcon />}
                                        </IconButton>
                                    </Tooltip>
                                    </div>
                                </Paper>
                                <div className={classes.margin}>
                                    <div className={classes.gridRow}>
                                        {this.renderCards()}
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
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
            </React.Fragment>
        )
    }
}


  
export default withStyles(styles)(SearchResult);