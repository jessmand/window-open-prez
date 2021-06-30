import { useEffect } from "react";

const MAX_COLOR_VALUE = 100;

const generateRandomColorValue = () => {
  return Math.floor(Math.random() * MAX_COLOR_VALUE);
};

export default () => {
  useEffect(() => {
    const r = generateRandomColorValue();
    const g = generateRandomColorValue();
    const b = generateRandomColorValue();
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  }, []);
};
