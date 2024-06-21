import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import "./EditInventory.scss";
import arrow from "@/assets/Icons/arrow_back-24px.svg";
import drop from "@/assets/Icons/arrow_drop_down-24px.svg";
import useWarehouses from "@/utils/hooks/useWarehouses.js";
import useInventory from "@/utils/hooks/useInventory.js";

export default function EdtInventory() {
  const { id } = useParams();
  const { warehouses } = useWarehouses();
  const { inventory, error } = useInventory(id);
  const navigation = useNavigate();
  const item_name = useRef();
  const inputDescription = useRef();
  const [category, setCategory] = useState("");
  const [ware, setWare] = useState({
    warehouse_name: "",
    warehouse_id: "",
  });
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    if (inventory) {
      setCategory(inventory.category);
      setWare({
        warehouse_name: inventory.warehouse_name,
        warehouse_id: warehouses[0].id,
      });
      setQuantity(inventory.quantity);
      setStatus(inventory.status);
      item_name.current.value = inventory.item_name;
      inputDescription.current.value = inventory.description;
    }
  }, [inventory]);

  const handleCancel = (e) => {
    navigation("/inventory");
  };

  const putInventory = (e) => {
    if (
      status === "" ||
      ware === "" ||
      item_name.current.value === "" ||
      inputDescription.current.value === "" ||
      category === ""
    ) {
      if (status === "inStock" && quantity === 0) {
        return;
      }

      return;
    } else {
      if (status === "Out of Stock") {
        const updatedInventory = {
          warehouse_id: ware.warehouse_id,
          item_name: item_name.current.value,
          description: inputDescription.current.value,
          category: category,
          status: status,
          quantity: 0,
        };
        axios.put(`http://localhost:8080/inventories/${id}`, updatedInventory);
        navigation("/inventory");
      } else {
        const updatedInventory = {
          warehouse_id: ware.warehouse_id,
          item_name: item_name.current.value,
          description: inputDescription.current.value,
          category: category,
          status: status,
          quantity: quantity,
        };
        axios.put(`http://localhost:8080/inventories/${id}`, updatedInventory);
        navigation("/inventory");
      }
    }
  };

  if (error) return <p>{error}</p>;

  if (inventory)
    return (
      <>
        <form className="form-edit" onSubmit={putInventory}>
          <header className="form-edit__header">
            <Link to="/inventory">
              <img className="form-edit__arrow" src={arrow} alt="<" />
            </Link>
            <h1 className="form-edit__title">Edit Inventory Item</h1>
          </header>
          <main className="form-edit__main">
            <section className="form-edit__details">
              <h2 className="form-edit__subheader">Item Details</h2>
              <section className="form-edit__value">
                <h3 className="form-edit__subtitle">Item Name</h3>
                <input
                  className="form-edit__input"
                  type="text"
                  ref={item_name}
                />
              </section>
              <section className="form-edit__value">
                <h3 className="form-edit__subtitle">Description</h3>
                <textarea
                  className="form-edit__input form-edit__input--desc"
                  type="text"
                  ref={inputDescription}
                />
              </section>
              <section className="form-edit__value form-edit__value--drop-down">
                <h3 className="form-edit__subtitle form-edit__subtitle--drop-down">
                  Category
                </h3>
                <section className="form-edit__drop-down">
                  <select
                    className="form-edit__input form-edit__input--category"
                    name="category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option className="form-edit__option" value="Electronics">
                      Electronics
                    </option>
                    <option className="form-edit__option" value="Gear">
                      Gear
                    </option>
                    <option className="form-edit__option" value="Apparel">
                      Apparel
                    </option>
                    <option className="form-edit__option" value="Accessories">
                      Accessories
                    </option>
                    <option className="form-edit__option" value="Health">
                      Health
                    </option>
                  </select>
                  <img
                    className="form-edit__option-img  form-edit__option-img--category"
                    src={drop}
                    alt="^"
                  />
                </section>
              </section>
            </section>
            <section className="form-edit__availability">
              <h2 className="form-edit__subheader">Item Availability</h2>
              <section className="form-edit__status">
                <h3 className="form-edit__subtitle">Status</h3>
                <div className="form-edit__rad">
                  <div className="form-edit__holder">
                    <input
                      type="radio"
                      className="form-edit__radio"
                      name="inStock"
                      id="inStock"
                      value="In Stock"
                      onChange={() => setStatus("In Stock")}
                      checked={status === "In Stock"}
                    />
                    <label className="form-edit__lab">In Stock</label>
                  </div>
                  <div className="form-edit__holder">
                    <input
                      type="radio"
                      className="form-edit__radio"
                      name="outOfStock"
                      id="outOfStock"
                      value="Out of Stock"
                      onChange={() => setStatus("Out of Stock")}
                      checked={status === "Out of Stock"}
                    />
                    <label className="form-edit__lab">Out of Stock</label>
                  </div>
                </div>
              </section>
              <section
                className={`form__value ${status !== "In Stock" ? "form__value--remove" : ""}`}
              >
                <h3 className="form__subtitle">Quantity</h3>
                <input
                  onChange={(e) => setQuantity(e.target.value)}
                  className="form__input form__input--qty"
                  type="number"
                  placeholder={quantity}
                  name="quantity"
                />
              </section>
              <section className="form-edit__value form-edit__value--drop-down">
                <h3 className="form-edit__subtitle form-edit__subtitle--drop-down">
                  Warehouse
                </h3>
                <section className="form-edit__drop-down">
                  <select
                    className="form-edit__input  form-edit__input--category"
                    name="warehouse"
                    id="warehouse"
                    value={ware.warehouse_name}
                    onChange={(e) => {
                      const selectedIndex = e.target.options.selectedIndex;
                      const selectedId = e.target.options[selectedIndex].id;
                      setWare({
                        warehouse_name: e.target.value,
                        warehouse_id: selectedId,
                      });
                    }}
                  >
                    {warehouses &&
                      warehouses.map((warehouse) => {
                        return (
                          <option
                            className="form-edit__option"
                            key={warehouse.id}
                            value={warehouse.warehouse_name}
                            id={warehouse.id}
                          >
                            {warehouse.warehouse_name}
                          </option>
                        );
                      })}
                  </select>
                  <img className="form-edit__option-img" src={drop} alt="^" />
                </section>
              </section>
            </section>
          </main>
          <section className="form-edit__buttons">
            <div className="form-edit__container">
              <button className="form-edit__button" onClick={handleCancel}>
                Cancel
              </button>
              <button
                className="form-edit__button
                            form-edit__button--add"
                type="submit"
              >
                Save
              </button>
            </div>
          </section>
        </form>
      </>
    );
}
