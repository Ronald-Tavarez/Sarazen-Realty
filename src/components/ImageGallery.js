import React, { useState } from 'react'
import { Paper, Container, Typography, Card, makeStyles, CardMedia, CardActionArea, CardActions, CardContent, Box, Button } from '@material-ui/core';
import Data from '../data/constData';

/**
 * TODO:
 * - Add Card action buttons or areas for listings
 * - Add listing url to listings json array
 * - Utilize properties so array can be passed from app.js
 * - add carousel buttons so the user can look at more than three listings
 * - Link call to action to ddf? (maybe)
 */

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    listingCard: {
        width: "clamp(240px, 50%, 280px)",
        height: "auto",
        margin: ".5rem auto"
    }
}));

const listings = Data.listings;

export default function ImageGallery(properties) {
    const Classes = useStyles();

    const [state, setState] = useState({
        
    });
    return (
        <Container component="span" id="properties">
            <Box p={1}>
                <Typography variant="h4">
                    Sold Properties
                </Typography>
            </Box>
            <Container className={Classes.cardContainer}>
            {listings.map(listing => {
                return (
                    <Card key={listing.link} elevation={3} className={Classes.listingCard}>
                        <CardMedia component="img" src={`${process.env.PUBLIC_URL}/img/${listing.imageUrl}`} />
                        <CardContent style={{padding: 0}}>
                            <Typography variant="h4">
                                {`$${listing.price}`}
                            </Typography>
                        </CardContent>
                    </Card>
                );
            })}
            </Container>
            <Box p={3}>
                <Button variant="contained" color="primary">
                    <Box p={1}>
                        <Typography variant="h5">
                            Search Listed
                        </Typography>
                    </Box>
                </Button>
            </Box>
        </Container>
    );
}
