import Footer from "./Footer";
import drawers from "../../images/drawers.jpg";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div id={styles["card"]}>
      <img src={drawers} alt="drawers" />
      <div className={styles["card-content"]}>
        <p className={styles["card-header"]}>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </p>
        <p className={styles["card-body"]}>
          Ever been in a room and felt like something was missing? Perhaps it felt
          slightly bare and uninviting. I’ve got some simple tips to help you make
          any room feel complete.
        </p>
        <Footer />
      </div>
    </div>
  )
}

export default Card;