import { CoffeeContext } from "../context/CoffeeContext";
import { useContext } from "react";

const SetCoffeeBean = ({ coffeeBeans }) => {
  const { setCoffeeBeanId } = useContext(CoffeeContext);
  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        onChange={(event) => {
          setCoffeeBeanId(event.target.value);
        }}
      >
        {coffeeBeans.map((bean) => (
          <option key={bean.id} value={bean.id}>
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SetCoffeeBean;
