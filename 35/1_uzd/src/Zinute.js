import React, { useEffect } from "react";

function Zinute () {
  useEffect(() => {
    console.log("Komponentas užsikrovė!");
  }, []);

  return <p>Tai yra pranešimas iš useEffect</p>;
};

export default Zinute;