import { useNavigate } from "react-router-dom";

export const GoBack = () => {
  const goBack = useNavigate();

  const GoBack = () => {
    goBack(-1);
  };
  return (
    <button className="goBack" onClick={GoBack}>
      <span className="goBack__icon"></span> Go back
    </button>
  );
};
