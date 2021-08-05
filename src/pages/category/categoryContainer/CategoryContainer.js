import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./catcon.module.css";
import headphone from "../../../components/assets/category-headphones/desktop/image-xx99-mark-one.png";
import speaker from "../../../components/assets/category-speakers/desktop/image-zx9.png";
import earphone from "../../../components/assets/category-earphones/desktop/image-yx1-earphones.png";
import shopicon from "../../../../src/components/assets/shopIcon.png";

const CategoryContainer = () => {
  const history = useHistory();

  const headphoneClick = () => {
    history.push("/headphones");
  };

  const speakerClick = () => {
    history.push("/speakers");
  };

  const earphoneClick = () => {
    history.push("/earphones");
  };

  return (
    <div>
      {/* CATEGORY CONTAINER */}

      <div className={styles.catcon__wraper}>
        {/* HEADPHONE */}
        <div className={styles.headphone__wraper}>
          <img className={styles.headphone__pict} src={headphone} />
          <div className={styles.shadow} />
          <p className={styles.title__cat}>HEADPHONES</p>
          <button onClick={headphoneClick} className={styles.shop__btn}>
            Shop <img className={styles.btn__icon} src={shopicon} />
          </button>
          <div className={styles.container__bg} />
        </div>
        {/* SPEAKER */}
        <div className={styles.speaker__wraper}>
          <img className={styles.speaker__pict} src={speaker} />
          <div className={styles.shadow} />
          <p className={styles.title__cat}>SPEAKERS</p>
          <button onClick={speakerClick} className={styles.shop__btn}>
            Shop <img className={styles.btn__icon} src={shopicon} />
          </button>
          <div className={styles.container__bg} />
        </div>
        {/* EARPHONE */}
        <div className={styles.earphone__wraper}>
          <img className={styles.earphone__pict} src={earphone} />
          <div className={styles.shadow} />
          <p className={styles.title__cat}>EARPHONES</p>
          <button onClick={earphoneClick} className={styles.shop__btn}>
            Shop <img className={styles.btn__icon} src={shopicon} />
          </button>
          <div className={styles.container__bg} />
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;
