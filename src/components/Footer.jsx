import { useState } from "react";
import ShareModal from "./ShareModal";
import styles from "./Footer.module.css";
import avatar from "../../images/avatar-michelle.jpg";
import iconShare from "../../images/icon-share.svg";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  function handleClick(e) {
    setShowModal(!showModal);
  }

  return (
    <>
      <div id={styles["footer"]}>
        <div>
          <img src={avatar} alt="pic of michelle" />
          <div className={styles["footer-content"]}>
            <p>Michelle Appleton</p>
            <p>28 Jun 2020</p>
          </div>
        </div>
        {!showModal && (
          <button type="button" className={styles["share-button"]} onClick={handleClick}></button>
        )}
        {showModal && (
          <button type="button" className={styles["active"]} onClick={handleClick}></button>
        )}
      </div>
      {showModal && <ShareModal view="desktop"/>}
      {showModal && <ShareModal view="mobile"/>}
    </>
  );
};

export default Footer;
