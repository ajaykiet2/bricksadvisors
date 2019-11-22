import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Typography,
    Container,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button
} from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import {PageHeader} from '../widgets'
const useStyles = makeStyles({
    card: {
        marginTop: 20, 
        maxWidth: 500,
    },
    media: {
        height: 140,
    },
});

const InteriorDesign = ()=>{
    const classes = useStyles();
    const services = [
        {
            id:1,
            title: "Service 1",
            image: "/images/services/interior-service1.jpg",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        },
        {
            id:2,
            title: "Service 2",
            image: "/images/services/interior-service2.jpg",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        },
        {
            id:3,
            title: "Service 3",
            image: "/images/services/interior-service3.jpg",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        },
        {
            id:4,
            title: "Service 4",
            image: "/images/services/interior-service1.jpg",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        },
        {
            id:5,
            title: "Service 5",
            image: "/images/services/interior-service2.jpg",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        },
        {
            id:6,
            title: "Service 6",
            image: "/images/services/interior-service3.jpg",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        }
    ];

    const serviceCards = services.map((service)=>{
        return (
            <Col sm={4} key={service.id}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={service.image}
                        title={service.title}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {service.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {service.description}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Contact
                        </Button>
                        <Button size="small" color="primary">
                            More Details
                        </Button>
                    </CardActions>
                </Card>
            </Col>
        );
    });
    return (
        <React.Fragment>
            <PageHeader title="INTERIOR DESIGN" />
            <div className="section-container p-t-20 bg-silver">
                <Container>
                    <div className="about-us-content p-b-10 p-t-20">
                        <h2 className="title text-center text-theme-gradient">Interior Service Includes</h2>
                        <p className="desc text-center">
                            We provides the best consultancy and best deals in real estate market <br/>with full transparancy and suggestions. We always make happy to our customers. 
                        </p>
                    </div>
                    <Row>
                        {serviceCards}
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default InteriorDesign;