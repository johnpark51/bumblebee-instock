import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import "./EditInventory.scss";
import arrow from "@/assets/Icons/arrow_back-24px.svg";
import drop from "@/assets/Icons/arrow_drop_down-24px.svg";
import useWarehouses from "@/utils/hooks/useWarehouses.js";
import useInventory from "@/utils/hooks/useInventory.js";

export default function EditInventory() {
  const { id } = useParams();
  const { warehouses } = useWarehouses();
  const { inventory, error } = useInventory(id);
  const navigate = useNavigate();
  const item_name = useRef();
  const inputDescription = useRef();
  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: null,
    warehouse_name: "",
    warehouse_id: "",
  });

  useEffect(() => {
    if (inventory && warehouses) {
      setFormData({
        item_name: inventory.item_name,
        description: inventory.description,
        category: inventory.category,
        status: inventory.status,
        quantity: inventory.quantity,
        warehouse_name: inventory.warehouse_name,
        warehouse_id:
          warehouses.find((w) => w.warehouse_name === inventory.warehouse_name)
            ?.id || "",
      });
      item_name.current.value = inventory.item_name;
      inputDescription.current.value = inventory.description;
    }
  }, [inventory, warehouses]);

  const handleCancel = () => {
    navigate("/inventory");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleWarehouseChange = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    const selectedId = e.target.options[selectedIndex].id;
    setFormData({
      ...formData,
      warehouse_name: e.target.value,
      warehouse_id: selectedId,
    });
  };

  const putInventory = (e) => {
    e.preventDefault();
    const updatedInventory = {
      ...formData,
      quantity: formData.status === "In Stock" ? formData.quantity : 0,
    };

    axios
      .put(`http://localhost:8080/inventories/${id}`, updatedInventory)
      .then(() => navigate("/inventory"))
      .catch((err) => console.error(err));
  };

  if (error) return <p>{error}</p>;

  if (!inventory) return <p>Loading...</p>;

  return (
    <form className="form-edit" onSubmit={putInventory} data-aos="fade-up">
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
              name="item_name"
              ref={item_name}
              onChange={handleInputChange}
              required
            />
          </section>
          <section className="form-edit__value">
            <h3 className="form-edit__subtitle">Description</h3>
            <textarea
              className="form-edit__input form-edit__input--desc"
              name="description"
              ref={inputDescription}
              onChange={handleInputChange}
              required
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
                value={formData.category}
                onChange={handleInputChange}
                required
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
                className="form-edit__option-img form-edit__option-img--category"
                src={drop}
                alt="^"
              />
            </section>
          </section>
        </section>
        <section className="form-edit__availability">
          <h2 className="form-edit__subheader">Item Availability</h2>
          <section className={`form-edit__status ${formData.status !== "In Stock" ? "form-edit__status--bottom" : ""}`}>
            <h3 className="form-edit__subtitle">Status</h3>
            <div className="form-edit__rad">
              <div className="form-edit__holder">
                <input
                  type="radio"
                  className="form-edit__radio"
                  name="status"
                  value="In Stock"
                  onChange={handleInputChange}
                  checked={formData.status === "In Stock"}
                  required
                />
                <label className="form-edit__lab">In Stock</label>
              </div>
              <div className="form-edit__holder">
                <input
                  type="radio"
                  className="form-edit__radio"
                  name="status"
                  value="Out of Stock"
                  onChange={handleInputChange}
                  checked={formData.status === "Out of Stock"}
                  required
                />
                <label className="form-edit__lab">Out of Stock</label>
              </div>
            </div>
          </section>
          {formData.status === "In Stock" && (
            <section className="form__value form__value--qty">
              <h3 className="form__subtitle">Quantity</h3>
              <input
                onChange={handleInputChange}
                className="form__input form__input--qty"
                type="number"
                name="quantity"
                value={formData.quantity}
                required
              />
            </section>
          )}
          <section className="form-edit__value form-edit__value--drop-down">
            <h3 className="form-edit__subtitle form-edit__subtitle--drop-down">
              Warehouse
            </h3>
            <section className="form-edit__drop-down">
              <select
                className="form-edit__input form-edit__input--category"
                name="warehouse"
                id="warehouse"
                value={formData.warehouse_name}
                onChange={handleWarehouseChange}
                required
              >
                {warehouses.map((warehouse) => (
                  <option
                    className="form-edit__option"
                    key={warehouse.id}
                    value={warehouse.warehouse_name}
                    id={warehouse.id}
                  >
                    {warehouse.warehouse_name}
                  </option>
                ))}
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
            className="form-edit__button form-edit__button--add"
            type="submit"
          >
            Save
          </button>
        </div>
      </section>
    </form>
  );
}
