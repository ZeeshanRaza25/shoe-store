import React from 'react';
import { Rating } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function RatingComponent({ rating }) {
    const [value, setValue] = React.useState(rating);

    return (
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography variant="h5" color="textSecondary" style={{ textAlign: 'center', marginBottom: '5%' }} component="legend">
                Rating
            </Typography>
            <Typography variant="h5" color="textSecondary" style={{ textAlign: 'center', }} component="legend">
                <Rating name="read-only" value={value} readOnly />
            </Typography>
        </Box>
    );
}
