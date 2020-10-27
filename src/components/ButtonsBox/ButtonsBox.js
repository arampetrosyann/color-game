import React from "react";
import styles from "./ButtonsBox.module.css";
import PropTypes from "prop-types";

import Button from "../Button/Button";

export default function ButtonsBox({ colorsList, onClick }) {
  return (
    <div className={styles.gameBox}>
      {colorsList
        ? colorsList.map((colors, i) => (
            <div key={i} className={styles.btnBox} onClick={() => onClick(i)}>
              {colors.map((color, j) => (
                <Button key={j} backColor={color} />
              ))}
            </div>
          ))
        : null}
    </div>
  );
}

ButtonsBox.propTypes = {
  colorsList: PropTypes.array,
  onClick: PropTypes.func,
};
