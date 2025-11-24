import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ info }) {
  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardMedia
        component="img"
        alt="weather image"
        height="140"
        image="https://images.unsplash.com/photo-1754620731794-f16ab70963ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"} >
          <div>
            <div>Temperature: {info.temp}&deg;C</div> 
            <div>Humidity: {info.humidity}%</div> 
            <div>Min Temp: {info.tempmin}&deg;C</div> 
            <div>Max Temp: {info.tempmax}&deg;C</div> 
            <div>Weather: {info.weather}</div> 
            <div>Feels like: {info.feelslike}&deg;C</div> 
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
