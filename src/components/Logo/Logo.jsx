import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <a href="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="QTify logo" width={100} height={34} />
    </a>
  );
}
