import { useContext } from "react";
import logo_around from "../../images/logo_around.png";
import { /* link, */ useLocation } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { removeToken } from "../../utils/token";

/* const signOut = () => {
  removeToken();
  setIsLoggedIn(false);
};*/

/* if (isLoggedIn) {
  signOut();
}
 */
function Header() {
  const location = useLocation();

  const from = location.state?.from || "/";
  let currentPage;

  if (location.pathname === "/signup") {
    currentPage = "signup";
  } else if (location.pathname === "/signin") {
    currentPage = "signin";
  } else if (location.pathname === "/") {
    currentPage = "/";
  }

  const { currentUser } = useContext(CurrentUserContext);

  console.log(currentUser);

  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo_around} alt="Logo Around" />

        {currentPage === "signup" && (
          <div className="header__button-subscribe">Faça o login</div>
        )}
        {currentPage === "signin" && (
          <div className="header__button-login">Entrar</div>
        )}
        {currentPage === "/" && (
          <div className="header__button-exit">{currentUser.email} Sair</div>
        )}
        {currentPage === "/" && <div className="header__button-exit">Sair</div>}
        {/*  */}
        {/* <div className="header__button-Logged">{currentUser.name}</div> */}
      </header>
    </>
  );
}

export default Header;
