import React from "react";

const OpenExternalSiteButton = () => {
  const openExternalSite = () => {
    const externalSiteUrl =
      "http://www.edexalted.com/exalteddiceroller/#/diceRollerAdvanced";
    window.open(externalSiteUrl, "_blank");
  };

  return (
    <button className="btn btn-primary" onClick={openExternalSite}>
      Exalted Dice roller
    </button>
  );
};

export default OpenExternalSiteButton;
