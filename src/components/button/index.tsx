import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const MainButton = styled(Button)<{ bgcolor?: string }>(
  ({ bgcolor }) => ({
    fontWeight: 600,
    borderRadius: 61,
    boxShadow: "none",
    textTransform: "none",
    padding: "12px 20px",
    height: 43,
    color: "#FFFFFF",
    fontSize: 14,
    backgroundColor: bgcolor || "#22007F",
    fontFamily: ["Open Sans"].join(","),
    "&:hover": {
      backgroundColor: "#3100B6",
      boxShadow: "none",
    },
    "&:focus": {
      boxShadow: "none",
    },
    "&:disabled": {
      boxShadow: "none",
      backgroundColor: "#22007F",
    },
  })
);

export const SecondButton = styled(MainButton)({
  border: "1px solid #64748B",
  color: "#64748B",
  backgroundColor: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#F4F4F4",
    boxShadow: "none",
  },
});
