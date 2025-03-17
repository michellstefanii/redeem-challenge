import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { MainFont } from "~/components/typography";
import Grid from "@mui/material/Grid2";
import { FormValues, Item } from "~/types/redeem";
import { FieldErrors, UseFormWatch } from "react-hook-form";

interface SizeSelectionProps {
  selectedItems: Item[];
  errors?: FieldErrors<FormValues>;
  watch: UseFormWatch<FormValues>;
  handleSizeChange: (productId: string, size: string) => void;
  gridSize: number;
}

const SizeSelection: React.FC<SizeSelectionProps> = ({
  selectedItems,
  errors,
  watch,
  handleSizeChange,
  gridSize,
}) => {
  const filteredItems = selectedItems.filter((item) => item.sizes.length > 0);

  if (filteredItems.length === 0) return null;

  return (
    <Box sx={{ mb: 4, mt: 6 }}>
      <MainFont fontSize={16} weight={600}>
        Tamanhos
      </MainFont>
      <Grid sx={{ mt: 4 }} container spacing={4}>
        {filteredItems.map((item) => (
          <Grid size={gridSize} key={item.customer_product_id}>
            <FormControl error={!!errors?.items} fullWidth>
              <InputLabel sx={{ marginLeft: -1.5 }}>
                Qual o seu tamanho ({item.sizes_grid.name})?
              </InputLabel>
              <Select
                label={`Qual o seu tamanho (${item.name})?`}
                value={
                  watch(`items`).find(
                    (x) => x.customer_product_id === item.customer_product_id
                  )?.size_name || ""
                }
                onChange={(e) =>
                  handleSizeChange(item.customer_product_id, e.target.value)
                }
                variant="standard"
              >
                {item.sizes.map((size) => (
                  <MenuItem key={size.id} value={size.name}>
                    {size.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SizeSelection;
