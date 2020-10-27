import React from "react";
import styles from "./PlayBox.module.css";
import PropTypes from "prop-types";
import Game from "../Game/Game";

export default function PlayBox({ steps, addStep, finish }) {
  return (
    <>
      <div className={styles.playSteps}>steps: {steps}</div>
      <Game addStep={addStep} handleFinish={finish} />
    </>
  );
}

PlayBox.propTypes = {
  steps: PropTypes.number,
  addStep: PropTypes.func,
  finish: PropTypes.func,
};
