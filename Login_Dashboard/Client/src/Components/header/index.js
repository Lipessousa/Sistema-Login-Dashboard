import React from "react";
import "./style.css";
import imagem from "./logo.png";
import logout from './logout.png';

const Header = () => {
    const sair = () => {
        localStorage.clear();
        window.location.reload();
      }

    return (
    <div>
        <header className="header">
            <div className="header_conteudo">
                <img className="header_logo" src={imagem}></img>

                <div className="logout">
                    <img onClick={sair} className="logout-logo" src={logout} alt={logout}></img>
                </div>

            </div>
        </header>
    </div>
  );
};

export default Header;
