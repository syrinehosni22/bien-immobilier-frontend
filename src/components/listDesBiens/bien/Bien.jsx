import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Bien(props) {
    const navigate = useNavigate();

  return (
    <Card className="bien" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.shutterstock.com/image-photo/paris-france-view-on-french-600w-790865458.jpg"
        alt="immobilier"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() =>navigate('/bienDetails')}>plus de details</Button>
        <Button size="small">delete</Button>
      </CardActions>
    </Card>
  );
}