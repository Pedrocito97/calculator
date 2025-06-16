import investment from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
        <img src={investment} alt="logo showing a money back" />
      <h1>Investment Calculator</h1>
    </header>
  );
}