// 1. Kas yra useEffect ir kaip jis naudojamas?
// useEffect yra React kablys (hook), leidžiantis atlikti šalutinius efektus komponentuose, pvz., duomenų užklausas, DOM atnaujinimus ar laikmačius.

// Pagrindinė sintaksė:
import React, { useEffect } from "react";

function Pavyzdys() {
  useEffect(() => {
    console.log("Komponentas užsikrovė!");
  }, []);
  
  return <h1>Pavyzdys su useEffect</h1>;
}
// Paaiškinimas:

// useEffect(() => { ... }, []) vykdomas tik kartą po pirmojo komponento užsikrovimo.
// Jei priklausomybių masyvas [] nėra nurodytas, useEffect bus vykdomas kiekvieną kartą, kai komponentas atsinaujina.