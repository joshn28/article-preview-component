import styles from "./ShareModal.module.css";
import facebook from "../../images/icon-facebook.svg";
import pinterest from "../../images/icon-pinterest.svg";
import twitter from "../../images/icon-twitter.svg";

const ShareModal = ({ view }) => {
  return (
    <div id={styles["modal"]} className={styles[`${view}`]}>
      <div id={styles["share-icons"]}>
        <p>SHARE</p>
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={pinterest} alt="" />
      </div>
      <div className={styles["triangle"]}></div>
    </div>
  );
};

export default ShareModal;
