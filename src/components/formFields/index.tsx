import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { Control, Controller, FieldError } from "react-hook-form";
import Grid from "@mui/material/Grid2";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { FormValues } from "~/types/redeem";

dayjs.locale("pt-br");

interface IFormFieldProps {
  name: string;
  label: string;
  control: Control<FormValues>;
  error?: FieldError | undefined;
  helperText?: string;
  required?: boolean;
  type?: "text" | "select" | "date" | "masked";
  options?: any[];
  defaultValue?: string;
  onChange?: (args: any) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  multiline?: boolean;
  rows?: number;
  gridSize: number;
}

export const FormField = ({
  name,
  label,
  control,
  error,
  required = false,
  type = "text",
  helperText,
  gridSize,
  options,
  rows,
  multiline,
  onBlur,
  onChange,
}: IFormFieldProps) => (
  <Grid key={name} size={gridSize}>
    <Controller
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      name={name}
      control={control}
      render={({ field }) => {
        switch (type) {
          case "select":
            return (
              <FormControl fullWidth required={required} error={!!error}>
                <InputLabel sx={{ marginLeft: -1.5 }}>{label}</InputLabel>
                <Select
                  variant="standard"
                  {...field}
                  label={label}
                  onChange={onChange || field.onChange}
                >
                  {options?.map((option: string) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
                {helperText && (
                  <FormHelperText sx={{ marginLeft: 0 }}>
                    {helperText}
                  </FormHelperText>
                )}
              </FormControl>
            );
          case "date":
            return (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label={label}
                  value={
                    field.value &&
                    (typeof field.value === "string" ||
                      field.value instanceof Date)
                      ? dayjs(field.value)
                      : null
                  }
                  format="DD/MM/YYYY"
                  onChange={(date) =>
                    onChange
                      ? onChange(date ? date.toISOString().split("T")[0] : "")
                      : field.onChange(
                          date ? date.toISOString().split("T")[0] : ""
                        )
                  }
                  slotProps={{
                    textField: {
                      variant: "standard",
                      fullWidth: true,
                      required: required,
                    },
                  }}
                />
              </LocalizationProvider>
            );
          default:
            return (
              <TextField
                {...field}
                rows={rows}
                onBlur={onBlur}
                onChange={onChange || field.onChange}
                multiline={multiline}
                label={label}
                fullWidth
                variant="standard"
                error={!!error}
                helperText={helperText}
                required={required}
              />
            );
        }
      }}
    />
  </Grid>
);
