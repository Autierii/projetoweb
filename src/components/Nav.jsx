import {} from "react";
import { Link } from "react-router-dom";
import "../Css/Nav.Module.css";

function Nav() {
  return (
    <>
      <Link to="Contextualizacao">Contextualização</Link>

      <nav>
        <div className="nav-container"> 
          <Link to="/">Otoko Tekhne Nashi</Link>

          <div className="barra">
            <div className="itens">
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/Produtos">Produtos</Link>
                </li>
                <li>
                  <Link to="/Login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
