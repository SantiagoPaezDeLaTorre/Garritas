import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCounter from './ItemCounter';

const Item = ({data}) => {
    return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="green iguana" height="140" image={data.img} />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {data.nombre}
            </Typography>
            <Typography variant="h5" color="text.secondary">
                {data.precio}
            </Typography>
        </CardContent>
        <CardActions>
            <ItemCounter
                stock={data.stock}
                initial={1}
                onAdd={(counter) => console.log(counter)}
            />
        </CardActions>
    </Card>
    );
}


export default Item;