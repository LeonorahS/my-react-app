import {useState, useEffect} from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "../pages/Accueil.css";


export default function Accueil() {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/properties");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des logements"); 
        }
        const data = await response.json();
        setLogements(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLogements();
  }, []);
  if (loading) {
    return ( <>
    <Banner image="/public/images/home-banniere.jpg" title="Chez vous, partout et ailleurs" />
    <p className="Loading">Chargement des logements...</p>  
    </>
    );
  }
if (error) {
    return ( <>
    <Banner image="/public/images/home-banniere.jpg" title="Chez vous, partout et ailleurs" />
    <p className="Error">Erreur : {error}</p>
    </>
    );
  }
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








    //fetch("http://localhost:8080/api/properties")
    //  .then((response) => response.json())
    //  .then((data) => setLogements(data))
    //  .catch((error) => console.error("Erreur lors du chargement des logements :", error));
 // }, []);

 // return (
  
   // <>
   //   <section className="page accueil">
   //   <Banner image="/public/images/home-banniere.jpg" title="Chez vous, partout et ailleurs" />
   //  </section>
   //   <section className="gallery">
   //   {logements.map((logement) => (
   //     <Card 
   //       key={logement.id}
   //       id={logement.id}
    //      title={logement.title}
   //       cover={logement.cover}      
   //     />
   //   ))}
   //   </section>
   // </>
 // );
//}