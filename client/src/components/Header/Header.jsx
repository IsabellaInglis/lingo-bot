import { useLocation } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">Lingo Bot</h1>

        {location.pathname === "/" ? (
          <button className="header__btn">Home</button>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
