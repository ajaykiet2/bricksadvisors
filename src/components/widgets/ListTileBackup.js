import React from 'react'
import Rating from '@material-ui/lab/Rating';
import MaskInput from '../core/MaskInput'
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import CompareRoundedIcon from '@material-ui/icons/CompareRounded';
import PhoneInTalkRoundedIcon from '@material-ui/icons/PhoneInTalkRounded';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';

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
    title:{
        fontSize: 14,
        fontWeight: 600
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
    locationIcon:{
        padding: 5,
    },
    tags:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        marginBottom: theme.spacing(1)
    },
    tag:{
        backgroundColor: '#EEE',
        borderLeft: '1px solid #3f51b5',
        padding: '2px 3px',
        fontWeight: '600',
        fontSize: 12,
        marginRight: 5,
        textAlignment: 'center'
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
        border: '1px solid #eee',
        padding: theme.spacing(1),
    },
    agentIcon:{
        border: '3px solid #ccc',
        height: 50,
        width: 50,
        margin: theme.spacing(1)
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 170,
    }
});
class ListTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: {
                name: '',
                email: '',
                mobile: ''
            },

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let query = this.state.query;
        query[e.target.name] = e.target.value;
        this.setState({query});
    }

    handleSubmit(){
        console.log(this.state.query, this.props.data.id)
        alert(JSON.stringify({...this.state.query, id: this.props.data.id}));
      }

    render(){
        const { classes, data } = this.props;
        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={data.image}
                    title={data.title}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    
                    hello
                    </CardContent>
                    
                </div>
                
                
                </Card>
        );
    }
}

export default withStyles(styles)(ListTile);
