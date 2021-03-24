import React from "react";
import logo from "../components/images/My logo.png";
import Image from "../components/styles";

const ShowLogo = () => {
  return (
    <div>
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default ShowLogo;
