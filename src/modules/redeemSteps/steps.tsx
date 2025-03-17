import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { stepValidationSchemas } from "./utils/utils";
import { useNavigate } from "react-router-dom";
import { RenderSteps } from "./renderSteps";
import { Container, Stack } from "@mui/material";
import { MainButton, SecondButton } from "~/components/button";
import { FormValues, RescuePage } from "~/types/redeem";
import "./steps.styles.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormFooter } from "~/components/footer";
import { useCreateRedeem } from "~/services/hooks/useCreateRedeem";

const steps = ["one", "two", "three", "four"];

interface ISteps {
  redeemData: RescuePage;
}

const Steps = ({ redeemData }: ISteps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const queryCreate = useCreateRedeem();

  const form = useForm<FormValues>({
    resolver: yupResolver(stepValidationSchemas()[currentStep]),
    mode: "onChange",
    defaultValues: {
      items: [],
      extra_question_responses: [],
      redeemer_name: "",
      redeemer_email: "",
      redeemer_document_number: "",
      redeemer_zipcode: "",
      redeemer_street: "",
      redeemer_number: "",
      redeemer_complement: "",
      redeemer_neighborhood: "",
      redeemer_city: "",
      redeemer_state: "",
      redeemer_country: "",
      redeemer_phone: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    queryCreate.mutate({ id: redeemData.id, data: values });
  };

  useEffect(() => {
    if (queryCreate.isSuccess) {
      setCurrentStep(currentStep + 1);
    }
  }, [queryCreate.status]);

  const nextStep = async () => {
    const isValid = await form.trigger();

    if (!isValid) {
      return;
    }

    if (currentStep === 2) {
      form.handleSubmit(onSubmit);
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className="redeem-steps-container"
      style={{ backgroundColor: redeemData?.background_color }}
    >
      <Container style={{ maxWidth: 1055 }}>
        <form className="form-container" onSubmit={form.handleSubmit(onSubmit)}>
          {redeemData && (
            <RenderSteps
              redeemData={redeemData}
              currentStep={currentStep}
              form={form}
            />
          )}
          {currentStep !== 3 && (
            <Stack
              className={`button-container ${
                currentStep === 0 ? "button-container-mobile" : ""
              }`}
              direction="row"
              spacing={2}
              justifyContent={currentStep !== 0 ? "space-between" : "center"}
              width="100%"
            >
              {currentStep !== 0 && (
                <SecondButton
                  loading={queryCreate.isPending}
                  onClick={prevStep}
                >
                  Voltar
                </SecondButton>
              )}
              <MainButton
                loading={queryCreate.isPending}
                type={currentStep === 2 ? "submit" : "button"}
                bgcolor={redeemData?.button_color}
                onClick={currentStep != 2 ? nextStep : undefined}
              >
                {currentStep !== 0 ? "Continuar" : "Começar"}
              </MainButton>
            </Stack>
          )}
          <FormFooter />
        </form>
      </Container>
    </div>
  );
};

export { Steps };
