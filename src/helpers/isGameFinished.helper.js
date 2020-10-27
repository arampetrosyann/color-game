const isGameFinished = (colorsList, maxCount, finish) => {
  let status = true;

  let count = 0;

  colorsList.forEach((colors) => {
    if (colors.length) {
      if (colors.length === maxCount) {
        const uniqueObj = new Set();

        colors.forEach((color) => uniqueObj.add(color));

        if (uniqueObj.size === 1) {
          ++count;

          return;
        }
      }

      status = false;
    }
  });

  if (count >= 3) {
    status = true;
  }

  if (status) {
    finish();
  }

  return status;
};

export default isGameFinished;
