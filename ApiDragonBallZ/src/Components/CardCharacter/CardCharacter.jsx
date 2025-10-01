import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import noImage from '../../assets/noImage.jpeg'

const CardCharacter = ({ character }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={character.image ? character.image : noImage}
          alt="green iguana"
          sx={{ objectFit: 'contain'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {character.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardCharacter;
