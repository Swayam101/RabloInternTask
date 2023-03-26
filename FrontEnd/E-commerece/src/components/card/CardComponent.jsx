import Card from "@mui/material/Card";
import { Rating } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CardComponent({ productName, productPrice, Company, ratingValue }) {
  return (
    <Card sx={{ width: 200, height: 270 }} style={{ margin: "0.5rem" }}>
      <CardMedia
        sx={{ height: 120 }}
        image="https://picsum.photos/id/237/200/300"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="button" component="div">
          {productName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{ pointerEvents: "none" }} size="small">
          ${productPrice}
        </Button>
        <Button
          style={{ pointerEvents: "none" }}
          size="large"
          variant="outlined"
        >
          {Company}
        </Button>
      </CardActions>
      <Rating name="simple-controlled" value={ratingValue} readOnly />
    </Card>
  );
}

export default CardComponent;
