import dataLogements from "../data/logements.json";

export  default function Logements(){
    return(
        <section className="page logements">
            <h1>Logements</h1>
          <p>Il y a {dataLogements.length} logements disponibles</p>
        </section>
    );
}