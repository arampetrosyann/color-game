import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ style, backColor, onClick }) {
  return (
    <input
      type="button"
      className={styles.playBtn}
      style={{ ...style, backgroundColor: backColor }}
      onClick={onClick}
    />
  );
}

Button.propTypes = {
  style: PropTypes.object,
  backColor: PropTypes.string,
  onClick: PropTypes.func,
};
