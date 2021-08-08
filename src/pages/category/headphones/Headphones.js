import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import CategoryContainer from "../categoryContainer/CategoryContainer";

import styles from "./headphone.module.css";
import headphone1 from "../../../components/assets/category-headphones/desktop/image-xx59.png";
import headphone2 from "../../../components/assets/category-headphones/desktop/image-xx99-mark-one.png";
import headphone3 from "../../../components/assets/category-headphones/desktop/image-xx99-mark-two.png";

const Headphones = () => {
  return (
    <div>
      {/* ----HEADER---- */}
      <div className={styles.header}>
        <h2 className={styles.text__header}>HEADPHONES</h2>
      </div>

      {/* ----ITEM 1---- */}
      <div className={styles.item}>
        <div className={styles.pict__container}>
          <img className={styles.pict} src={headphone1} />
          <div className={styles.shadow} />
        </div>
        <div className={styles.description__container}>
          {/* TITLE NEW */}
          <p className={styles.title__new}>NEW PRODUCT</p>

          {/* TITLE */}
          <div className={styles.title}>
            <p>XX99 Mark II Headphones</p>
          </div>
          {/* DESCRIPTION */}
          <div className={styles.description}>
            <p>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
          </div>
          <div>
            <button className={styles.btn}>See Product</button>
          </div>
        </div>
      </div>

      {/* ----ITEM 2---- */}
      <div className={styles.item}>
        <div className={styles.pict__containerRev}>
          <img className={styles.pict} src={headphone2} />
          <div className={styles.shadow} />
        </div>
        <div className={styles.description__containerRev}>
          {/* TITLE NEW */}
          <p className={styles.title__new}></p>

          {/* TITLE */}
          <div className={styles.title}>
            <p>XX99 Mark II Headphones</p>
          </div>

          {/* DESCRIPTION */}
          <div className={styles.description}>
            <p>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
          </div>
          <div>
            <button className={styles.btn}>See Product</button>
          </div>
        </div>
      </div>

      {/* ----ITEM 3---- */}
      <div className={styles.item}>
        <div className={styles.pict__container}>
          <img className={styles.pict} src={headphone3} />
          <div className={styles.shadow} />
        </div>
        <div className={styles.description__container}>
          {/* TITLE NEW */}
          <p className={styles.title__new}></p>

          {/* TITLE */}
          <div className={styles.title}>
            <p>XX99 Mark II Headphones</p>
          </div>

          {/* DESCRIPTION */}
          <div className={styles.description}>
            <p>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
          </div>
          <div>
            <button className={styles.btn}>See Product</button>
          </div>
        </div>
      </div>
      <CategoryContainer />
    </div>
  );
};

export default Headphones;