import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const MainFont = styled(Typography)<{
  fontSize?: number;
  weight?: number;
  color?: string;
}>(({ fontSize, weight, color }) => ({
  fontFamily: "Open Sans",
  fontSize: fontSize || 16,
  color: color || "#353535",
  fontWeight: weight || 600,
  "&>span": {
    fontWeight: 600,
  },
}));
