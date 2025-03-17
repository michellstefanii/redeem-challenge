import { StepOne } from "./components/steps/one";
import { FormValues, RescuePage } from "~/types/redeem";
import { UseFormReturn } from "react-hook-form";
import { StepTwo } from "./components/steps/two";
import { StepThree } from "./components/steps/three";
import { StepFour } from "./components/steps/four";

interface IRenderSteps {
  currentStep: number;
  form: UseFormReturn<FormValues>;
  redeemData: RescuePage;
}

const RenderSteps = ({ currentStep, form, redeemData }: IRenderSteps) => {
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <StepOne redeemData={redeemData} />;
      case 1:
        return <StepTwo redeemData={redeemData} form={form} />;
      case 2:
        return <StepThree redeemData={redeemData} form={form} />;
      case 3:
        return <StepFour redeemData={redeemData} />;
      default:
        return null;
    }
  };

  return renderStep();
};

export { RenderSteps };
