import "./MainTitle.scss";
import planeLogo from "../../assets/android-chrome-512x512.png";

const MainTitle = () => {
  return (
    <header className="d-flex flex-row justify-content-center align-items-center bg-primary gap-4">
      <img className="main-title__logo" src={planeLogo} alt="Plane logo" />
      <h1 className="main-title__title">Travel with us</h1>
    </header>
  );
};

export default MainTitle;
