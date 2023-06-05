import { use } from "react";

import { AvailableCheckbox } from "../../src/components/AvailableCheckbox";
import { addCar, getCars } from "@/src/cars-database";

const CarsPage = () => {
  const cars = use(getCars());

  return (
    <div>
      <h1>Cars</h1>

      <form action={addCar}>
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="Brand" name="brand" />
        <label htmlFor="available">
          Is Available?
          <input id="available" type="checkbox" name="isAvailable" />
        </label>
        <button type="submit">Add</button>
      </form>

      <table
        style={{
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Available</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.name}</td>
              <td>{car.brand}</td>
              <td>
                <AvailableCheckbox id={car.id} isAvailable={car.isAvailable} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarsPage;
