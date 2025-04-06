import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Info.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1641970304213-fadcccae478e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1689298478069-cc04a1763866?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1596166154004-c91321f3aa32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJhaW53ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      {info.city ? (
        <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={
                info.humidity > 80
                  ? RAIN_URL
                  : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
              }
              title="Weather image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}{
                  info.humidity > 80
                  ? <ThunderstormIcon/>
                  : info.temp > 15
                  ? <WbSunnyIcon/>
                  : <AcUnitIcon/>
                }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Temperature: {info.temp}°C
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Min Temp: {info.tempMin}°C
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Max Temp: {info.tempMax}°C
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Humidity: {info.humidity}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Weather: <b>{info.weather}</b>, feels like {info.feelsLike}°C
              </Typography>
            </CardContent>
          </Card>
        </div>
      ) : null}
    </div>
  );
}
