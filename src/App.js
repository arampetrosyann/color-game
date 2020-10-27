import React, { useState, useCallback } from "react";
import "./styles/App.css";
import { PlayBox, WinBox } from "./components";

function App() {
  const [steps, setSteps] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handlePlayAgain = useCallback(() => {
    setIsFinished(false);

    setSteps(0);
  }, []);

  const handleFinish = useCallback(() => {
    setIsFinished(true);
  }, []);

  const handleStep = useCallback(() => {
    setSteps((prevStep) => prevStep + 1);
  }, []);

  return (
    <div className="app">
      {isFinished ? (
        <WinBox steps={steps} onClick={handlePlayAgain} />
      ) : (
        <PlayBox steps={steps} addStep={handleStep} finish={handleFinish} />
      )}
    </div>
  );
}

export default App;
