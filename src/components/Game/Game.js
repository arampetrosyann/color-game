import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, ButtonsBox } from "../";
import copyArray from "../../helpers/copyArray.helper";
import generateRenderData from "../../helpers/generateRenderData.helper";
import isGameFinished from "../../helpers/isGameFinished.helper";
import fetchData from "../../services/fetchData";

export default function Game({ addStep, handleFinish }) {
  const [colors, setColors] = useState([]);
  const [maxCount, setMaxCount] = useState(null);
  const [renderColors, setRenderColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [arrIndex, setArrIndex] = useState(null);

  useEffect(() => {
    const datas = fetchData();

    datas
      .then((data) => {
        setColors(data.colors);

        setMaxCount(data.maxCount);

        const genColors = generateRenderData(data.colors, maxCount);

        setRenderColors(genColors);
      })
      .catch((error) => {
        throw new Error(`Something went wrong!`);
      });
  }, [maxCount]);

  const handleClick = (index) => {
    const colorsClone = copyArray(colors);
    const clickedColorsArray = colorsClone[index];
    const clickedColor = clickedColorsArray[clickedColorsArray.length - 1];

    if (!selectedColor) {
      clickedColorsArray.pop();

      setSelectedColor(clickedColor);

      setColors(colorsClone);

      setArrIndex(index);

      const genColors = generateRenderData(colorsClone, maxCount);

      setRenderColors(genColors);

      addStep();

      return;
    }

    if (
      clickedColorsArray.length < maxCount &&
      (!clickedColor || selectedColor === clickedColor)
    ) {
      clickedColorsArray.push(selectedColor);

      setSelectedColor("");

      setColors(colorsClone);

      const genColors = generateRenderData(colorsClone, maxCount);

      setRenderColors(genColors);

      addStep();
    }

    isGameFinished(colorsClone, maxCount, handleFinish);
  };

  const handleUndo = () => {
    if (arrIndex !== null) {
      const colorsClone = copyArray(colors);

      const preArray = colorsClone[arrIndex];

      preArray.push(selectedColor);

      setColors(colorsClone);

      const genColors = generateRenderData(colorsClone, maxCount);

      setRenderColors(genColors);

      setArrIndex(null);

      setSelectedColor("");
    }
  };

  return (
    <>
      <Button backColor={selectedColor} onClick={handleUndo} />
      <ButtonsBox colorsList={renderColors} onClick={handleClick} />
    </>
  );
}

Game.propTypes = {
  addStep: PropTypes.func,
  handleFinish: PropTypes.func,
};
