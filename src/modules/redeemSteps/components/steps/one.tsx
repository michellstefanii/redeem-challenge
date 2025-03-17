import { MainFont } from "~/components/typography";
import { RescuePage } from "~/types/redeem";

interface IStepOne {
  redeemData: RescuePage;
}

const StepOne = ({ redeemData }: IStepOne) => {
  return (
    <div
      className="step-container"
      style={{
        alignItems: "center",
        padding: "80px",
      }}
    >
      <img width={189} src={redeemData.logo_url} />
      <MainFont className="responsive-title">{redeemData.welcome_title}</MainFont>
      <MainFont className="responsive-body" weight={400} color="#64748B">
        {redeemData.welcome_phrase}
      </MainFont>
    </div>
  );
};

export { StepOne };
