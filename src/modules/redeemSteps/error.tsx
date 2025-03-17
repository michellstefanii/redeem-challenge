import { MainFont } from "~/components/typography";
import "./steps.styles.css";
import { MainButton } from "~/components/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <img
        className="notfound-logo"
        width={189}
        src={"/assets/logo.svg"}
      />
      <img width={500} src={"/assets/404.png"} />
      <MainFont fontSize={20} weight={700} color="#22007F">
        Oops! Página não encontrada.
      </MainFont>
      <MainFont fontSize={16} weight={400} color="#64748B">
        Parece que você explorou demais, e acabou se perdendo.
      </MainFont>

      <MainButton sx={{ mt: 5 }} onClick={() => navigate("/")}>
        Voltar para página inicial
      </MainButton>
    </div>
  );
};

export default NotFound;
