import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import BuildIcon from '@material-ui/icons/Build';
import NearMeIcon from '@material-ui/icons/NearMe';
import FavoriteIcon from '@material-ui/icons/Favorite';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EditIcon from '@material-ui/icons/Edit';
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%',
  },
  speedDial: {
    position: 'relative',
    
  },
  themeButton:{
    // backgroundImage:"linear-gradient(90deg,rgb(179, 40, 226), rgb(9, 197, 255))",
    boxShadow: "1px 2px 5px #555",    
  },
  directionUp: {},
  directionRight: {},
  directionDown: {},
  directionLeft: {},
});

const actions = [
  { icon: <PermIdentitySharpIcon />, name: 'My Account', link:"/my-account" },
  { icon: <NearMeIcon />, name: 'Post Property', link:"/my-account/post-property" },
  { icon: <FavoriteIcon />, name: 'My Wishlist', link:"/my-account/wishlist" },
  { icon: <DashboardIcon />, name: 'My Properties', link:"/my-account/properties" },
  { icon: <KeyboardIcon />, name: 'EMI Calculator', link:"/emi-calculator" },
];

class SpeedDials extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: false
    }
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  redirectTo = (link) => {
    this.props.history.push(link);
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <SpeedDial
          ariaLabel="Add Your Property"
          className={classes.speedDial}
          buttonprops={{className:classes.themeButton}}
          icon={<SpeedDialIcon icon={<BuildIcon/>} openIcon={<EditIcon/>}/>}
          onBlur={this.handleClose}
          onClick={this.handleClick}
          onClose={this.handleClose}
          onFocus={this.handleOpen}
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          open={open}
          direction="left"
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipPlacement="top"
              onClick={this.redirectTo.bind(this, action.link)}
            />
          ))}
        </SpeedDial>
      </div>
    );
  }
}

SpeedDials.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(SpeedDials));