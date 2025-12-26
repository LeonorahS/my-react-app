import Banner from "../components/Banner";
import Card from "../components/Card";
import { useEffect, useState } from "react";

import "../pages/Accueil.css";

export default function Accueil() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error("Erreur lors du chargement des logements :", error));
  }, []);

  return (
  
    <>
      <section className="page accueil">
      <Banner image="/public/images/home-banniere.jpg" title="Chez vous, partout et ailleurs" />
     </section>
      <section className="gallery">
      {logements.map((logement) => (
        <Card 
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}      
        />
      ))}
      </section>
    </>
  );
}