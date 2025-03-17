import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "~/components/spinner";
import { useGetRedeems } from "~/services/hooks/useGetRedeem";
import { RescuePage } from "~/types/redeem";
import "./steps.styles.css";
import { MainFont } from "~/components/typography";
import { Steps } from "./steps";

const RedeemSteps = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const queryRedeem = useGetRedeems(String(pageId));
  const [redeemData, setRedeemData] = useState<RescuePage>();

  useEffect(() => {
    if (queryRedeem.isSuccess && queryRedeem.data.status == "ACTIVE") {
      setRedeemData(queryRedeem.data);
    }

    if (queryRedeem.data?.status == "INACTIVE" || queryRedeem.isError) {
      navigate("/");
    }
  }, [
    queryRedeem.data,
    queryRedeem.isSuccess,
    queryRedeem.isError,
    queryRedeem.status,
  ]);

  return (
    <>
      {!queryRedeem.isLoading && redeemData ? (
        <Steps redeemData={redeemData} />
      ) : (
        <div className="redeem-loading">
          <Spinner />
          <MainFont fontSize={18}>
            Estamos carregando as informações, por favor aguarde...
          </MainFont>
        </div>
      )}
    </>
  );
};

export { RedeemSteps };
