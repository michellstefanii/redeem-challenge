import { MainFont } from "../typography";
import "./footer.styles.css";

export const FormFooter = () => {
  return (
    <footer className="form-footer">
      <MainFont className="footer-font" weight={400}>
        © 2025 - <span>Empresa X</span> em parceria com a <span>Lobby</span>
      </MainFont>
    </footer>
  );
};
