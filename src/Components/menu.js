import Pizza from "./pizza";
import pizzaData from "./data";
import "./index.css";

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div>
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
            key={pizza.name}
          />
        ))}
      </div>
    </main>
  );
}

export default Menu;
