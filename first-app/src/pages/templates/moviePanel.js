import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';

class MoviePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieTitle: props.movieTitle,
            rating: props.rating,
            imageSrc: props.imageSrc,
            viewClicked: false
        }
    }

    viewMoviePage = () => {
        this.setState({
            movieTitle: "Updated " + this.state.movieTitle,
            rating: "Updated " + this.state.rating,
            viewClicked: true
        });
    }

    render() {
        let movieTitle = this.props.movieTitle;
        movieTitle = movieTitle.replaceAll(" ", "");
        return (
            <Grid item lg={4} sx={{display: 'inline-block'}}>
                <Card sx={{border: '5px solid white'}}>
                    <CardMedia
                        sx={{height: 400, backgroundSize: 'cover', backgroundPosition: 'top'}}
                        image={this.props.imageSrc}
                    />
                    <CardContent sx={{paddingBottom: 0, textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflowX: 'hidden'}}>
                        <Typography sx={{fontSize: 18}} gutterBottom>
                            {this.props.movieTitle}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{paddingTop: 0, justifyContent: 'center'}}>
                        <Button onClick={this.viewMoviePage}>View</Button>
                    </CardActions>
                </Card>
                
                { this.state.viewClicked && ( <Navigate to={"./" + movieTitle} state={this.state} />) }
            </Grid>
        );
    }
}

export default MoviePanel;