import Banner from "../components/Banner";

export default function Accueil() {
  return (
    <section className="page accueil">
      <Banner image="/public/images/home-banniere.jpg" title="Chez vous, partout et ailleurs" />
      <p>Chez vous partout et allieurs</p>
    </section>
  );
}