import React from "react"
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core'
import Container from "@material-ui/core/Container"
import LoginModal from '../widgets/LoginModal'
import SignupModal from '../widgets/SignupModal'

const styles = theme =>({
    button: {
        padding: 3,
    },
    link:{
        cursor: 'pointer'
    }
})

class Topbar extends React.Component {

    constructor() {
        super();
        this.state = {
            signin: false,
            signup: false
        }
        this.closeLogin = this.closeLogin.bind(this);
        this.openLogin = this.openLogin.bind(this);
        this.closeSignup = this.closeSignup.bind(this);
        this.openSignup = this.openSignup.bind(this);
    }
    closeLogin(){
        this.setState({
            signin: false
        })
    }
    openLogin(){
        this.setState({
            signin: true
        })
    }

    closeSignup(){
        this.setState({
            signup: false
        })
    }
    openSignup(){
        this.setState({
            signup: true
        })
    }

    render(){
        const {classes} = this.props;
        return(
            <div className="top-nav">
                <LoginModal open={this.state.signin} onClose={this.closeLogin}/>
                <SignupModal open={this.state.signup} onClose={this.closeSignup}/>
                <Container>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className={classes.link} onClick={this.openLogin}><a href="/#">Login</a></li>
                            <li className={classes.link} onClick={this.openSignup}><a href="/#">Register</a></li>
                        </ul>
                    </div>
                </Container>
            </div>
        )
    }
}
export default withStyles(styles)(Topbar);