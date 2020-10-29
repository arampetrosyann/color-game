const isGameFinished = (colorsList, maxCount, finish) => {
  let status = true;

  colorsList.forEach((colors) => {
    if (colors.length) {
      if (colors.length === maxCount) {
        const uniqueObj = new Set();

        colors.forEach((color) => uniqueObj.add(color));

        if (uniqueObj.size === 1) {
          return;
        }
      }

      status = false;
    }
  });

  if (status) {
    finish();
  }

  return status;
};

export default isGameFinished;
