import React from "react";
import styles from "./WinBox.module.css";
import PropTypes from "prop-types";

export default function WinBox({ steps, onClick }) {
  return (
    <section className={styles.winBox}>
      <h2 className={styles.winHead}>Great!</h2>
      <p className={styles.winBody}>Total steps: {steps}</p>
      <button className={styles.winBoxBtn} onClick={onClick}>
        Play Again
      </button>
    </section>
  );
}

WinBox.propTypes = {
  steps: PropTypes.number,
  onClick: PropTypes.func,
};
