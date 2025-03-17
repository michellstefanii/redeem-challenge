import { createBrowserRouter } from "react-router-dom";
import { RedeemSteps } from "../modules/redeemSteps";
import NotFound from "~/modules/redeemSteps/error";

const router = createBrowserRouter([
  {
    path: "/:pageId",
    element: <RedeemSteps />,
    errorElement: <NotFound />
  },
]);

export { router };
