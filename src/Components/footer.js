import "./index.css";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      <p>
        {isOpen ? "We are open!" : "We are closed"} {/* Ternary operator */}
      </p>
    </footer>
  );
}

export default Footer;
