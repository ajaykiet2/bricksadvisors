import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PersonOutlineSharp from '@material-ui/icons/PersonOutlineSharp';
import Typography from '@material-ui/core/Typography';
import MaskInput from '../core/MaskInput';
import { withStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="http://bricksadvisors.in">
            Bricksadvisors
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const styles = theme => ({
    root: {
      height: 'auto',
    },
    image: {
      backgroundImage: 'url(/images/specialities.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    overflow:{
        maxHeight: '500px',
        overflowY: 'scroll'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });

class SignupModal extends React.Component {
    render(){
        const handleClose = () => {
            onClose(false);
        }

        const {onClose, classes, open} = this.props;
        return (
            <React.Fragment>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"fullWidth maxWidth="md">
                    <Grid container component="main" className={classes.root}>
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.overflow}>
                            <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                            <PersonOutlineSharp/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                CREATE NEW ACCOUNT
                            </Typography>
                            <form className={classes.form} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="name"
                                    label="Your Name"
                                    type="text"
                                    id="name"
                                    autoFocus
                                />
                                <MaskInput
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    mask="+\91 (999)-999-9999"
                                    fullWidth
                                    id="mobile"
                                    label="Mobile"
                                    name="mobile"
                                    
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    
                                />
                                
                                
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <Button
                                    size="large" 
                                    fullWidth
                                    variant="contained"
                                    color="primary" 
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Signup
                                </Button>
                                <Grid container>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                        {"I already have an account? Login"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Box mt={5}>
                                <Copyright />
                                </Box>
                            </form>
                            </div>
                        </Grid>
                        <Grid item xs={false} sm={4} md={7} className={classes.image} />
                    </Grid>          
                </Dialog>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(SignupModal);