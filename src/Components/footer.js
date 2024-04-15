import "./index.css";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? "We are open" : "We are closed"}
    </footer>
  );
}

export default Footer;
