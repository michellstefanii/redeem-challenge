import { styled } from "@mui/material/styles";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";

const BpIcon = styled("span")({
  borderRadius: 50,
  width: 40,
  height: 40,
  backgroundColor: "#FFFFFF",
  border: "1px solid #B1B9C5",
});

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#04DDB3",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&::before": {
    width: 20,
    height: 20,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='13' viewBox='0 0 17 13'%3E%3Cpath d='M16.1637 2.28815L6.16374 12.2882C6.07664 12.3756 5.97315 12.4449 5.85919 12.4922C5.74524 12.5395 5.62306 12.5639 5.49967 12.5639C5.37628 12.5639 5.25411 12.5395 5.14016 12.4922C5.0262 12.4449 4.92271 12.3756 4.83561 12.2882L0.460611 7.91315C0.373405 7.82594 0.304229 7.72242 0.257034 7.60848C0.209838 7.49453 0.185547 7.37242 0.185547 7.24909C0.185547 7.12576 0.209838 7.00364 0.257034 6.8897C0.304229 6.77576 0.373405 6.67223 0.460611 6.58503C0.547816 6.49782 0.651345 6.42864 0.765285 6.38145C0.879225 6.33425 1.00135 6.30996 1.12467 6.30996C1.248 6.30996 1.37012 6.33425 1.48406 6.38145C1.598 6.42864 1.70153 6.49782 1.78874 6.58503L5.50045 10.2967L14.8372 0.961587C15.0133 0.785467 15.2522 0.686523 15.5012 0.686523C15.7503 0.686523 15.9892 0.785467 16.1653 0.961587C16.3414 1.13771 16.4404 1.37658 16.4404 1.62565C16.4404 1.87472 16.3414 2.11359 16.1653 2.28971L16.1637 2.28815Z' fill='%23fff'/%3E%3C/svg%3E\")",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    content: '""',
  },
});

export function MainCheckBox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{ "&:hover": { bgcolor: "transparent" }, padding: 0 }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
