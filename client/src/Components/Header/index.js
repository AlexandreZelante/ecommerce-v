import React from "react";
import LogoIBM from "../../images/IBMLogobranco.svg";

export default function Header() {
  return (
    <div className="pageHeader">
      <img src={LogoIBM} className="logoHeader" alt="" />
    </div>
  );
}

