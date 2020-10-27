import copyArray from "./copyArray.helper";

const generateRenderData = (data, maxCount) => {
  const clonedData = copyArray(data);

  return clonedData.map((colors) => {
    if (colors.length < maxCount) {
      while (colors.length !== maxCount) {
        colors.push("");
      }
    }

    return colors;
  });
};

export default generateRenderData;
