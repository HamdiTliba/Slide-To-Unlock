import React, { useState } from "react";
import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai";

const SlideToUnlock = () => {
  const [showLockSlider, setShowLockSlider] = useState(false);
  const [uiProps, setUiProps] = useState({
    uiText: "Slide To Unlock",
  });
  const [lockSliderValue, setLockSliderValue] = useState(0);
  const handleLockSliderInput = (e) => {
    setLockSliderValue(e.target.value);
    e.target.value === "100"
      ? setShowLockSlider(false)
      : setShowLockSlider(true);
  };
  const handleLock = () => {
    setShowLockSlider(true);
  };
  return (
    <div className="slideToUnlockScreen">
      <h1 className="title">{uiProps.uiText}</h1>
      {showLockSlider ? (
        <LockSlider width={"290px"} handleInput={handleLockSliderInput} />
      ) : (
        <AiFillUnlock className="unlockIcon" onClick={handleLock} />
      )}
    </div>
  );
};

export default SlideToUnlock;
