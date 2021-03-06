import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="headerOuter">
      <div className="headerInner">
        <div className="hesari">HESARI</div>
        <div className="menuElement">Etusivu</div>
        <div className="menuElement">Uutiset</div>
        <div className="menuElement">Lehdet</div>
        <div className="menuElement">Asiakaspalvelu</div>
        <div className="menuElement"></div>
        <div className="menuElement"></div>
        <div className="orderButton">Tilaa</div>
        <div className="menuElement">Kirjaudu</div>
        <div className="menuButton">
          Valikko <FontAwesomeIcon icon={faBars} size="1x" />{" "}
        </div>
      </div>
    </div>
  );
}
