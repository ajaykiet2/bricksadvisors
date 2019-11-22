import React from 'react';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import PersonIcon from '@material-ui/icons/Person';
import PhoneInTalkRoundedIcon from '@material-ui/icons/PhoneInTalkRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import MaskInput from '../core/MaskInput'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';

const styles= theme => ({
  card: {
    flex: '1 0 30%',
    margin: 5
  },
  media: {
    borderTop: '5px solid #6f42c1',
    paddingTop: '56.25%',
  },
  title:{
    fontSize: 14,
    fontWeight: 600
  },
  tags:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  tag:{
      backgroundColor: '#EEE',
      borderLeft: '2px solid #3f51b5',
      padding: '2px 3px',
      fontWeight: '600',
      fontSize: 12,
      marginRight: 5,
      textAlignment: 'center'
  },
  textField: {
    width: '48%',
  },
  box:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mediaIcons:{
    position: 'absolute',
    marginTop: -50
  },
  mediaIcon:{
    padding: 5,
    backgroundColor: '#fff',
    margin: 5,
    '&:hover':{
      backgroundColor: '#fff'
    }
  },
  agentCard:{
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1),
    borderRadius: 3,
    backgroundColor: '#fff'
  },
  agentIcon:{
      border: '3px solid #ccc',
      height: 50,
      width: 50,
      margin: theme.spacing(1)
  },
  form:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
});

class ListCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: {
        name: '',
        email: '',
        mobile: ''
      },
      element: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e){
    let element = this.state.element ? null :  e.currentTarget;
    this.setState({element})
  }
  
  handleChange(e) {
    let query = this.state.query;
    query[e.target.name] = e.target.value;
    this.setState({query});
  }

  handleSubmit(){
    console.log(this.state.query, this.props.data.id)
  }

  render(){
    const open = Boolean(this.state.element);
    const id = open ? 'simple-popover' : undefined;
    const { classes, data } = this.props;
    return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={data.image}
        title={data.title}
      />
      <CardActions disableSpacing className={classes.mediaIcons}>
        <IconButton aria-label="add to favorites" className={classes.mediaIcon}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" className={classes.mediaIcon}>
          <ShareIcon />
        </IconButton>
      </CardActions>
      
      
    </Card>
  )
  }
}

export default withStyles(styles)(ListCard);