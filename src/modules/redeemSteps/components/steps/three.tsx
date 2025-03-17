import { UseFormReturn } from "react-hook-form";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { MainFont } from "~/components/typography";
import { FormValues, RescuePage } from "~/types/redeem";
import SizeSelection from "../../utils/formSizeField";
import ExtraQuestions from "../../utils/extraFields";
import { FormField } from "~/components/formFields";
import { validateCNPJ } from "~/utils/validateCpfCnpj";
import { formatCNPJ, formatCPF } from "~/utils/formatCpfCnpj";
import { formatZipCode } from "~/utils/formatZipCode";
import { states } from "~/utils/states";

interface IStepThree {
  redeemData: RescuePage;
  form: UseFormReturn<FormValues>;
}

export function StepThree({ redeemData, form }: IStepThree) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    watch,
    setValue,
    control,
    formState: { errors },
    clearErrors,
    trigger,
    getValues,
  } = form;

  console.log(getValues());

  const selectedItemsId = watch("items");
  const selectedItems = redeemData.items.filter((item) =>
    selectedItemsId.some(
      (x) => x.customer_product_id === item.customer_product_id
    )
  );

  const handleSizeChange = (itemId: string, sizeName: string) => {
    const updatedItems = [...watch("items")];
    const itemIndex = updatedItems.findIndex(
      (item) => item.customer_product_id === itemId
    );
    if (itemIndex !== -1) {
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        size_name: sizeName,
      };
      setValue("items", updatedItems);
    }
    clearErrors("items");
  };

  const sortedExtraQuestions = [...redeemData.extra_questions].sort(
    (a, b) => a.position - b.position
  );

  const halfGridSize = isMobile ? 12 : 6;
  const smGridSize = isMobile ? 6 : 3;

  return (
    <Box sx={{ padding: isMobile ? "40px 20px" : "40px" }}>
      <Box sx={{ mb: 4 }}>
        <MainFont className="two-header-font" weight={600}>
          Finalize o seu resgate
        </MainFont>
      </Box>

      <Box sx={{ mb: 4 }}>
        <MainFont fontSize={16} weight={600}>
          Dados do destinatário
        </MainFont>
        <Grid sx={{ mt: 4 }} container spacing={4}>
          <FormField
            name="redeemer_name"
            label="Nome completo"
            control={control}
            error={errors.redeemer_name}
            helperText={errors.redeemer_name?.message}
            required
            gridSize={12}
          />
          <FormField
            name="redeemer_document_number"
            label="CPF ou CNPJ"
            control={control}
            error={errors.redeemer_document_number}
            helperText={errors.redeemer_document_number?.message}
            required
            gridSize={halfGridSize}
            onBlur={(e) => {
              setValue(
                "redeemer_document_number",
                validateCNPJ(e?.target?.value)
                  ? formatCNPJ(e?.target?.value)
                  : formatCPF(e?.target?.value)
              );
              trigger("redeemer_document_number");
            }}
          />
          <FormField
            name="redeemer_email"
            label="E-mail"
            control={control}
            error={errors.redeemer_email}
            helperText={errors.redeemer_email?.message}
            required
            gridSize={halfGridSize}
          />
        </Grid>
      </Box>

      <Box sx={{ mb: 4 }}>
        <MainFont fontSize={16} weight={600}>
          Endereço de entrega
        </MainFont>
        <Grid sx={{ mt: 4 }} container spacing={4}>
          <FormField
            name="redeemer_zipcode"
            label="CEP"
            control={control}
            error={errors.redeemer_zipcode}
            helperText={errors.redeemer_zipcode?.message}
            required
            gridSize={halfGridSize}
            onChange={(e) => {
              setValue("redeemer_zipcode", formatZipCode(e.target.value));
              trigger("redeemer_zipcode");
            }}
          />
          <FormField
            name="redeemer_street"
            label="Rua"
            control={control}
            error={errors.redeemer_street}
            helperText={errors.redeemer_street?.message}
            required
            gridSize={halfGridSize}
          />
        </Grid>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Grid container spacing={4}>
          <FormField
            name="redeemer_number"
            label="Número"
            control={control}
            error={errors.redeemer_number}
            helperText={errors.redeemer_number?.message}
            required
            gridSize={smGridSize}
          />
          <FormField
            name="redeemer_complement"
            label="Complemento"
            control={control}
            error={errors.redeemer_complement}
            helperText={errors.redeemer_complement?.message}
            gridSize={smGridSize}
          />
          <FormField
            name="redeemer_neighborhood"
            label="Bairro"
            control={control}
            error={errors.redeemer_neighborhood}
            helperText={errors.redeemer_neighborhood?.message}
            required
            gridSize={halfGridSize}
          />
        </Grid>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Grid container spacing={4}>
          <FormField
            name="redeemer_city"
            label="Cidade"
            control={control}
            error={errors.redeemer_city}
            helperText={errors.redeemer_city?.message}
            required
            gridSize={halfGridSize}
          />
          <FormField
            name="redeemer_state"
            label="Estado"
            control={control}
            error={errors.redeemer_state}
            required
            type="select"
            helperText={errors.redeemer_state?.message}
            options={states}
            gridSize={smGridSize}
          />
          <FormField
            name="redeemer_country"
            label="País"
            control={control}
            error={errors.redeemer_country}
            required
            type="select"
            helperText={errors.redeemer_country?.message}
            options={["Brasil"]}
            gridSize={smGridSize}
          />
        </Grid>
      </Box>

      <SizeSelection
        selectedItems={selectedItems}
        errors={errors}
        watch={watch}
        handleSizeChange={handleSizeChange}
        gridSize={halfGridSize}
      />

      <ExtraQuestions
        setValue={setValue}
        sortedExtraQuestions={sortedExtraQuestions}
        control={control}
        gridSize={halfGridSize}
      />
    </Box>
  );
}
