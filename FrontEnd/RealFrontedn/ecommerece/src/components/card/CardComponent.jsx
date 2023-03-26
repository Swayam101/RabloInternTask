import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CardComponent({ productName,productPrice,Company }) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="https://picsum.photos/id/237/200/300"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ea
          doloremque quos illum, architecto quam, minima, nulla adipisci ipsa
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{pointerEvents:"none"}} size="small">{productPrice}</Button>
        <Button style={{pointerEvents:"none"}} size="large" variant="outlined">{Company}</Button>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
