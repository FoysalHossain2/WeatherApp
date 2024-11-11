import logo from "../../assets/assets/logo.svg";

export default function Logo() {
  return (
    <a href="/">
      <img className="h-9" src={logo} alt="Weather App" />
    </a>
  );
}
