import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import "./EditInventory.scss";
import arrow from "@/assets/Icons/arrow_back-24px.svg";
import drop from "@/assets/Icons/arrow_drop_down-24px.svg";
import useWarehouses from "@/utils/hooks/useWarehouses.js";
export default function EdtInventory() {
  const { id } = useParams();
  const { warehouses, error } = useWarehouses();
  const navigation = useNavigate();
  const item_name = useRef();
  const inputDescription = useRef();
  const inputCategory = useRef();
  const inputWarehouse = useRef();
  const [status, setStatus] = useState("");

  const handleCancel = (e) => {
    navigation("/inventory");
  };

  const putInventory = (e) => {
    if (
      status === "" ||
      inputWarehouse.current.value === "" ||
      item_name.current.value === "" ||
      inputDescription.current.value === "" ||
      inputCategory.current.value === ""
    ) {
      return false;
    } else {
      const updatedInventory = {
        warehouse_id: inputWarehouse.current.value,
        item_name: item_name.current.value,
        description: inputDescription.current.value,
        category: inputCategory.current.value,
        status: status,
      };
      axios.put(`http://localhost:8080/inventories/${id}`, updatedInventory);
      navigation("/inventory");
    }
  };

  return (
    <>
      <form className="form-edit" onSubmit={putInventory}>
        <header className="form-edit__header">
          <Link to="/">
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
                placeholder="Television"
                ref={item_name}
              />
            </section>
            <section className="form-edit__value">
              <h3 className="form-edit__subtitle">Description</h3>
              <textarea
                className="form-edit__input form-edit__input--desc"
                type="text"
                placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors'
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
                  ref={inputCategory}
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
            <section className="form-edit__value form-edit__value--drop-down">
              <h3 className="form-edit__subtitle form-edit__subtitle--drop-down">
                Warehouse
              </h3>
              <section className="form-edit__drop-down">
                <select
                  className="form-edit__input  form-edit__input--category"
                  name="warehouse"
                  id="warehouse"
                  ref={inputWarehouse}
                >
                  {warehouses &&
                    warehouses.map((ware) => {
                      return (
                        <option
                          className="form-edit__option"
                          key={ware.id}
                          value={ware.id}
                        >
                          {ware.warehouse_name}
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
              onClick={putInventory}
            >
              Save
            </button>
          </div>
        </section>
      </form>
    </>
  );
}
