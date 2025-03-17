import { MainFont } from "~/components/typography";
import { RescuePage } from "~/types/redeem";

interface IStepFour {
  redeemData: RescuePage;
}

const StepFour = ({ redeemData }: IStepFour) => {
  return (
    <div
      className="step-container"
      style={{
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img width={189} src={redeemData.logo_url} />
      <MainFont className="responsive-title">Presente resgatado! 🎉🥳</MainFont>
      <MainFont className="responsive-body" weight={400} color="#64748B">
        Seu pedido está em andamento!
        <br />E não se preocupe, as alterações de status do envio chegam todas
        em seu e-mail!
      </MainFont>
    </div>
  );
};

export { StepFour };
