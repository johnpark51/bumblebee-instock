import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import DeleteInventory from "@/components/DeleteInventory/DeleteInventory";

import "./WarehouseDetailsListItem.scss";
import deleteIcon from "@/assets/Icons/delete_outline-24px.svg";
import editIcon from "@/assets/Icons/edit-24px.svg";
import chevronIcon from "@/assets/Icons/chevron_right-24px.svg";

function WarehouseDetailsListItem({
  item: { id, category, item_name, quantity, status },
}) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  function handleEdit() {
    navigate(`/inventory/edit/${id}`);
  }

  return (
    <>
      <DeleteInventory
        id={id}
        item_name={item_name}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
      <article className="warehouse-details-item">
        <div className="warehouse-details-item__container--warehouse">
          <Link
            className="warehouse-details-item__link"
            to={`/inventory/${id}`}
          >
            <h3 className="warehouse-details-item__header--tb warehouse-details-item__header-link">
              {item_name}{" "}
              <img
                className="warehouse-item__icon"
                src={chevronIcon}
                alt="chevron"
              />
            </h3>
          </Link>
          <div className="warehouse-details-item__mb">
            <h4 className="warehouse-details-item__header">inventory item</h4>
            <h3 className="warehouse-details-item__header--mb warehouse-details-item__header-link">
              {item_name}{" "}
              <img
                className="warehouse-item__icon"
                src={chevronIcon}
                alt="chevron"
              />
            </h3>
          </div>
          <div className="warehouse-details-item__mb">
            <h4 className="warehouse-details-item__header">category</h4>
            <p className="warehouse-details-item__text">{category}</p>
          </div>
        </div>
        <div className="warehouse-details-item__container--address">
          <p className="warehouse-details-item__text">{category}</p>
        </div>
        <div className="warehouse-details-item__container--contact-name">
          <div className="warehouse-details-item__text warehouse-item__text--tb">
            <button
              className={
                status === "In Stock"
                  ? "warehouse-details-item__pill warehouse-details-item__pill--is"
                  : "warehouse-details-item__pill warehouse-details-item__pill--oos"
              }
            >
              {status}
            </button>
          </div>
          <div className="warehouse-details-item__mb">
            <h4 className="warehouse-details-item__header">status</h4>
            <div className="warehouse-details-item__text">
              <button
                className={
                  status === "In Stock"
                    ? "warehouse-details-item__pill warehouse-details-item__pill--is"
                    : "warehouse-details-item__pill warehouse-details-item__pill--oos"
                }
              >
                {status}
              </button>
            </div>
          </div>
          <div className="warehouse-details-item__mb">
            <h4 className="warehouse-details-item__header">quantity</h4>
            <p className="warehouse-details-item__text">{quantity}</p>
          </div>
        </div>
        <div className="warehouse-details-item__container--contact-info">
          <p className="warehouse-details-item__text">{quantity}</p>
        </div>
        <div className="warehouse-details-item__container--actions">
          <button
            onClick={() => {
              setOpenModal(true);
            }}
            className="warehouse-details-item__button"
          >
            <img
              className="warehouse-item__icon"
              src={deleteIcon}
              alt="delete"
            />
          </button>
          <button
            onClick={() => {
              handleEdit();
            }}
            className="warehouse-details-item__button"
          >
            <img className="warehouse-item__icon" src={editIcon} alt="edit" />
          </button>
        </div>
      </article>
      <div className="warehouse-details-item-actions-mb">
        <button
          onClick={() => {
            setOpenModal(true);
          }}
          className="warehouse-details-item__button"
        >
          <img className="warehouse-item__icon" src={deleteIcon} alt="delete" />
        </button>
        <button
          onClick={() => {
            handleEdit();
          }}
          className="warehouse-details-item__button"
        >
          <img className="warehouse-item__icon" src={editIcon} alt="edit" />
        </button>
      </div>
    </>
  );
}

export default WarehouseDetailsListItem;
