import React from 'react'
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// defining styles
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


class Profile extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.contentHeader}>
                    <Typography variant="h6">
                        MY PROFILE
                    </Typography>
                </Paper>
                <Paper className={classes.content}>
                   First Name: Ajay
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Profile);
