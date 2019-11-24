import React from 'react'
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';

const styles = theme => ({
    card: {
      display: 'flex',
      width: '100%',
      marginBottom: theme.spacing(2)
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 250,
      borderLeft: '5px solid #6f42c1'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    tags:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        marginBottom: theme.spacing(1)
    },
    tag:{
        padding: '2px 3px',
        marginRight: 5,
    },
    box:{
        padding: theme.spacing(2),
    },
    actions:{
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
    },
    agentCard:{
        display: 'flex',
        height: '100%',
        justifyContent: 'start',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(1),
    },
    
    textField: {
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 170,
    },
    typography:{
        marginBottom: theme.spacing(1)
    }
});
class SkeletonListTile extends React.Component {
    render(){
        const { classes, data } = this.props;
        return (
            <Card className={classes.card}>
                <Skeleton
                    variant="rect" height={205}
                    className={classes.cover}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Skeleton className={classes.typography} variant='rect' height={20} width={250}/>
                    <Skeleton className={classes.typography} variant='rect' height={14} width={230}/>
                    <div className={classes.tags}>
                    {[1,2,3].map(x=><Skeleton key={x} className={classes.tag} variant='rect' height={22} width={60}/>)}
                    </div>
                    <Skeleton className={classes.typography} variant='rect' height={14} width={230}/>
                    </CardContent>
                    <div className={classes.controls}>
                        <div className={classes.tags}>
                        {[1,2,3].map(x=><Skeleton key={x} className={classes.tag} variant='rect' height={30} width={30}/>)}
                        </div>
                    </div>
                </div>
                <div className={classes.box}>
                    <div className={classes.agentCard}>
                        <Skeleton className={classes.tag} variant='rect' height={150} width={110}/>
                    </div>  
                </div>
                <div className={classes.box}>
                    <div className={classes.actions}>
                    {[1,2,3,4].map(x=><Skeleton variant='rect' key={x} height={30} className={classes.textField}/>)}
                    </div>
                </div>
                </Card>
        );
    }
}

export default withStyles(styles)(SkeletonListTile);
