import { Alert } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { CardItem } from "~/components/cardItem";
import { MainFont } from "~/components/typography";
import { FormValues, RescuePage } from "~/types/redeem";

interface IStepOne {
  redeemData: RescuePage;
  form: UseFormReturn<FormValues>;
}

const StepTwo = ({ redeemData, form }: IStepOne) => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = form;
  const selectedItems = watch("items", []);

  const handleSelectItem = (item: {
    customer_product_id: string;
    size_name: string;
  }) => {
    const updatedSelection = selectedItems.some(
      (selected) => selected.customer_product_id === item.customer_product_id
    )
      ? selectedItems.filter(
          (selected) =>
            selected.customer_product_id !== item.customer_product_id
        )
      : [...selectedItems, item];

    setValue("items", updatedSelection, { shouldValidate: true });
  };

  return (
    <div className="step-container">
      {errors?.items && (
        <Alert variant="filled" severity="error">
          {errors.items?.message}
        </Alert>
      )}
      <MainFont className="two-header-font">
        Escolha o seu presente! 🎁
      </MainFont>
      <div className="content-container">
        <div className="item-container">
          {redeemData.items.map((item) => (
            <div key={item.name} style={{ flex: "1 1 calc(33.333% - 16px)" }}>
              <CardItem
                image={item.image_url}
                title={item.name}
                checkboxProps={{
                  checked: !!selectedItems.find(
                    (x) => x.customer_product_id === item.customer_product_id
                  ),
                  onChange: () =>
                    handleSelectItem({
                      customer_product_id: item.customer_product_id,
                      size_name: "",
                    }),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { StepTwo };
