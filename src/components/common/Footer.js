import React from 'react'
import {Container} from '@material-ui/core'
import {Link} from 'react-router-dom'

class Footer extends React.Component {
    constructor(){
        super();
        this.state = {
            latestProjects: [
                {
                    image: "/images/builders/projects/floorplans/2bhk.jpg",
                    name : "Eco Village 2",
                    price : "starting from 25 Lakh"
                },
                {
                    image: "/images/builders/projects/floorplans/2bhk.jpg",
                    name : "Eco Village 2",
                    price : "starting from 25 Lakh"
                },
                {
                    image: "/images/builders/projects/floorplans/2bhk.jpg",
                    name : "Eco Village 2",
                    price : "starting from 25 Lakh"
                },
               
            ],
            footerMenus: {
                "/":"Home",
                "about-us" : "About Us",
                "services" : "Services",
                "contact-us" : "Contact Us",
                "careers" : "Careers",
                "loans" : "Loans",
                "customer-care" : "Customer Care",
                "privacy-policy" : "Privacy & Policy"
            }
        }
    }
    render(){
        let menus = [];
        for(let key in this.state.footerMenus){
            menus.push(<li key={key}><i className="fa fa-li fa-angle-right"></i> <Link to={key}>{this.state.footerMenus[key]}</Link></li>)
        }
        let projects = this.state.latestProjects.map((project,idx)=>{
            return (
                <li key={idx}>
                    <div className="image">
                        <img src={project.image} alt="" />
                    </div>
                    <div className="info">
                        <h4 className="info-title">{project.name}</h4>
                        <div className="price">{project.price}</div>
                    </div>
                </li>
            )
        });
        return (
            <div>
                <div className="footer">
                    <Container>
                        <div className="row">
                            <div className="col-md-3">
                                <h4 className="footer-header">ABOUT US</h4>
                                <p>
                                At bricksadvisors, we understand that people everywhere are searching for a home to call their own. We want to make this search as joyful as finally finding the perfect home because we understand that finding a home is much more than an online search!
A home is a cherished memory that lasts forever, it is where the walls embrace memories, the ceilings shelter love and laughter, where the quiet corners offer a much-needed pause and life itself becomes a reason to celebrate.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <h4 className="footer-header">RELATED LINKS</h4>
                                <ul className="fa-ul">
                                    {menus}
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h4 className="footer-header">LATEST PROJECTS</h4>
                                <ul className="list-unstyled list-product">
                                    {projects}
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h4 className="footer-header">OUR CONTACT</h4>
                                <address>
                                    <strong>Bricksadvisors Pvt. Ltd.</strong><br />
                                    1355 Market Street, Suite 900<br />
                                    San Francisco, CA 94103<br /><br />
                                    <abbr title="Phone">Phone:</abbr> (123) 456-7890<br />
                                    <abbr title="Fax">Fax:</abbr> (123) 456-7891<br />
                                    <abbr title="Email">Email:</abbr> <a href="mailto:sales@bricksadvisors.in">sales@bricksadvisors.in</a><br />
                                    <abbr title="Skype">Skype:</abbr> <a href="skype:myshop">myshop</a>
                                </address>
                            </div>
                        </div>
                    </Container>
                </div>
                <div id="footer-copyright" className="footer-copyright">
                    <Container>
                        <div className="copyright">
                            Copyright &copy; { new Date().getFullYear() } Bricksadvisors | All rights reserved.
                        </div>
                        <div className="copyright pull-right">
                            Designed & Developed By <Link to="/coding-machine">AJAY KUMAR</Link>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default  Footer;