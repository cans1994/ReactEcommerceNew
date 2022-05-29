import Cactus from "../assets/cactus.jpg";
import Pink from "../assets/pink.jpg";
import Rose from "../assets/rose.jpg";

function Produits() {
  return (
    <div className="Produits">
      {<h2>Voici nos produits </h2>}
      {
        <section className="Selection">
          <ul>
            <li>
              <p>Cactus plutôt mignon</p>
              <img
                src={Cactus}
                className="cactusounet"
                alt="cactus bon sang!"
              />
            </li>
            <button>Clique, tu le veux!</button>

            <li>
              <p>Arbre hyper rose</p>
              <img src={Pink} className="pink" alt="cerisier bon sang!" />
            </li>
            <button>Clique, tu le veux!</button>

            <li>
              <p>Rose romantique</p>
              <img
                src={Rose}
                className="rose"
                alt="rose un peu rose quand même!"
              />
            </li>
            <button>Clique, tu le veux!</button>
          </ul>
        </section>
      }
    </div>
  );
}

export default Produits;
