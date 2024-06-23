import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./AddInventory.scss";
import arrow from "@/assets/Icons/arrow_back-24px.svg";
import drop from "@/assets/Icons/arrow_drop_down-24px.svg";
import axios from "axios";
import useWarehouse from "@/utils/hooks/useWarehouses.js";

export default function AddInventory() {
  const navigate = useNavigate();

  const { warehouses, error } = useWarehouse();
  const [formData, setFormData] = useState({
    warehouse_id: null,
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:8080/inventories", formData);
      navigate("/inventory");
    } catch (error) {
      console.error(error);
    }
  };

  if (error) <p>{error}</p>

  return (
    <>
      <form onSubmit={onSubmit} className="form" data-aos="fade-up">
        <header className="form__header">
          <Link className="form__back" to="/inventory">
            <img className="form__arrow" src={arrow} alt="<" />
          </Link>
          <h1 className="form__title">Add New Inventory Item</h1>
        </header>
        <main className="form__main">
          <section className="form__details">
            <h2 className="form__subheader">Item Details</h2>
            <section className="form__value">
              <h3 className="form__subtitle">Item Name</h3>
              <input
                name="item_name"
                onChange={onChange}
                className="form__input"
                type="text"
                placeholder="Item Name"
                required
              />
            </section>
            <section className="form__value">
              <h3 className="form__subtitle">Description</h3>
              <input
                required
                onChange={onChange}
                name="description"
                className="form__input form__input--desc"
                type="text"
                placeholder="Please enter a brief item description..."
              />
            </section>
            <section className="form__value form__value--drop-down">
              <h3 className="form__subtitle form__subtitle--drop-down">
                Category
              </h3>
              <section className="form__drop-down">
                <select
                  required
                  onChange={onChange}
                  className="form__input form__input--category"
                  name="category"
                  id="category"
                >
                  <option
                    className="form__option form__option--placeholder"
                    defaultValue
                  >
                    Please select
                  </option>
                  <option className="form__option" value="Electronics">
                    Electronics
                  </option>
                  <option className="form__option" value="Gear">
                    Gear
                  </option>
                  <option className="form__option" value="Apparel">
                    Apparel
                  </option>
                  <option className="form__option" value="Accessories">
                    Accessories
                  </option>
                  <option className="form__option" value="Health">
                    Health
                  </option>
                </select>
                <img
                  className="form__option-img  form__option-img--category"
                  src={drop}
                  alt="^"
                />
              </section>
            </section>
          </section>
          <section className="form__availability">
            <h2 className="form__subheader">Item Availability</h2>
            <section
              className={`form__status ${formData.status !== "In Stock" ? "form__status--remove" : ""}`}
            >
              <h3 className="form__subtitle">Status</h3>
              <div className="form__rad">
                <div className="form__holder">
                  <input
                    required
                    onChange={onChange}
                    type="radio"
                    className="form__radio"
                    name="status"
                    id="inStock"
                    value="In Stock"
                  />
                  <label className="form__lab">In Stock</label>
                </div>
                <div className="form__holder">
                  <input
                    required
                    onChange={onChange}
                    name="status"
                    type="radio"
                    className="form__radio"
                    value="Out of Stock"
                    id="outOfStock"
                  />
                  <label className="form__lab">Out of Stock</label>
                </div>
              </div>
            </section>
            <section
              className={`form__value ${formData.status !== "In Stock" ? "form__value--remove" : ""}`}
            >
              <h3 className="form__subtitle">Quantity</h3>
              <input
                onChange={onChange}
                className="form__input form__input--qty"
                type="number"
                placeholder="0"
                name="quantity"
              />
            </section>
            <section className="form__value form__value--drop-down">
              <h3 className="form__subtitle form__subtitle--drop-down">
                Warehouse
              </h3>
              <section className="form__drop-down">
                <select
                  required
                  onChange={onChange}
                  className="form__input form__input--category"
                  name="warehouse_id"
                  id="warehouse"
                >
                  <option
                    className="form__option form__option--placeholder"
                    defaultValue
                  >
                    Please select
                  </option>
                  {warehouses &&
                    warehouses.map((warehouse) => {
                      return (
                        <option
                          name="warehouse_id"
                          className="form__option"
                          key={warehouse.id}
                          value={warehouse.id}
                        >
                          {warehouse.warehouse_name}
                        </option>
                      );
                    })}
                </select>
                <img className="form__option-img" src={drop} alt="^" />
              </section>
            </section>
          </section>
        </main>
        <section className="form__buttons">
          <div className="form__container">
            <Link className="form__cancel" to="/inventory">
              <button className="form__button">Cancel</button>
            </Link>
            <button
              type="submit"
              className="form__button
                            form__button--add"
            >
              + Add Item
            </button>
          </div>
        </section>
      </form>
    </>
  );
}

