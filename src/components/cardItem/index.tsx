import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CheckboxProps,
} from "@mui/material";
import { MainCheckBox } from "../checkbox";
import { MainFont } from "../typography";
import { FC } from "react";

interface CardItemProps {
  image: string;
  title: React.ReactNode;
  checkboxProps: CheckboxProps;
}

const CardItem: FC<CardItemProps> = ({ image, title, checkboxProps }) => {
  return (
    <Card
      className="card-item"
      sx={{
        height: 334,
        boxShadow: "none",
        border: "1px solid #D8DCE2",
        borderRadius: "6px",
        position: "relative",
        padding: "16px",
      }}
    >
      <CardActions sx={{ position: "absolute", right: 14, top: 14 }}>
        <MainCheckBox {...checkboxProps} />
      </CardActions>
      <CardMedia
        className="card-media"
        onClick={() => checkboxProps?.onChange()}
        component="img"
        sx={{
          height: 260,
          width: 260,
          objectFit: "cover",
          cursor: "pointer",
        }}
        image={image}
        alt="Card Image"
      />
      <CardContent sx={{ textAlign: "center" }}>
        <MainFont>{title}</MainFont>
      </CardContent>
    </Card>
  );
};

export { CardItem };
