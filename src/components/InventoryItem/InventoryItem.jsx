//Logical
import { Link, useNavigate } from "react-router-dom";

/* STYLES */
import "./InventoryItem.scss";
import deleteIcon from "@/assets/Icons/delete_outline-24px.svg";
import editIcon from "@/assets/Icons/edit-24px.svg";
import chevronIcon from "@/assets/Icons/chevron_right-24px.svg";
import DeleteInventory from "@/components/DeleteInventory/DeleteInventory";
import { useState } from "react";

function InventoryItem({
  inventory: {
    id,
    warehouse_name,
    status,
    quantity,
    item_name,
    category,
    warehouse_id,
  },
}) {
  const [openModal, setOpenModal] = useState(false);

  const navigation = useNavigate();
  const handleEdit = () => {
    navigation(`/inventory/edit/${id}`, { state: { warehouse_id } });
  };
  return (
    <>
      <DeleteInventory
        id={id}
        item_name={item_name}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
      <article className="inventory-details-item">
        <div className="inventory-details-item__container--inventory">
          <Link className="inventory-details-item__header--link" to={`/inventory/${id}`}>
            <h3 className="inventory-details-item__header--tb inventory-details-item__header-link">
              {item_name}{" "}
              <img
                className="inventory-item__icon"
                src={chevronIcon}
                alt="chevron"
              />
            </h3>
          </Link>
          <div className="inventory-details-item__mb">
            <h4 className="inventory-details-item__header">inventory item</h4>
            <Link className="link" to={`/inventory/${id}`}>
              <h3 className="inventory-details-item__header--mb inventory-details-item__header-link">
                {item_name}{" "}
                <img
                  className="inventory-item__icon"
                  src={chevronIcon}
                  alt="chevron"
                />
              </h3>
            </Link>
          </div>
          <div className="inventory-details-item__mb">
            <h4 className="inventory-details-item__header">category</h4>
            <p className="inventory-details-item__text">{category}</p>
          </div>
        </div>
        <div className="inventory-details-item__container--address">
          <p className="inventory-details-item__text">{category}</p>
        </div>
        <div className="inventory-details-item__container--contact-name">
          <div className="inventory-details-item__text inventory-details-item__text--tb">
            <button
              className={
                status === "In Stock"
                  ? "inventory-details-item__pill inventory-details-item__pill--is"
                  : "inventory-details-item__pill inventory-details-item__pill--oos"
              }
            >
              {status}
            </button>
          </div>
          <div className="inventory-details-item__mb">
            <h4 className="inventory-details-item__header">status</h4>
            <div className="inventory-details-item__text">
              <button
                className={
                  status === "In Stock"
                    ? "inventory-details-item__pill inventory-details-item__pill--is"
                    : "inventory-details-item__pill inventory-details-item__pill--oos"
                }
              >
                {status}
              </button>
            </div>
          </div>
          <div className="inventory-details-item__mb">
            <h4 className="inventory-details-item__header">quantity</h4>
            <p className="inventory-details-item__text">{quantity}</p>
          </div>
          <div className="inventory-details-item__mb">
            <h4 className="inventory-details-item__header">inventory</h4>
            <p className="inventory-details-item__text">{warehouse_name}</p>
          </div>
        </div>
        <div className="inventory-details-item__container--contact-info">
          <p className="inventory-details-item__text">{quantity}</p>
        </div>
        <div className="inventory-details-item__container--contact-ware">
          <p className="inventory-details-item__text">{warehouse_name}</p>
        </div>
        <div className="inventory-details-item__container--actions">
          <button
            onClick={() => {
              setOpenModal(true);
            }}
            className="inventory-details-item__button"
          >
            <img
              className="inventory-item__icon"
              src={deleteIcon}
              alt="delete"
            />
          </button>
          <button className="inventory-details-item__button">
            <img
              onClick={handleEdit}
              role="link"
              className="inventory-item__icon"
              src={editIcon}
              alt="edit"
            />
          </button>
        </div>
      </article>
      <div className="inventory-details-item-actions-mb">
        <button
          onClick={() => {
            setOpenModal(true);
          }}
          className="inventory-details-item__button"
        >
          <img className="inventory-item__icon" src={deleteIcon} alt="delete" />
        </button>
        <button
          onClick={handleEdit}
          className="inventory-details-item__button"
          role="link"
        >
          <img className="inventory-item__icon" src={editIcon} alt="edit" />
        </button>
      </div>
    </>
  );
}

export default InventoryItem;
