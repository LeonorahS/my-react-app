import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements.json";
import "../pages/Accueil.css";

export default function Accueil() {
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